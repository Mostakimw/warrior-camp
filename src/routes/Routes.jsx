import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Homepage/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Instructors from "../pages/Instructos/Instructors";
import Classes from "../pages/Classes/Classes";
import DashboardLayout from "../layout/DashboardLayout";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass/UpdateClass";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass/SelectedClass";
import MyEnrollment from "../pages/Dashboard/Student/MyEnrollMent/MyEnrollment";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import Payment from "../pages/Dashboard/Student/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "manage-classes",
        element: <ManageClasses />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "my-classes",
        element: <MyClasses />,
      },
      {
        // path: "update-class/:id",
        // element: <UpdateClass />,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/update-class/${params.id}`),
        path: "update-class/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
      },
      // students
      {
        path: "selected-class",
        element: <SelectedClass />,
      },
      {
        path: "enrollment",
        element: <MyEnrollment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "selected-class/payment",
        element: <Payment />,
      },
    ],
  },
]);

export default router;
