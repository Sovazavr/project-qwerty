import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />
      <div className="flex justify-start items-center flex-col ">
        <div className="typed-information-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Layout;
