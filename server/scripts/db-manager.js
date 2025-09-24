#!/usr/bin/env node

import { sequelize, User, BlogPost, initializeDatabase, seedBlogPosts } from '../models/index.js';

const commands = {
  async reset() {
    console.log('🔄 Resetting database...');
    await sequelize.sync({ force: true });
    console.log('✅ Database reset complete.');
    
    await initializeDatabase();
    await seedBlogPosts();
    console.log('✅ Database reinitialized with sample data.');
  },

  async seed() {
    console.log('🌱 Seeding database...');
    await seedBlogPosts();
    console.log('✅ Database seeded with sample data.');
  },

  async stats() {
    console.log('📊 Database Statistics:');
    const userCount = await User.count();
    const postCount = await BlogPost.count();
    const publishedCount = await BlogPost.count({ where: { status: 'published' } });
    const draftCount = await BlogPost.count({ where: { status: 'draft' } });
    
    console.log(`👥 Users: ${userCount}`);
    console.log(`📝 Total Posts: ${postCount}`);
    console.log(`📰 Published Posts: ${publishedCount}`);
    console.log(`📄 Draft Posts: ${draftCount}`);
  },

  async backup() {
    const fs = await import('fs');
    const path = await import('path');
    const { fileURLToPath } = await import('url');
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    const dbPath = path.join(__dirname, '..', 'database.sqlite');
    const backupPath = path.join(__dirname, '..', `database-backup-${Date.now()}.sqlite`);
    
    fs.copyFileSync(dbPath, backupPath);
    console.log(`💾 Database backed up to: ${backupPath}`);
  },

  help() {
    console.log(`
🗄️  Database Manager for Adswadi Website

Usage: node server/scripts/db-manager.js <command>

Commands:
  reset     - Reset database and reinitialize with sample data
  seed      - Add sample blog posts to database
  stats     - Show database statistics
  backup    - Create a backup of the database
  help      - Show this help message

Examples:
  node server/scripts/db-manager.js reset
  node server/scripts/db-manager.js stats
  node server/scripts/db-manager.js backup
    `);
  }
};

const command = process.argv[2];

if (!command || !commands[command]) {
  commands.help();
  process.exit(1);
}

try {
  await commands[command]();
  process.exit(0);
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
