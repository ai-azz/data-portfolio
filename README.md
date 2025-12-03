# 📊 Data Enthusiast Portfolio

> A modern, responsive, and interactive portfolio website designed for Data Scientists, ML Engineers, and Data Analysts. Built with React, Vite, and Tailwind CSS.
> 

## 🌟 Overview

This project is a personal portfolio website tailored to showcase expertise in the Data domain. Unlike standard web developer portfolios, this site emphasizes **Data Science, Machine Learning, and Engineering** capabilities through specific design choices, such as:

- **SQL-Style Loading Screen**: A unique intro sequence simulating a database query.
- **"The Data Brain" Visualization**: A CSS-based animated illustration representing the intersection of logic, data, and analytics.
- **Credential Verification**: A dedicated section for showcasing certifications (Coursera, DeepLearning.AI, Dicoding) with verification links.
- **Tech-Focused Project Cards**: A minimalist, information-dense layout for projects, focusing on the tech stack and business value rather than generic screenshots.

## 🛠️ Tech Stack

This project leverages a modern frontend stack to ensure performance and ease of maintenance:

- **Core Framework**: [React](https://reactjs.org/) (v18+)
- **Build Tool**: [Vite](https://vitejs.dev/) (Fast HMR & Bundling)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- **Icons**: [Lucide React](https://lucide.dev/) (Consistent & lightweight icons)
- **Email Service**: [EmailJS](https://www.emailjs.com/) (Serverless email functionality)
- **Deployment**: GitHub Pages

## 🎨 Design System

The UI follows a strict "Royal Professional" theme:

- **Primary Color**: Royal Blue (`bg-blue-900`, `text-blue-950`) - Represents trust and intelligence.
- **Accent Color**: Gold/Amber (`text-amber-500`) - Represents value and prestige (Certificates/Awards).
- **Background**: Clean White/Slate (`bg-slate-50`) with subtle gradients for depth.
- **Typography**: `font-sans` for main content, `font-mono` for code snippets and technical data.

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
    
    ```
    git clone https://github.com/ai-azz/data-portfolio
    cd portfolio-dani
    ```
    
2. **Install dependencies**
    
    ```
    npm install
    ```
    
3. **Install required libraries (if missing)**
    
    ```
    npm install lucide-react emailjs-com
    ```
    

### 🔐 Environment Variables (EmailJS)

To make the Contact Form functional, you need to set up EmailJS keys.

1. Create a file named `.env` in the root directory.
2. Add the following variables (get these from your EmailJS dashboard):
    
    ```
    VITE_SERVICE_ID=your_service_id
    VITE_TEMPLATE_ID=your_template_id
    VITE_PUBLIC_KEY=your_public_key
    ```
    
    > Note: The .env file is included in .gitignore to keep your keys safe. Do not commit it to GitHub.
    > 

### Running Locally

Start the development server:

```
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

## 📁 Project Structure

Currently, the project utilizes a simplified structure for ease of editing.

```
data-portfolio/
├── src/
│   ├── components/sections/...  
│   ├── App.jsx         
│   ├── main.jsx        
│   └── index.css       
├── .env
├── .gitignore
├── .eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

```

## 📝 Customization Guide

All content is managed directly within `src/App.jsx` using array-based data structures. This makes updating your portfolio easy without touching the HTML structure.

### 1. Updating Projects

Locate the `const Projects` component in `App.jsx`. Modify the `projects` array:

```
const projects = [
  {
    title: "New Project Title",
    subtitle: "Category/Type",
    desc: "Description of what you solved...",
    tech: ["Python", "TensorFlow"], // Tech stack tags
    icon: <IconName />, // Import icon from lucide-react
    github: "https://github.com/...",
    demo: "https://..." // Or null if no demo
  },
  // ...
];

```

### 2. Updating Certificates

Locate the `const Certificates` component.

- **Featured Carousel:** Update the `featuredCerts` array (for specializations/degrees).
- **All List:** Update the `allCerts` array. Ensure you assign the correct `category` ("AI & ML", "Data Science", "Engineering", "Web Dev") for the filter to work.

## 📦 Building & Deployment

To deploy this portfolio to **GitHub Pages**:

1. **Configure Vite**:
Ensure `vite.config.js` has the correct base URL (repo name):
    
    ```
    export default defineConfig({
      plugins: [react()],
      base: "/data-portfolio", // Replace with your repo name
    })
    
    ```
    
2. **Build the project**:
    
    ```
    npm run build
    ```
    
    This creates a `dist` folder with production-ready files.
    
3. **Deploy**:
You can use the `gh-pages` package:
    
    ```
    npm install gh-pages --save-dev
    ```
    
    Add this script to `package.json`:
    
    ```
    "scripts": {
      "deploy": "gh-pages -d dist"
    }
    ```
    
    Then run:
    
    ```
    npm run deploy
    ```
    

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! If you find a bug or have a design idea, feel free to open an issue.

## 📄 License

This project is open-source and available under the [MIT License](https://github.com/ai-azz/data-portfolio?tab=MIT-1-ov-file).

**Happy Coding & Data Crunching!** 🚀