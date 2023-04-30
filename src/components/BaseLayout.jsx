import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";

export default function BaseLayout() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}