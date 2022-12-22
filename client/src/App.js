import "./style.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./routes/authentication/signin.authentication";
import PatientDashboard from "./routes/dashboard/patient.dashboard";
import StaffDashboard from "./routes/dashboard/staff.dashboard";
import LandingPage from "./Landing-Page/landingPage";
import OverviewContainer from "./containers/overview.container";
import PatientsContainer from "./containers/patients.container";
import StaffContainer from "./containers/staff.container";
import NewPatientContainer from "./routes/registration/newPatient.container";
import NewStaffContainer from "./routes/registration/newStaff.container";

function App() {
  const [user_type, setUser_type] = useState("staff");
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/signin", element: <Signin getUser={setUser_type} /> },
    {
      path: "/dashboard",
      element:
        user_type === "patient" ? (
          <PatientDashboard />
        ) : user_type === "staff" ? (
          <StaffDashboard />
        ) : null,
      children: [
        {
          path: "overview",
          element: <OverviewContainer user_type={user_type} />,
        },
        {
          path: "patients",
          element: <PatientsContainer user_type={user_type} />,
        },
        {
          path: "new_patient",
          element: <NewPatientContainer />,
        },
        {
          path: "new_staff",
          element: <NewStaffContainer />,
        },
        {
          path: "staff",
          element: <StaffContainer />,
        },
        { path: "appointment", element: <h3>Hello appointment</h3> },
        { path: "settings", element: <h3>Hello settings</h3> },
        { path: "support", element: <h3>Hello support</h3> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
