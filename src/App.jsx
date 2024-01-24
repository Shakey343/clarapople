import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import AboutPage from './components/AboutPage';
import MusicPage from './components/MusicPage';
import HomePage from './components/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/music', element: <MusicPage /> },
    ],
  },
]);

function App({ children }) {
  return (
    <RouterProvider router={router}>{children}</RouterProvider>
  )
}

export default App
