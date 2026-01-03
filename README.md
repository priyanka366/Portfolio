# Priyanka's Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Senior Software Engineer and Node.js Developer.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Sections**:
  - Hero section with profile photo
  - About me
  - Professional experience timeline
  - Technical skills
  - Projects showcase
  - Education
  - Certifications
  - Contact form

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your profile photo:
   - Place your profile photo as `profile-photo.jpg` in the `public` folder
   - Or update the image path in `src/components/Portfolio.jsx` (line 40)

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Technologies Used

- React
- Vite
- Bootstrap Icons
- CSS3 (Custom styles)

## Project Structure

```
portfolio-website/
├── public/
│   └── profile-photo.jpg (add your photo here)
├── src/
│   ├── components/
│   │   └── Portfolio.jsx
│   ├── styles/
│   │   └── Portfolio.css
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Customization

- Update personal information in `src/components/Portfolio.jsx`
- Modify colors and styles in `src/styles/Portfolio.css`
- Add or remove sections as needed

## License

Personal portfolio project - All rights reserved.
