# Week 08 [CommunityHub]
## Author
- **Namme** Macua Vivian
- **GitHub:** [@xmacua](https://github.com/xmacua)
- **Date:** April 13, 2026

## Project Description
A modern React application demonstrating advanced patterns including effects, data fetching, routing, and styling.

## Features

- **React Router** for client-side navigation
- **Custom Hooks** (useFetch, useLocalStorage)
- **API Integration** with JSONPlaceholder
- **Tailwind CSS** for styling
- **Reusable Component Library**
- **Loading & Error States**
- **Responsive Design**

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Vite
- JSONPlaceholder API (demo)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   ├── Post/
│   └── shared/
├── hooks/
├── pages/
├── App.jsx
└── main.jsx
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Learning Outcomes

This project demonstrates:
- useEffect for side effects and data fetching
- Custom hooks for reusable logic
- React Router for navigation
- Component composition and reusability
- Modern CSS with Tailwind
- Error handling and loading states
- API integration patterns

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
