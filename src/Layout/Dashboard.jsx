import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaUser,
  FaBook,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: load data from the server to have dynamic isAdmin based of Data.

  // const isAdmin = true;

  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open
        </label>
      </div>
      <div className="drawer-side sidebar  bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <h1 className="font-semibold text-3xl text-center mt-8">
          E-Restaurant
        </h1>
        <ul className="menu p-4 w-80 min-h-full  text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaUtensils></FaUtensils>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet>Manage Items
                </NavLink>
              </li>
              <li>
              <NavLink to="/dashboard/history">
                  <FaBook></FaBook>Manage Bookings
                </NavLink>
              </li>
              <li>
              <NavLink to="/dashboard/allusers">
                  <FaUser></FaUser>All Users
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>Home
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt>Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                  <span className="badge badge-secondary">+{cart?.length}</span>
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>Home
                </NavLink>
              </li>
            </>
          )}
          {/* Sidebar content here */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
