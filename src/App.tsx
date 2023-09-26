import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./modules/LandingPage/LandingPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
        }
    ]);
    return <RouterProvider router={router} />;
}

export default App;