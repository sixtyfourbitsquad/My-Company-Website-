# 🚀 Complete Deployment Guide - Adswadi Website

## Overview

This guide covers deploying your Adswadi website with SQLite database to **Vercel** using **GitHub** for version control.

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free tier works)
- ✅ Your website code ready (which you have!)

## 🗄️ SQLite on Vercel - Important Notes

### ⚠️ **Critical Limitation**
Vercel's serverless functions are **stateless** and **read-only**. This means:
- ❌ SQLite files cannot be written to in production
- ❌ Database changes won't persist between deployments
- ❌ User-generated content will be lost

### 🎯 **Recommended Solutions**

#### Option 1: Use Vercel Postgres (Recommended)
```bash
# Install Vercel Postgres
npm install @vercel/postgres
```

#### Option 2: Use PlanetScale (MySQL)
```bash
# Install PlanetScale client
npm install @planetscale/database
```

#### Option 3: Use Supabase (PostgreSQL)
```bash
# Install Supabase client
npm install @supabase/supabase-js
```

## 🚀 Deployment Steps

### Step 1: Prepare Your Code for Production

1. **Update Environment Configuration**

Create `.env.example`:
```env
# Database Configuration
DATABASE_URL=your_database_url_here
NODE_ENV=production

# JWT Secret (generate a strong secret)
JWT_SECRET=your_jwt_secret_here

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here
```

2. **Create Production Database Config**

Update `server/config/database.js`:
```javascript
import { Sequelize } from 'sequelize';

const isProduction = process.env.NODE_ENV === 'production';

let sequelize;

if (isProduction) {
  // Use Vercel Postgres or other cloud database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres', // or 'mysql' for PlanetScale
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
  });
} else {
  // Local SQLite for development
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './server/database.sqlite',
    logging: console.log,
  });
}

export { sequelize };
```

### Step 2: GitHub Setup

1. **Initialize Git Repository**
```bash
cd "/home/sixty4bit/Persnoal Files/Work/Webiste_/Adswadi/NEW WITH ADMIN PANEL"

# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Adswadi website with database"
```

2. **Create GitHub Repository**
- Go to [GitHub.com](https://github.com)
- Click "New Repository"
- Name: `adswadi-website`
- Make it **Private** (recommended for business sites)
- Don't initialize with README (you already have code)

3. **Push to GitHub**
```bash
# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/adswadi-website.git

# Push code
git branch -M main
git push -u origin main
```

### Step 3: Database Setup (Choose One)

#### Option A: Vercel Postgres (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Create Vercel Postgres Database**
```bash
# Login to Vercel
vercel login

# Create database
vercel postgres create adswadi-db
```

3. **Update Database Models**
```javascript
// server/models/index.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});
```

#### Option B: PlanetScale (MySQL)

1. **Create PlanetScale Account**
- Go to [PlanetScale.com](https://planetscale.com)
- Create free account
- Create database: `adswadi-website`

2. **Get Connection String**
- Copy the connection string from PlanetScale dashboard

3. **Update Models for MySQL**
```javascript
// server/models/BlogPost.js
// Change JSON type to TEXT for MySQL compatibility
tags: {
  type: DataTypes.TEXT,
  allowNull: true,
  get() {
    const value = this.getDataValue('tags');
    return value ? JSON.parse(value) : [];
  },
  set(value) {
    this.setDataValue('tags', JSON.stringify(value || []));
  }
},
```

### Step 4: Vercel Deployment

1. **Create `vercel.json`**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.js",
      "use": "@vercel/node"
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

2. **Update Package.json**
```json
{
  "scripts": {
    "build": "vite build",
    "start": "node server/index.js",
    "vercel-build": "npm run build"
  }
}
```

3. **Deploy to Vercel**

**Method 1: Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: adswadi-website
# - Directory: ./
# - Build command: npm run build
# - Output directory: dist
```

**Method 2: Vercel Dashboard**
- Go to [Vercel.com](https://vercel.com)
- Click "New Project"
- Import from GitHub
- Select your `adswadi-website` repository
- Configure:
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Install Command: `npm install`

### Step 5: Environment Variables

In Vercel Dashboard:
1. Go to your project → Settings → Environment Variables
2. Add these variables:

```
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=production
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_admin_password
```

### Step 6: Database Migration

Create a migration script for production:

```javascript
// server/scripts/migrate-production.js
import { initializeDatabase, seedBlogPosts } from '../models/index.js';

const migrate = async () => {
  try {
    console.log('🔄 Running production migration...');
    
    await initializeDatabase();
    console.log('✅ Database initialized');
    
    await seedBlogPosts();
    console.log('✅ Sample data seeded');
    
    console.log('🎉 Migration complete!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
};

migrate();
```

Run migration after first deployment:
```bash
# Using Vercel CLI
vercel env pull .env.local
node server/scripts/migrate-production.js
```

## 🔧 Local Development vs Production

### Development (SQLite)
```bash
npm run server:dev  # Uses SQLite
npm run dev         # Frontend development
```

### Production (Cloud Database)
```bash
npm run build       # Build for production
npm start           # Production server
```

## 📁 File Structure After Setup

```
adswadi-website/
├── .env.example
├── .env.local (local only)
├── vercel.json
├── DATABASE_SETUP.md
├── DEPLOYMENT_GUIDE.md
├── server/
│   ├── config/database.js (updated for production)
│   ├── scripts/migrate-production.js
│   └── database.sqlite (development only)
├── dist/ (built files)
└── src/ (React frontend)
```

## 🚨 Important Security Notes

1. **Never commit sensitive data**:
```bash
# Add to .gitignore
.env
.env.local
.env.production
server/database.sqlite
node_modules/
dist/
```

2. **Use strong passwords** for admin accounts
3. **Use HTTPS** in production (Vercel provides this automatically)
4. **Rotate JWT secrets** regularly

## 🔄 Deployment Workflow

1. **Make changes locally**
2. **Test with SQLite** (`npm run server:dev`)
3. **Commit to GitHub**:
```bash
git add .
git commit -m "Your changes"
git push origin main
```
4. **Vercel auto-deploys** from GitHub
5. **Test production** deployment

## 🐛 Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`

2. **Database Connection Fails**
   - Verify environment variables in Vercel
   - Check database connection string format

3. **API Routes Not Working**
   - Ensure `vercel.json` routes are correct
   - Check server file paths

### Debug Commands:
```bash
# Check Vercel logs
vercel logs

# Test database connection locally
npm run db:stats

# Build locally to test
npm run build
```

## 🎯 Next Steps After Deployment

1. **Custom Domain**: Add your domain in Vercel dashboard
2. **SSL Certificate**: Automatic with Vercel
3. **Analytics**: Already included with Vercel Analytics
4. **Monitoring**: Set up error tracking
5. **Backups**: Set up automated database backups

## 📞 Support

If you encounter issues:
1. Check Vercel documentation
2. Review database provider docs
3. Check GitHub Actions (if using)
4. Vercel community forums

---

Your Adswadi website will be live and fully functional with persistent database storage! 🚀
