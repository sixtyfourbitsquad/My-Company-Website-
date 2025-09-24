# 🗄️ Database Setup - Adswadi Website

## Overview

The Adswadi website now uses **SQLite** with **Sequelize ORM** for persistent data storage. This replaces the previous in-memory storage system and provides:

- ✅ **Persistent data storage** - Data survives server restarts
- ✅ **Relational data structure** - Proper relationships between users and posts
- ✅ **Data integrity** - Validation and constraints
- ✅ **Easy migration path** - Can easily switch to PostgreSQL/MySQL later
- ✅ **Backup and restore** - Simple file-based backups

## Database Structure

### Tables

#### `users`
- `id` (Primary Key)
- `username` (Unique)
- `email` (Unique, Optional)
- `password` (Hashed with bcrypt)
- `role` (admin, editor, author)
- `isActive` (Boolean)
- `lastLogin` (Timestamp)
- `createdAt`, `updatedAt` (Auto-managed)

#### `blog_posts`
- `id` (Primary Key)
- `title`, `slug` (Unique)
- `excerpt`, `content`
- `featuredImage` (File path)
- `author`, `status` (draft, published, archived)
- `publishedAt` (Auto-set when published)
- `tags` (JSON array)
- `metaTitle`, `metaDescription` (SEO)
- `readTime` (Auto-calculated)
- `viewCount` (Auto-incremented)
- `userId` (Foreign Key to users)
- `createdAt`, `updatedAt` (Auto-managed)

### Relationships
- **User** has many **BlogPosts** (One-to-Many)
- **BlogPost** belongs to **User** (Many-to-One)

## Files Structure

```
server/
├── config/
│   └── database.js          # Database connection config
├── models/
│   ├── index.js            # Model relationships & initialization
│   ├── User.js             # User model with auth methods
│   └── BlogPost.js         # Blog post model with utilities
├── scripts/
│   └── db-manager.js       # Database management utilities
└── database.sqlite         # SQLite database file (auto-created)
```

## Default Credentials

After initialization, a default admin user is created:
- **Username:** `admin`
- **Password:** `admin123`
- **Email:** `admin@adswadi.com`
- **Role:** `admin`

## Database Management

### Using the DB Manager Script

```bash
# Show database statistics
node server/scripts/db-manager.js stats

# Reset database (WARNING: Deletes all data)
node server/scripts/db-manager.js reset

# Add sample blog posts
node server/scripts/db-manager.js seed

# Create database backup
node server/scripts/db-manager.js backup

# Show help
node server/scripts/db-manager.js help
```

### Manual Database Operations

```javascript
// Import models
import { User, BlogPost } from './server/models/index.js';

// Create a new user
const user = await User.create({
  username: 'newuser',
  email: 'user@example.com',
  password: 'password123',
  role: 'editor'
});

// Create a blog post
const post = await BlogPost.create({
  title: 'My New Post',
  slug: 'my-new-post',
  content: '<p>Post content here</p>',
  status: 'published',
  userId: user.id
});

// Find published posts
const publishedPosts = await BlogPost.findPublished();

// Find post by slug
const post = await BlogPost.findBySlug('my-post-slug');
```

## API Changes

All API endpoints now use the database instead of in-memory storage:

### Blog Endpoints
- `GET /api/blog` - Get published posts (with user info)
- `GET /api/blog/:slug` - Get single post by slug (increments view count)
- `GET /api/blog/admin/all` - Get all posts for admin
- `GET /api/blog/admin/:id` - Get single post by ID
- `POST /api/blog` - Create new post (requires auth)
- `PUT /api/blog/:id` - Update post (requires auth)
- `DELETE /api/blog/:id` - Delete post (requires auth)

### Auth Endpoints
- `POST /api/auth/login` - Login with database user validation
- `POST /api/auth/change-password` - Change password (updates database)

## Migration from In-Memory Storage

The migration is **automatic** when you restart the server:

1. **Database initialization** - Creates tables if they don't exist
2. **Default user creation** - Creates admin user if none exists
3. **Sample data seeding** - Adds sample blog posts if database is empty

Your existing admin panel will work seamlessly with the new database backend.

## Backup Strategy

### Automatic Backups
The database file is located at `server/database.sqlite`. You can:

1. **Copy the file** for instant backups
2. **Use the backup script**: `node server/scripts/db-manager.js backup`
3. **Version control** - Add to git (small file size)

### Restore Process
1. Stop the server
2. Replace `server/database.sqlite` with your backup file
3. Restart the server

## Production Considerations

### For Production Deployment:

1. **Environment Variables**
   ```bash
   NODE_ENV=production
   DATABASE_URL=sqlite:./database.sqlite
   ```

2. **Database Location**
   - Ensure the database file is in a persistent directory
   - Set proper file permissions (readable/writable by app only)

3. **Backup Schedule**
   - Set up automated daily backups
   - Store backups in a separate location/service

### Migration to PostgreSQL/MySQL

When ready to scale, you can easily migrate:

```javascript
// Change database.js configuration
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // or 'mysql'
  // ... other options
});
```

The models and relationships will work identically.

## Troubleshooting

### Common Issues

1. **Database locked error**
   - Stop all server instances
   - Check for zombie processes: `ps aux | grep node`
   - Kill processes: `pkill -f "node.*server"`

2. **Permission errors**
   - Ensure write permissions in server directory
   - Check file ownership: `ls -la server/database.sqlite`

3. **Migration issues**
   - Reset database: `node server/scripts/db-manager.js reset`
   - Check server logs for detailed error messages

### Database Corruption
If the database becomes corrupted:

1. Stop the server
2. Delete `server/database.sqlite`
3. Restart the server (will recreate with sample data)
4. Restore from backup if needed

## Performance Notes

- **SQLite** is perfect for small to medium websites
- **File-based** - No separate database server needed
- **Fast reads** - Excellent for blog/content websites
- **Concurrent writes** - Limited (but sufficient for admin panel usage)
- **File size** - Grows with content but remains manageable

## Security

- ✅ **Password hashing** - bcrypt with salt rounds
- ✅ **SQL injection protection** - Sequelize ORM handles this
- ✅ **Input validation** - Model-level validation
- ✅ **Authentication** - JWT token-based auth
- ✅ **File permissions** - Database file should be app-only accessible

---

Your Adswadi website now has a robust, persistent database system! 🎉
