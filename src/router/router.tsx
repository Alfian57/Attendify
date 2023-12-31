import { createBrowserRouter } from "react-router-dom";
import SubjectDataPage from "../pages/subject-data-page";
import LoginPage from "../pages/login-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SubjectDataPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);
