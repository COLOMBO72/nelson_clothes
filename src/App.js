import './App.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/pages/Products/Products';
import Product from './components/pages/Product/Product';
import Home from './components/pages/Home/Home';
import Contacts from './components/pages/Contacts/Contacts';
import Auth from './components/Auth/Auth';

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/authorization',
        element: <Auth />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
