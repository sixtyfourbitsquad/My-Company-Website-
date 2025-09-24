import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { authenticateToken } from '../middleware/auth.js';
import { BlogPost, User } from '../models/index.js';
import { Op } from 'sequelize';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp|avif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Database is now used instead of in-memory storage

// Generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

// Calculate read time (rough estimate: 200 words per minute)
const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
  const wordCount = textContent.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

// GET all blog posts (public)
router.get('/', async (req, res) => {
  try {
    const { status = 'published', limit, offset } = req.query;
    
    const options = {
      where: { status },
      order: [['publishedAt', 'DESC']],
      include: [{
        model: User,
        as: 'user',
        attributes: ['username', 'email']
      }]
    };
    
    if (limit) {
      options.limit = parseInt(limit);
      if (offset) {
        options.offset = parseInt(offset);
      }
    }
    
    const { count, rows: posts } = await BlogPost.findAndCountAll(options);
    
    res.json({
      posts,
      total: count
    });
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single blog post by slug (public)
router.get('/:slug', async (req, res) => {
  try {
    const post = await BlogPost.findOne({
      where: {
        slug: req.params.slug,
        status: 'published'
      },
      include: [{
        model: User,
        as: 'user',
        attributes: ['username', 'email']
      }]
    });
    
    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    
    // Increment view count
    await post.increment('viewCount');
    
    res.json(post);
  } catch (error) {
    console.error('Get post by slug error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET all posts for admin (protected)
router.get('/admin/all', authenticateToken, async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      order: [['createdAt', 'DESC']],
      include: [{
        model: User,
        as: 'user',
        attributes: ['username', 'email']
      }]
    });
    
    res.json({
      posts,
      total: posts.length
    });
  } catch (error) {
    console.error('Get admin posts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single post by ID for admin (protected)
router.get('/admin/:id', authenticateToken, async (req, res) => {
  try {
    const post = await BlogPost.findByPk(req.params.id, {
      include: [{
        model: User,
        as: 'user',
        attributes: ['username', 'email']
      }]
    });
    
    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    
    res.json(post);
  } catch (error) {
    console.error('Get admin post error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// CREATE new blog post (protected)
router.post('/', authenticateToken, upload.single('featuredImage'), async (req, res) => {
  try {
    const {
      title,
      excerpt,
      content,
      author,
      status = 'draft',
      tags,
      metaTitle,
      metaDescription
    } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const slug = generateSlug(title);
    
    // Check if slug already exists
    const existingPost = await BlogPost.findOne({ where: { slug } });
    if (existingPost) {
      return res.status(400).json({ error: 'A post with this title already exists' });
    }

    const newPost = await BlogPost.create({
      title,
      slug,
      excerpt: excerpt || content.substring(0, 200) + '...',
      content,
      featuredImage: req.file ? `/uploads/${req.file.filename}` : null,
      author: author || 'Adswadi Team',
      status,
      tags: tags ? (Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim())) : [],
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || excerpt || content.substring(0, 160),
      readTime: calculateReadTime(content),
      userId: req.user.id
    });

    res.status(201).json({
      message: 'Blog post created successfully',
      post: newPost
    });
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// UPDATE blog post (protected)
router.put('/:id', authenticateToken, upload.single('featuredImage'), async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await BlogPost.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    const {
      title,
      excerpt,
      content,
      author,
      status,
      tags,
      metaTitle,
      metaDescription
    } = req.body;

    const slug = title ? generateSlug(title) : post.slug;

    // Check if new slug conflicts with other posts
    if (title && slug !== post.slug) {
      const existingPost = await BlogPost.findOne({ 
        where: { slug, id: { [Op.ne]: postId } } 
      });
      if (existingPost) {
        return res.status(400).json({ error: 'A post with this title already exists' });
      }
    }

    const updateData = {
      title: title || post.title,
      slug,
      excerpt: excerpt || post.excerpt,
      content: content || post.content,
      author: author || post.author,
      status: status || post.status,
      tags: tags ? (Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim())) : post.tags,
      metaTitle: metaTitle || post.metaTitle,
      metaDescription: metaDescription || post.metaDescription,
      readTime: content ? calculateReadTime(content) : post.readTime
    };

    // Handle featured image
    if (req.file) {
      updateData.featuredImage = `/uploads/${req.file.filename}`;
    }

    await post.update(updateData);

    res.json({
      message: 'Blog post updated successfully',
      post
    });
  } catch (error) {
    console.error('Update post error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE blog post (protected)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await BlogPost.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    // Delete associated image file if exists
    if (post.featuredImage) {
      const imagePath = path.join(__dirname, '..', post.featuredImage);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await post.destroy();

    res.json({
      message: 'Blog post deleted successfully',
      post
    });
  } catch (error) {
    console.error('Delete post error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Upload image endpoint (protected)
router.post('/upload-image', authenticateToken, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    res.json({
      message: 'Image uploaded successfully',
      imageUrl: `/uploads/${req.file.filename}`
    });
  } catch (error) {
    console.error('Image upload error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
