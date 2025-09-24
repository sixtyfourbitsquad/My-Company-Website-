import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const BlogPost = sequelize.define('BlogPost', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255],
    },
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [1, 255],
    },
  },
  excerpt: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  featuredImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Adswadi Team',
  },
  status: {
    type: DataTypes.ENUM('draft', 'published', 'archived'),
    defaultValue: 'draft',
  },
  publishedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  tags: {
    type: process.env.NODE_ENV === 'production' && process.env.DATABASE_URL?.includes('mysql') 
      ? DataTypes.TEXT 
      : DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
    get() {
      const value = this.getDataValue('tags');
      if (typeof value === 'string') {
        try {
          return JSON.parse(value);
        } catch {
          return [];
        }
      }
      return value || [];
    },
    set(value) {
      if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL?.includes('mysql')) {
        this.setDataValue('tags', JSON.stringify(value || []));
      } else {
        this.setDataValue('tags', value || []);
      }
    }
  },
  metaTitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  metaDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  readTime: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
  },
  viewCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
}, {
  tableName: 'blog_posts',
  hooks: {
    beforeCreate: (post) => {
      if (post.status === 'published' && !post.publishedAt) {
        post.publishedAt = new Date();
      }
    },
    beforeUpdate: (post) => {
      if (post.changed('status') && post.status === 'published' && !post.publishedAt) {
        post.publishedAt = new Date();
      }
    },
  },
});

// Instance methods
BlogPost.prototype.generateSlug = function(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

BlogPost.prototype.calculateReadTime = function(content) {
  const wordsPerMinute = 200;
  const textContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
  const wordCount = textContent.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

// Class methods
BlogPost.findPublished = function(options = {}) {
  return this.findAll({
    where: {
      status: 'published',
      ...options.where,
    },
    order: [['publishedAt', 'DESC']],
    ...options,
  });
};

BlogPost.findBySlug = function(slug) {
  return this.findOne({
    where: {
      slug,
      status: 'published',
    },
  });
};

export default BlogPost;
