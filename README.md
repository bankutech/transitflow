# 🚌 BusRoute Pro

BusRoute Pro is a premium, state-of-the-art school bus management and route optimization system. Designed for efficiency and real-time tracking, it leverages advanced algorithms and a modern cloud-native stack to ensure student safety and logistical excellence.

![BusRoute Pro Dashboard](https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000)

## 🚀 Features

### 🗺️ Intelligent Routing
- **Route Planner**: Uses Traveling Salesman Problem (TSP) algorithms (Nearest Neighbor + 2-Opt) to generate the most efficient routes.
- **Auto-Geocoding**: Automatically converts student addresses into precise GPS coordinates as you type.
- **Fuel Estimation**: Calculates total distance and estimated fuel consumption for every route.

### 📍 Real-Time Monitoring
- **Live Map**: Visualize all students and buses on an interactive map using Leaflet.
- **GPS Tracking**: Integrated support for live location tracking via browser Geolocation API.
- **Dynamic Filters**: Filter the map by specific buses to see assigned students and route paths.

### 👥 Comprehensive Management
- **Student Database**: Detailed records of students, parent contacts, and assigned buses.
- **Driver Management**: Track driver licenses, contact info, and active status.
- **Fleet Control**: Manage bus capacity, maintenance status, and occupancy rates with visual indicators.

### 📊 Analytics & Reporting
- **Insightful Dashboard**: Quick glance at total students, active buses, and driver availability.
- **Performance Reports**: Detailed analytics on student distribution across routes and fleet efficiency.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a sleek, dark-mode premium aesthetic.
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for lightweight, high-performance global state.
- **Backend-as-a-Service**: [Supabase](https://supabase.com/) (PostgreSQL + Realtime) for seamless data synchronization.
- **Maps**: [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/)
- **Charts**: [Chart.js](https://www.chartjs.org/) for data visualization.
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/) for elegant user feedback.

## 🏁 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- A Supabase account and project.

### 2. Database Setup
Run the SQL schema provided in `src/lib/supabase.js` within your Supabase SQL Editor to create the necessary tables (`drivers`, `buses`, `students`, `routes`).

### 3. Configuration
Update your Supabase credentials in `src/lib/supabase.js`:
```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'
```

### 4. Installation
```bash
npm install
```

### 5. Development
```bash
npm run dev
```

## 📜 License
MIT License. Created with ❤️ for school safety.
