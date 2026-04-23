# Interior Design By DMI Ltd

Welcome to the official website repository for Interior Design By DMI Ltd.

## Project Overview
This is a responsive, modern website built with HTML and Tailwind CSS to showcase the interior design services offered by DMI Ltd. The site features:

- Responsive navigation with mobile menu
- Hero section with call-to-action
- Services overview
- Project gallery
- About section
- Contact form
- Footer

## Technologies Used
- HTML5
- Tailwind CSS (properly set up with build process)
- JavaScript (vanilla)

## File Structure
```
project-root/
├── index.html
├── css/
│   ├── tailwind.css
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── placeholder.svg
├── tailwind.config.js
├── package.json
├── .gitignore
└── README.md
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (usually comes with Node.js)

### Installation Steps

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## Development

To start the development server and watch for CSS changes:

```bash
npm run watch:css
```

This will watch for changes in your template files and the tailwind.css file, and automatically rebuild the styles.css file.

## Building for Production

To build the CSS for production (this will minify the CSS and remove unused styles):

```bash
npm run build:css
```

The production CSS will be generated in `css/styles.css`.

## How Tailwind CSS Works in This Project

1. We use `@tailwind` directives in `css/tailwind.css` to include the base, components, and utilities styles
2. The Tailwind CLI processes this file, scans our HTML and JS files for Tailwind classes
3. It generates a optimized `css/styles.css` file with only the classes we actually use
4. The HTML file links to the generated CSS file instead of using the CDN

## Customization

### Theme Configuration
Custom colors and other theme options can be modified in `tailwind.config.js`.

### Adding New Classes
If you add classes dynamically with JavaScript, you may need to add them to the `safelist` in `tailwind.config.js` to prevent them from being purged.

## File Structure Explanation
- `tailwind.css`: Source file with @tailwind directives
- `styles.css`: Generated file that's linked in HTML
- `tailwind.config.js`: Configuration file for Tailwind
- `package.json`: Contains scripts for building CSS

## License
This project is for educational and commercial use. Replace all placeholder content before deployment.