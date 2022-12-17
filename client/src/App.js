import "./style.css";
import LandingPage from "./Landing-Page/landingPage";
import Signin from "./routes/authentication/signin.authentication";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StaffDashboard from "./routes/dashboard/staff.dashboard";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <Signin /> },
  { path: "/dashboard", element: <StaffDashboard /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
