DATA VISUALIZATION DASHBOARD - BLACKCOFFER ASSIGNMENT

A full-stack data visualization dashboard built using MERN stack that allows users to explore, filter, and analyze large datasets using interactive charts and KPIs.

This project demonstrates end-to-end data flow from MongoDB to Express API to React frontend to Chart.js visualizations.


FEATURES

1. Interactive Filters
Users can dynamically filter data using:
- Year
- Topic
- Region
- Country

Filters update all charts and KPIs in real-time.


2. KPI Dashboard
Displays real-time key metrics based on selected filters:
- Total Records
- Average Intensity
- Average Likelihood
- Average Relevance


3. Data Visualizations

- Bar Chart: Average Intensity vs Year
- Bar Chart: Likelihood by Topic
- Pie Chart: Topic Distribution
- Line Chart: Relevance Trend over Years

All charts update automatically when filters change.


TECH STACK

Frontend:
- React (Vite)
- Tailwind CSS (Play CDN)
- Chart.js + react-chartjs-2

Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose


PROJECT ARCHITECTURE

frontend/   → React + Charts
backend/    → Express API + MongoDB

Data Flow:
MongoDB → Express API → React Dashboard → Chart.js Visualizations


FOLDER STRUCTURE

backend/
  config/db.js
  models/Insight.js
  routes/insightRoutes.js
  index.js

frontend/
  components/
    Dashboard.jsx
    Filters.jsx
    KPI.jsx
    Charts.jsx
    Chart2.jsx
    ChartLine.jsx
    ChartPie.jsx


SETUP INSTRUCTIONS

Backend Setup:

cd backend
npm install
npm start

Create .env file:
MONGO_URI=your_mongodb_connection


Frontend Setup:

cd frontend
npm install
npm run dev


API ENDPOINTS

GET /api/insights
Fetch all data

GET /api/insights?end_year=2025
Filter by year

GET /api/insights?topic=energy&region=Asia
Multiple filters


KEY ENGINEERING DECISIONS

1. Flexible Schema
Used a dynamic MongoDB schema to support flexible JSON data.

2. Server-side Filtering
Filtering is done at API level to improve performance and scalability.

3. Data Cleaning
Used parseInt instead of Number to prevent incorrect conversion of empty strings to zero, avoiding fake year 0 in charts.


PROJECT HIGHLIGHTS

- Clean data visualization
- Fully dynamic dashboard
- Real-time filtering
- Optimized API calls
- Scalable backend design


INTERVIEW EXPLANATION

I built a full-stack dashboard where the frontend dynamically fetches filtered insights from a MongoDB-backed API and visualizes them using interactive charts. The backend efficiently handles dynamic filtering, while the frontend renders real-time KPIs and trend charts.


AUTHOR

Satyam
MERN Stack Developer


LICENSE

This project was built as a technical assignment and is intended for evaluation and learning purposes only.
