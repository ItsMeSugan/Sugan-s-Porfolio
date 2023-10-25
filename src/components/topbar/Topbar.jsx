import { Mail } from "@mui/icons-material";
import "./topbar.scss";
import CallIcon from "@mui/icons-material/Call";

// eslint-disable-next-line react/prop-types
function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Sugan.
          </a>
          <div className="itemContainer">
            <CallIcon className="icon" />
            <span>+91 9789861146</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>t.suganeeshwaran@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
