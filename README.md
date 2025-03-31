# SQL Query Runner

## Overview
SQL Query Runner is a React-based web application that allows users to execute predefined SQL queries and view the results in a structured table format. The application is optimized for performance, featuring lazy loading, efficient state management, and query execution tracking.

![App Screenshot](https://github.com/user-attachments/assets/53d51c79-de63-4736-b473-023915ce6f23) 

## 🚀 Tech Stack
- **Frontend**: React (with React Hooks)
- **State Management**: React useState & useEffect
- **Lazy Loading**: React Lazy & Suspense
- **Performance Monitoring**: performance.now() for load time tracking
- **Styling**: CSS Modules

## 📦 Dependencies
The project utilizes the following key dependencies:
- `react`: Core React library for building the UI
- `react-dom`: For rendering React components
- `react-scripts`: Scripts for building and running the app
- `performance.now()`: Used to measure the load time of the application

## 🛠️ Features
- **Predefined SQL Queries**: Users can select and execute predefined SQL queries
- **Query Editor**: Allows editing SQL queries before execution
- **Result Table**: Displays query results in a structured format
- **Performance Measurement**: Tracks and displays page load time
- **Optimized Rendering**: Lazy loading for large data tables

## 📊 Performance Metrics
![App Screenshot](https://github.com/user-attachments/assets/2f71f23e-72fd-4458-b3cc-85a5de64dee8)
)

| Metric | Value | Measurement Method |
|--------|-------|--------------------|
| Initial Load | 1.2s | Chrome DevTools Lighthouse Audit |
| Query Render (1000 rows) | 15ms | `performance.now()` API |
| DOM Content Loaded | 450ms | `document.addEventListener('DOMContentLoaded')` |

### ⏳ Page Load Time
The application measures and logs the time taken for the initial page load.

**How it’s measured?** Using `performance.now()` to calculate the time difference from script execution to full page load.

**Typical Load Time**:
- Initial load: ~2700-3000 ms
- Subsequent loads: ~10-30 ms

### ⚡ Optimizations Implemented
- **Lazy Loading Components**: Components like QueryEditor and ResultTable are loaded only when required, reducing initial load time.
- **Memoization for Data**: Sample queries are stored using `useMemo` to prevent unnecessary re-renders.
- **Efficient State Management**: `useState` and `useEffect` ensure minimal re-renders and improve overall performance.
- **Asynchronous Execution**: Query execution and result fetching are handled efficiently to prevent blocking UI.

### 🏆 Bonus: Handling Large Data
The application aims to efficiently render large amounts of rows without browser crashes.
- Future improvements could include virtualized rendering libraries like `react-virtualized` or `react-window`.

## 📜 Installation & Setup
Clone the repository:
```sh
git clone https://github.com/kushagramishra22/Frontend_Task_2025.git  
cd Frontend_Task_2025  
```

Install dependencies:
```sh
npm install  
```

Run the development server:
```sh
npm start  
```

## 📤 Deployment
To deploy the project on GitHub Pages:
```sh
npm run build  
```
Then, follow GitHub Pages hosting steps.

## 📩 Contact
For any queries, feel free to reach out via [email](mailto:kushagra.personal.work@gmail.com).
