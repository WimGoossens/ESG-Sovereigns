import { RouteObject } from "react-router-dom";
import App from "../../App";
import HomePage from '../../Views/HomePage';
import MapPage from '../../Views/MapPage';
import AboutPage from '../../Views/AboutPage';
import DataPage from '../../Views/DataPage';
import NotFoundPage from '../../Views/NotFoundPage';
import PrivacyPolicyPage from "../../Views/PrivacyPolicyPage";
import TermsAndConditionsPage from "../../Views/TermsAndConditionsPage";

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage />},
      { path: "data", element: <DataPage /> },
      { path: "map", element: <MapPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "terms-and-conditions", element: <TermsAndConditionsPage /> },
      { path: "*", element: <NotFoundPage /> }
    
    ]
  }
];

export default routes;