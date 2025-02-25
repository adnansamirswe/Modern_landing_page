# Modern Landing Page

A stunning, responsive landing page built with Next.js and Tailwind CSS, featuring eye-catching animations powered by Framer Motion.

## Features

- Fully responsive design for all device sizes
- Beautiful animations and transitions using Framer Motion
- Modern UI with gradient effects and interactive elements
- Optimized for performance and SEO
- Easy to customize and extend

## Sections

- Hero Section with animated particles background
- Features display with interactive cards
- About/Services section with statistics
- Animated testimonial carousel
- Pricing tables with highlight effects
- Contact form with animated input fields
- Responsive footer with navigation links

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository or download the source code

2. Install the dependencies:

```bash
npm install
# or
yarn install
```

3. Required packages:

```bash
npm install framer-motion
# or
yarn add framer-motion
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

### Building for Production

```bash
npm run build
# or
yarn build
```

Then, you can start the production server:

```bash
npm run start
# or
yarn start
```

## Customization

### Modifying Colors

The color scheme can be modified in the `globals.css` file by changing the CSS variables in the `:root` selector.

### Changing Content

Each section is a separate component in the `components` folder. You can modify the text, images, and other content directly in these files.

### Adding New Sections

To add a new section:

1. Create a new component in the `components` folder
2. Import it in the `app/page.js` file
3. Add it to the layout

## Deployment

This project can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/modern-landing-page)

Or any other hosting service that supports Next.js applications.

## License

This project is MIT licensed.
