# Portfolio Web

> An elegant personal portfolio showcasing your work, built with Astro and Tailwind CSS.

## Description

Minimalist and modern personal portfolio website created to showcase my projects and experience. This project uses **Astro** for static site generation and **Tailwind CSS** for stylish and responsive design. The style has been inspired in [Midu's portfolio](https://github.com/midudev/porfolio.dev) but done from scratch and adding new functionallities.

The website includes sections for:
- **Hero**: A brief introduction.
- **Experience**: My professional experience.
- **Projects**: Highlights of key projects with links and descriptions.
- **About Me**: A more personal and detailed description about me

Visit the portfolio at [https://nullgaro.com](https://nullgaro.com).

## Installation

### Clone the Repository

To get started, clone the repository to your local machine:

```sh
git clone https://github.com/nullgaro/portfolio-web.git
cd portfolio-web
```

### Rename data.json.example

To get the information correctly populated you have to rename the data.json.example to data.json:

```sh
mv src/data.json.example src/data.json
```

### Install Dependencies

This project requires Node.js and npm. Install the dependencies by running:

```sh
npm install
```

### Run the Development Server

Start the local development server:

```sh
npm run dev
```

You can now view the portfolio at `http://localhost:4321`.

### Build for Production

To build the project for production, use:

```sh
npm run build
```

The optimized and ready-to-deploy site will be in the `dist` directory.

## Features

- **Responsive Design**: Looks great on any device.
- **SEO Friendly**: Optimized for search engines.
- **Internationalization**: Supports English and Spanish for better user experience.
- **Light / Dark Mode**: Light and Dark mode user selectable for better accesibility.
- **Fast and Lightweight**: Built with performance in mind.

## Future Enhancements 📋

- [ ] Add a blog section to share articles.
- [ ] Implement high contrast mode for improved accessibility.
- [ ] CI/CD pipelines for automatic deploys.
