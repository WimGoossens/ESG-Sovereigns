import { RouteObject } from "react-router-dom";
import App from "../../App";
import HomePage from '../../Views/HomePage';
import MapPage from '../../Views/MapPage';
import AboutPage from '../../Views/AboutPage';
import DataPage from '../../Views/DataPage';
import NotFoundPage from '../../Views/NotFoundPage';

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage />},
      { path: "data", element: <DataPage /> },
      { path: "map", element: <MapPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "*", element: <NotFoundPage /> }
    
    ]
  }
];

export default routes;