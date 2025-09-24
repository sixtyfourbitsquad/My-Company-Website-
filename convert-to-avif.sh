#!/bin/bash

# Convert to AVIF Script for Adswadi Website
# This script helps convert existing images to AVIF format

echo "🖼️  AVIF Conversion Script for Adswadi Website"
echo "================================================"

# Check if required tools are installed
check_tool() {
    if command -v $1 &> /dev/null; then
        echo "✅ $1 is installed"
        return 0
    else
        echo "❌ $1 is not installed"
        return 1
    fi
}

echo ""
echo "Checking for conversion tools..."

# Check for common AVIF conversion tools
TOOLS_AVAILABLE=false

if check_tool "avifenc"; then
    TOOLS_AVAILABLE=true
    CONVERTER="avifenc"
elif check_tool "cavif"; then
    TOOLS_AVAILABLE=true
    CONVERTER="cavif"
elif check_tool "imagemagick"; then
    TOOLS_AVAILABLE=true
    CONVERTER="imagemagick"
else
    echo ""
    echo "❌ No AVIF conversion tools found!"
    echo ""
    echo "Please install one of the following:"
    echo "  - libavif (avifenc): https://github.com/AOMediaCodec/libavif"
    echo "  - cavif: npm install -g cavif"
    echo "  - ImageMagick with AVIF support"
    echo ""
    echo "Or use online converters:"
    echo "  - https://convertio.co/jpg-avif/"
    echo "  - https://cloudconvert.com/jpg-to-avif"
    echo "  - https://ezgif.com/jpg-to-avif"
    exit 1
fi

echo ""
echo "✅ AVIF conversion tool found: $CONVERTER"

# Function to convert images
convert_to_avif() {
    local input_file=$1
    local output_file=$2
    
    if [ ! -f "$input_file" ]; then
        echo "❌ Input file not found: $input_file"
        return 1
    fi
    
    echo "🔄 Converting $input_file to $output_file..."
    
    case $CONVERTER in
        "avifenc")
            avifenc -q 80 "$input_file" "$output_file"
            ;;
        "cavif")
            cavif -q 80 "$input_file" -o "$output_file"
            ;;
        "imagemagick")
            magick "$input_file" -quality 80 "$output_file"
            ;;
    esac
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully converted $input_file to $output_file"
        
        # Show file size comparison
        original_size=$(stat -c%s "$input_file")
        avif_size=$(stat -c%s "$output_file")
        savings=$((original_size - avif_size))
        savings_percent=$((savings * 100 / original_size))
        
        echo "📊 File size comparison:"
        echo "   Original: $(numfmt --to=iec $original_size)"
        echo "   AVIF:     $(numfmt --to=iec $avif_size)"
        echo "   Savings:  $(numfmt --to=iec $savings) ($savings_percent%)"
    else
        echo "❌ Failed to convert $input_file"
    fi
}

echo ""
echo "📁 Available images to convert:"

# Check for images in case-studies directory
if [ -d "public/case-studies" ]; then
    echo ""
    echo "Case Studies Images:"
    for img in public/case-studies/*.{jpg,jpeg,png}; do
        if [ -f "$img" ]; then
            echo "  📸 $img"
        fi
    done
fi

# Check for images in blog directory
if [ -d "public/blog" ]; then
    echo ""
    echo "Blog Images:"
    for img in public/blog/*.{jpg,jpeg,png}; do
        if [ -f "$img" ]; then
            echo "  📸 $img"
        fi
    done
fi

echo ""
echo "🚀 To convert images, run:"
echo "   ./convert-to-avif.sh convert [input_file] [output_file]"
echo ""
echo "Example:"
echo "   ./convert-to-avif.sh convert public/blog/About_Adswadi_blog.jpeg public/blog/About_Adswadi_blog.avif"
echo ""

# Handle convert command
if [ "$1" = "convert" ] && [ -n "$2" ] && [ -n "$3" ]; then
    convert_to_avif "$2" "$3"
fi
