import "./widget.scss";
import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;

  switch (type) {
    case "api-inventory":
      data = {
        title: "Api inventory",
        isMoney: false,
        link: "api-inventory",
        icon: (
          <StoreIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "remidiation-tickets":
      data = {
        title: "Remidiation tickets",
        isMoney: false,
        link: "remidiation-tickets",
        icon: (
          <CreditCardIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "regression-suites":
      data = {
        title: "Regression suites",
        isMoney: true,
        link: "regression-suites",
        icon: (
          <PsychologyOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "security-groups":
      data = {
        title: "Security Groups",
        isMoney: true,
        link: "Security-groups",
        icon: (
          <GroupsIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <Link to={`/${data.link}`} className="link">
          {data.link}
        </Link>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
