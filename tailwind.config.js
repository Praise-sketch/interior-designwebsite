/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./js/*.js",
    "./js/**/*.js",
    "./css/*.css"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#6b7280',
        accent: '#8b5cf6',
      },
    },
  },
  plugins: [],
  // Production settings
  corePlugins: {
    // Enable important directive for better specificity control
    preflight: true,
  },
  // Remove unused styles in production
  safelist: [
    // Keep classes for dynamic content
    'hidden',
    'bg-white',
    'text-gray-800',
    'text-white',
    'bg-black'
  ]
}