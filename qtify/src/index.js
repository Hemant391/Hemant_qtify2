import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AlbumPage from './pages/AlbumnPage/AlbumsPage';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const router = createBrowserRouter([
  {
    path :"/",
    element :<App />,
    children:[
      {
        path :"/",
        element: <HomePage />
      },
      {
        path : "/albumn/:albumId",
        element:<AlbumPage />
      },
    ],
  },
]);

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />);

// reportWebVitals();
