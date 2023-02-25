import React from "react";
import { matchPath, matchRoutes, Outlet, useLocation } from "react-router-dom";
import AddProduct from "../../pages/Dashboard/components/AddProduct";
import ErrorPage from "../../pages/ErrorPage";
import Navbar from "../Main/Navbar";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  // get current route
  const matchRoute = useLocation();

  console.log(matchRoute.pathname);
  return <div>{matchRoute ? <Sidebar /> : <Navbar />}</div>;
}
