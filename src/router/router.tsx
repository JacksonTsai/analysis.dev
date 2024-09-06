import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/today-weather" replace />
      },

      {
        path: '/today-weather',
        Component: React.lazy(() => import('../pages/TodayWeather'))
      },
      {
        path: '/Population',
        Component: React.lazy(() => import('../pages/Population'))
      },
      {
        path: '*',
        element: <Navigate to="/today-weather" replace />
      }
    ]
  }
]);
export default router;
