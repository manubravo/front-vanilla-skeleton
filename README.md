# Front Vanilla Skeleton

A minimal **Vanilla JavaScript** skeleton using **Vite** for development and bundling. This project provides a simple structure for starting a frontend project without frameworks.

## 📂 Project Structure

```
front-vanilla-skeleton/
│── public/                 # Static assets served as-is
│   ├── logo.svg            # Example logo
│── src/                    # Application source code
│   ├── app/                # Application-specific scripts
│   │   ├── counter.js      # Example counter logic
│   ├── assets/             # Images, styles, and other static files
│   │   ├── javascript.svg  # Example SVG asset
│   ├── global.css          # Global styles
│   ├── main.js             # Entry point
│── .env.example            # Environment variables template
│── .gitignore              # Files to ignore in version control
│── index.html              # Main HTML file
│── Makefile                # Make commands for automation
│── package.json            # Project dependencies and scripts
│── package-lock.json       # Dependency lock file
│── tsconfig.json           # TypeScript configuration (for type checking)
│── vite-env.d.ts           # Type definitions for Vite (enables ENV variables)
```

## ⚡ Prerequisites

Ensure you have [Node.js](https://nodejs.org) latest version installed.

## 🚀 Usage

### First deployment
```sh
make
```
This command installs and runs the server immediately in development mode. It’s recommended to run it right after cloning the repository

### Start Development Server
```sh
make dev
```
This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```sh
make build
```
This compiles the project into a `dist/` directory, optimized for production.

### Clean Project
```sh
make clean
```
Removes `node_modules` and `dist/` directories.

## 📜 License

This project is licensed under the **MIT License**.

