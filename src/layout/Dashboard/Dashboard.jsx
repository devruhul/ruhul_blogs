import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
