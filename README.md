# Modern Portfolio Website

A responsive portfolio website built with Next.js 13 and Tailwind CSS. This portfolio showcases professional experience, projects, and skills in an elegant and interactive way.

## 🌟 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Interactive Components**: 
  - Animated tech stack showcase
  - Project gallery
  - Contact section
  - Hero section with orbital animation
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Animations**: Tailwind CSS animations
- **Type Safety**: TypeScript

## 📦 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── favicon.ico     # Site favicon
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── assets/             # Static assets
├── components/         # React components
│   ├── Card.tsx
│   ├── CardHeader.tsx
│   ├── HeroOrbit.tsx
│   ├── SectionHeader.tsx
│   ├── Technologies.tsx
│   └── ToolboxItems.tsx
└── sections/          # Page sections
    ├── About.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── Header.tsx
```

## 🛠️ Setup & Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm start
   ```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. Customize the design by:
- Modifying Tailwind classes in components
- Updating the Tailwind configuration
- Adding custom CSS in `globals.css`

### Components
- Components are organized by feature and section
- Modify existing components or create new ones in the `components/` directory
- Section components are stored in the `sections/` directory

## 📱 Responsive Design

The website is responsive across different breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment
The project is configured for static exports and can be deployed to various platforms:

```javascript
// next.config.js
module.exports = {
  output: 'export',
  // ... other config
};
```

### Deployment Platforms
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

## 🔍 SEO

The project includes:
- Meta tags
- Open Graph tags
- Semantic HTML
- Sitemap generation
- Robots.txt


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request


## ✨ Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [svG Icons](https://www.svgrepo.com/vectors/figma/)
