# Profile Photo Setup Instructions

## How to Add Your Profile Photo

1. **Place your photo in the public folder:**
   - Copy your profile photo file
   - Rename it to `profile-photo.jpg` (or keep your original name)
   - Place it in the `public` folder of this project

2. **Update the image path in Portfolio.jsx:**
   - Open `src/components/Portfolio.jsx`
   - Find line 40 (the img tag in the hero section)
   - Update the `src` attribute to match your photo filename:
     ```jsx
     <img src="/profile-photo.jpg" alt="Priyanka" />
     ```
   - If your photo has a different name, use: `/your-photo-name.jpg`

3. **Supported formats:**
   - JPG/JPEG (recommended)
   - PNG
   - WebP

4. **Recommended photo specifications:**
   - Square aspect ratio (1:1) works best
   - Minimum size: 300x300 pixels
   - Recommended size: 600x600 pixels or larger
   - File size: Keep under 500KB for faster loading

5. **After adding the photo:**
   - The photo will automatically appear when you run `npm run dev`
   - The image will be displayed as a circular profile picture in the hero section

## Current Image Path
The portfolio is currently configured to look for: `/profile-photo.jpg` in the `public` folder.

