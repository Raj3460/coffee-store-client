import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./Layout/MainLayouts.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import Signup from "./Components/Signup.jsx";
import SignIn from "./Components/SignIn.jsx";
import AuthProvider from "./Contex/AuthProvider.jsx";
import Users from "./Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,

    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "users",
        loader: ()=> fetch('http://localhost:3000/users'),
        Component:Users,
      },
      {
        path: "signin",
        
        Component: SignIn,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
