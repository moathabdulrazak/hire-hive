import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/myGigs/MyGigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Add from "./pages/add/Add";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import Messages from "./pages/messages/messages";
import Message from "./pages/message/message";
import Orders from "./pages/orders/Orders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pay from "./pages/pay/Pay.jsx";
import Success from "./pages/success/Success.jsx";

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/pay/:id",
      element: <Pay />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
