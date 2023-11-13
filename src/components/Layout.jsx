import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";
const Layout = () => {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold">Layout</h1> */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
