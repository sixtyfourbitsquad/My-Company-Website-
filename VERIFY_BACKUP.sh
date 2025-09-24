#!/bin/bash

echo "🔍 Adswadi Website Backup Verification"
echo "======================================"
echo ""

# Check backup archive
if [ -f "site-backup-20250830-092117.tar.gz" ]; then
    echo "✅ Backup Archive: site-backup-20250830-092117.tar.gz"
    echo "   Size: $(ls -lh site-backup-20250830-092117.tar.gz | awk '{print $5}')"
else
    echo "❌ Backup Archive: NOT FOUND"
fi

echo ""

# Check backup directory
if [ -d "site-backup-20250830-092117" ]; then
    echo "✅ Backup Directory: site-backup-20250830-092117/"
    echo "   Contents:"
    
    # Check key directories
    if [ -d "site-backup-20250830-092117/src" ]; then
        echo "   ✅ src/ - Source code"
    else
        echo "   ❌ src/ - Missing"
    fi
    
    if [ -d "site-backup-20250830-092117/public" ]; then
        echo "   ✅ public/ - Static assets"
    else
        echo "   ❌ public/ - Missing"
    fi
    
    if [ -f "site-backup-20250830-092117/package.json" ]; then
        echo "   ✅ package.json - Dependencies"
    else
        echo "   ❌ package.json - Missing"
    fi
    
    if [ -f "site-backup-20250830-092117/sitemap.xml" ]; then
        echo "   ✅ sitemap.xml - SEO sitemap"
    else
        echo "   ❌ sitemap.xml - Missing"
    fi
    
    if [ -f "site-backup-20250830-092117/vercel.json" ]; then
        echo "   ✅ vercel.json - Vercel config"
    else
        echo "   ❌ vercel.json - Missing"
    fi
    
    if [ -f "site-backup-20250830-092117/BACKUP_SUMMARY.md" ]; then
        echo "   ✅ BACKUP_SUMMARY.md - Documentation"
    else
        echo "   ❌ BACKUP_SUMMARY.md - Missing"
    fi
    
else
    echo "❌ Backup Directory: NOT FOUND"
fi

echo ""
echo "📊 Backup Summary:"
echo "=================="
echo "📅 Date: August 30, 2025"
echo "⏰ Time: 09:21:17"
echo "🌐 Website: https://adswadi.com"
echo "📦 Type: Complete Site Backup"
echo "💾 Archive: site-backup-20250830-092117.tar.gz"
echo "📁 Directory: site-backup-20250830-092117/"

echo ""
echo "🚀 To restore:"
echo "   tar -xzf site-backup-20250830-092117.tar.gz"
echo "   cd site-backup-20250830-092117"
echo "   npm install"
echo "   npm run build"
echo ""
echo "✅ Backup verification complete!"
