import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import GroupsIcon from "@mui/icons-material/Groups";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>

          <Link to="/api-inventory" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Api inventory</span>
            </li>
          </Link>
          <Link to="/remidiation-tickets" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Remidiation tickets</span>
            </li>
          </Link>
          <Link to="/regression-suites" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Regression suites</span>
            </li>
          </Link>
          <li>
            <InsertChartIcon className="icon" />
            <span>User behavior analysis</span>
          </li>
          <Link to="/security-groups" style={{ textDecoration: "none" }}>
            <li>
              <GroupsIcon className="icon" />
              <span>Security groups</span>
            </li>
          </Link>
          <li>
            <AlignHorizontalCenterIcon className="icon" />
            <span>Posture Rules</span>
          </li>
          <li>
            <DataUsageIcon className="icon" />
            <span>Api usage</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
