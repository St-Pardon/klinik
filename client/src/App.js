import "./style.css";
import LandingPage from "./Landing-Page/landingPage";
import Signin from "./routes/authentication/signin.authentication";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StaffDashboard from "./routes/dashboard/staff.dashboard";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/dashboard",
    element: <StaffDashboard />,
    children: [
      { path: "/overview", element: <h3>Hello overview</h3> },
      { path: "/patients", element: <h3>Hello patients</h3> },
      { path: "/appointment", element: <h3>Hello appointment</h3> },
      { path: "/settings", element: <h3>Hello settings</h3> },
      { path: "/support", element: <h3>Hello support</h3> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
