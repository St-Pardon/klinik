import "./style.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./routes/authentication/signin.authentication";
import PatientDashboard from "./routes/dashboard/patient.dashboard";
import StaffDashboard from "./routes/dashboard/staff.dashboard";
import LandingPage from "./Landing-Page/landingPage";
import OverviewContainer from "./containers/overview.container";
import PatientsContainer from "./containers/patients.container";

function App() {
  const [user_type, setUser_type] = useState("patient");
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/signin", element: <Signin /> },
    {
      path: "/dashboard",
      element: user_type === 'patient' ? <PatientDashboard /> : user_type === 'staff' ? <StaffDashboard /> : null,
      children: [
        {
          path: "overview",
          element: <OverviewContainer user_type={user_type} />,
        },
        { path: "patients", element: <PatientsContainer user_type={user_type} /> },
        { path: "appointment", element: <h3>Hello appointment</h3> },
        { path: "settings", element: <h3>Hello settings</h3> },
        { path: "support", element: <h3>Hello support</h3> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
