import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import TodayWeather from '../pages/TodayWeather';
import Population from '../pages/Population';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/today-weather',
        element: <TodayWeather />
      },
      {
        path: '/Population',
        element: <Population />
      }
    ]
  }
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
]);
export default router;
