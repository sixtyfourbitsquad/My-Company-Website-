# Adswadi Admin Panel

A comprehensive admin panel for managing blog content with authentication, SEO features, and modern UI.

## 🚀 Features

### Authentication & Security
- **Secure Login System**: JWT-based authentication with bcrypt password hashing
- **Session Management**: Automatic token validation and session expiry
- **Password Management**: Change password functionality with validation
- **Route Protection**: Protected admin routes with middleware

### Blog Management
- **Create & Edit Posts**: Rich text editor with HTML support
- **Draft & Publish**: Save posts as drafts or publish immediately
- **SEO Optimization**: Meta titles, descriptions, and auto-generated slugs
- **Image Upload**: Featured image support with file validation
- **Tag System**: Organize posts with custom tags
- **Content Preview**: Real-time preview of blog posts

### Dashboard Features
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Statistics**: Overview of total posts, published, and drafts
- **Search & Filter**: Find posts by title, content, or tags
- **Bulk Actions**: Manage multiple posts efficiently
- **Real-time Updates**: Live data synchronization

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Backend Server
```bash
npm run server:dev
```
The server will start on `http://localhost:5000`

### 3. Start the Frontend Development Server
```bash
npm run dev
```
The frontend will start on `http://localhost:5173`

## 🔐 Admin Access

### Default Login Credentials
- **Username**: `admin`
- **Password**: `admin123`

### Admin Panel URLs
- **Login**: `http://localhost:5173/admin/login`
- **Dashboard**: `http://localhost:5173/admin/dashboard`
- **Settings**: `http://localhost:5173/admin/settings`

## 📁 Project Structure

```
├── server/                     # Backend API
│   ├── index.js               # Main server file
│   ├── middleware/            # Authentication middleware
│   │   └── auth.js
│   ├── routes/                # API routes
│   │   ├── auth.js           # Authentication routes
│   │   └── blog.js           # Blog CRUD routes
│   └── uploads/              # Uploaded images storage
├── src/
│   ├── pages/                # React pages
│   │   ├── AdminLogin.tsx    # Login page
│   │   ├── AdminDashboard.tsx # Main dashboard
│   │   ├── AdminPostEditor.tsx # Post creation/editing
│   │   ├── AdminSettings.tsx  # Admin settings
│   │   └── BlogPageNew.tsx   # Public blog display
│   └── components/           # Existing components
└── package.json              # Dependencies and scripts
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/change-password` - Change password
- `GET /api/admin/verify` - Verify token (protected)

### Blog Management
- `GET /api/blog` - Get published posts (public)
- `GET /api/blog/:slug` - Get single post by slug (public)
- `GET /api/blog/admin/all` - Get all posts (protected)
- `GET /api/blog/admin/:id` - Get post by ID (protected)
- `POST /api/blog` - Create new post (protected)
- `PUT /api/blog/:id` - Update post (protected)
- `DELETE /api/blog/:id` - Delete post (protected)
- `POST /api/blog/upload-image` - Upload image (protected)

## 🎨 Admin Panel Features

### Dashboard
- **Statistics Cards**: Quick overview of blog metrics
- **Post Management Table**: List all posts with actions
- **Search & Filter**: Find posts quickly
- **Responsive Design**: Works on all devices

### Post Editor
- **Rich Content Editor**: HTML support for formatting
- **SEO Tab**: Meta title and description optimization
- **Featured Image**: Upload and manage post images
- **Tag Management**: Add and remove tags easily
- **Draft/Publish**: Control post visibility
- **Auto-save**: Prevent data loss

### Settings
- **Profile Management**: View admin information
- **Password Change**: Secure password updates
- **System Information**: Admin panel status

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for secure password storage
- **Route Protection**: Middleware to protect admin routes
- **File Upload Validation**: Secure image upload with type checking
- **Session Management**: Automatic token expiry and refresh

## 📱 Responsive Design

The admin panel is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Production Deployment

### Environment Variables
Create a `.env` file in the root directory:
```env
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
NODE_ENV=production
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run server
```

## 🔧 Customization

### Adding New Admin Users
Edit `server/routes/auth.js` and add new users to the `adminUsers` array:
```javascript
const adminUsers = [
  {
    id: 1,
    username: 'admin',
    password: '$2a$10$...', // Use bcrypt to hash passwords
    role: 'admin',
    email: 'admin@adswadi.com'
  },
  // Add new users here
];
```

### Changing Default Styles
The admin panel uses Tailwind CSS. Modify the classes in the React components to customize the appearance.

### Adding New Features
1. Create new API endpoints in `server/routes/`
2. Add corresponding React components in `src/pages/` or `src/components/`
3. Update the routing in `src/App.tsx`

## 🐛 Troubleshooting

### Common Issues

1. **Server won't start**
   - Check if port 5000 is available
   - Ensure all dependencies are installed

2. **Login not working**
   - Verify the server is running on port 5000
   - Check browser console for errors

3. **Images not uploading**
   - Ensure the `server/uploads` directory exists
   - Check file size limits (5MB max)

4. **Posts not saving**
   - Verify authentication token is valid
   - Check server logs for errors

### Debug Mode
Start the server with debug logging:
```bash
DEBUG=* npm run server:dev
```

## 📞 Support

For issues or questions about the admin panel:
1. Check the troubleshooting section above
2. Review the server logs for error messages
3. Ensure all dependencies are properly installed

## 🔄 Updates & Maintenance

### Regular Tasks
- **Backup Data**: Regularly backup your blog posts and images
- **Update Dependencies**: Keep packages up to date for security
- **Monitor Logs**: Check server logs for any issues
- **Password Changes**: Regularly update admin passwords

### Version Updates
When updating the admin panel:
1. Backup your current data
2. Update the code
3. Run `npm install` to update dependencies
4. Test all functionality before going live

---

**Admin Panel Version**: 1.0.0  
**Last Updated**: September 2025  
**Developed by**: Adswadi Team
