import LayoutPage from "../pages/LayoutPage";
import Home from "../pages/Client/Home/Home";
import AboutUs from "../pages/Client/About Us/AboutUs";
import Pricing from "../pages/Client/Pricing/Pricing";
import Login from "../pages/Client/Login/Login";
import Register from "../pages/Client/Register/Register";
import Detail from "../pages/Client/Detail/Detail";

export const ROUTES = [
  {
    path: "",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutUs/>,
      },
      {
        path: 'pricing',
        element: <Pricing/>,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: 'detail/:id',
        element: <Detail/>,
      },
    ],
  }
]