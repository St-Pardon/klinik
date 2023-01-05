import "./style.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./routes/dashboard/dashboard";
import Signin from "./routes/authentication/signin.authentication";
import LandingPage from "./Landing-Page/landingPage";
import OverviewContainer from "./containers/overview.container";
import PatientsContainer from "./containers/patients.container";
import StaffContainer from "./containers/staff.container";
import NewPatientContainer from "./routes/registration/newPatient.registration";
import NewStaffContainer from "./routes/registration/newStaff.registration";
import PatientDetail from "./routes/Detail/patient.detail";
import SupportContainer from "./containers/support.container";
import SettingsContainer from "./containers/settings.container";
import DrugContainer from "./containers/drug.container";
import NewDrug from "./routes/registration/newDrug.registration";
import WelcomeDashboard from "./routes/dashboard/welcome.dashboard";
import UserProfile from "./routes/profile/user.profile";
import StaffDetail from "./routes/Detail/staff.detail";
import AppointmentScheduler from "./components/scheduler/appointment.scheduler";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Enonet from "./routes/404/404.route";

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
      path: "/profile",
      element: <UserProfile getUser={setUser_type} />,
    },
    {
      path: "/dashboard",
      element: (
        <Dashboard
          user_type={user_type}
          user_role={user_role}
          job_type={job_type}
        />
      ),
      children: [
        {
          index: true,
          element: <WelcomeDashboard job_type={job_type} />,
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
          path: "staff_detail",
          element: <StaffDetail />,
        },
        {
          path: "new_staff",
          element: <NewStaffContainer />,
        },
        {
          path: "new_drug",
          element: <NewDrug />,
        },
        {
          path: "staff",
          element: <StaffContainer />,
        },
        {
          path: "drugs",
          element: <DrugContainer />,
        },
        { path: "appointment", element: <AppointmentScheduler /> },
        { path: "settings", element: <SettingsContainer /> },
        { path: "support", element: <SupportContainer /> },
      ],
    },
    { path: "*", element: <Enonet /> },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
