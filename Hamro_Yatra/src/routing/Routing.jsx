import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  AdminLayout,
  DriverLayout,
  GuestLayout,
  PassengerLayout,
} from "../layouts/index";
import Login from "../views/Login";
import Register from "../views/Register";
import AdminDashboard from "../views/admin/AdminDashboard";
import DriverDashboard from "../views/driver/DriverDashboard";
import Page404 from "../views/Page404";
import Option from "../views/Option";
import VerifyEmail from "../views/VerifyEmail";
import { PassengerProfile, PassengerRideHistory, PassengerSearch } from "../views/passenger";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<Option />} />
            <Route path="option" element={<Navigate to="/" />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verify/:token" element={<VerifyEmail />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<Navigate to="/admin" />} />
          </Route>
          <Route path="/driver" element={<DriverLayout />}>
            <Route index element={<DriverDashboard />} />
            <Route path="dashboard" element={<Navigate to="/driver" />} />
          </Route>
          <Route path="/passenger" element={<PassengerLayout />}>
            <Route index element={<PassengerRideHistory />} />
            <Route path="search" element={<PassengerSearch />} />
            <Route path="ride-history" element={<Navigate to="/passenger" />} />
            <Route path="profile" element={<PassengerProfile />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
