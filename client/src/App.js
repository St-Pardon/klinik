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
import NewPatientContainer from "./routes/registration/newPatient.registration";
import NewStaffContainer from "./routes/registration/newStaff.registration";
import PatientDetail from "./routes/Detail/patient.detail";
import AdminDashboard from "./routes/dashboard/admin.dashboard";
import SupportContainer from "./containers/support.container";
import SettingsContainer from "./containers/settings.container";

function App() {
  const [user_type, setUser_type] = useState("");
  const [user_role, setUser_role] = useState("");
  const [job_type, setJob_type] = useState("");
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    {
      path: "/signin",
      element: (
        <Signin
          getUser={setUser_type}
          getUser_role={setUser_role}
          getJob_type={setJob_type}
        />
      ),
    },
    {
      path: "/dashboard",
      element: (
        <PatientDashboard
          user_type={user_type}
          user_role={user_role}
          job_type={job_type}
        />
      ),
      // user_type === "patient" ? (
      //   <PatientDashboard />
      // ) : user_type === "staff" ? (
      //   <StaffDashboard />
      // ) : user_type === "admin" ? (
      //   <AdminDashboard />
      // ) : null,
      children: [
        {
          index: true,
          element: <h2>Welcome to your dashboard</h2>,
        },
        {
          path: "overview",
          element: (
            <OverviewContainer
              user_type={user_type}
              user_role={user_role}
              job_type={job_type}
            />
          ),
        },
        {
          path: "patients",
          element: (
            <PatientsContainer
              user_type={user_type}
              user_role={user_role}
              job_type={job_type}
            />
          ),
        },
        {
          path: "new_patient",
          element: <NewPatientContainer />,
        },
        {
          path: "patient_detail",
          element: <PatientDetail />,
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
        { path: "settings", element: <SettingsContainer /> },
        { path: "support", element: <SupportContainer /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
