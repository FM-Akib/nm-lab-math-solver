import { Outlet } from "react-router-dom";
// import Landing from "../Pages/Landing";
// import Navbar from "../Shared/Navbar";

const MainLayout = () => {
    return (
        <>
         {/* <Navbar/> */}
          <Outlet/>
        </>
    );
};

export default MainLayout;