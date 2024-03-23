import { Link } from "react-router-dom";
import "../../styles/sidebarStyles.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { Button } from "@mui/material";

interface SidebarProps {
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  return (
    <div id="lateral" className="lateral">
      <Button
        sx={{ color: "#fff", position: "absolute", top: 7, right: 0 }}
        onClick={toggleSidebar}
      >
        <CancelPresentationIcon />
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://versoinvestimentos.com.br/wp-content/themes/verso/img/logo-header2.png"
          alt="Logo"
          style={{ width: "70%", marginTop: "25px" }}
        />
      </div>
      <ul id="menu" className="menu" style={{ marginTop: "40px" }}>
        <li className="menu-item">
          <Link
            to="/"
            className="menu-link"
            onClick={toggleSidebar}
            style={{ textAlign: "center" }}
          >
            Início
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/cadastro"
            className="menu-link"
            style={{ textAlign: "center" }}
          >
            Faça seu cadastro
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
