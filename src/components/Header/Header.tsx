import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        height={70}
        position={"fixed"}
        justifyContent={"center"}
        zIndex={100}
        boxShadow={"2px 1px 5px"}
        style={{ opacity: "1", backgroundColor: "#0055a5" }}
      >
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <IconButton sx={{ color: "white" }} onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <img
              src="https://versoinvestimentos.com.br/wp-content/themes/verso/img/logo-header2.png"
              alt="Logo"
              style={{ width: "70%" }}
            />
          </div>
        </Box>
      </Box>
      <Box
        display={"flex"}
        width={"100%"}
        boxShadow={"2px 1px 5px"}
        style={{ opacity: "1", backgroundColor: "#0055a5" }}
      >
        <Drawer
          anchor="left"
          variant="temporary"
          onClose={toggleSidebar}
          open={sidebarOpen}
          classes={{
            paper: "drawer-paper",
          }}
        >
          <Sidebar toggleSidebar={toggleSidebar} />
        </Drawer>
      </Box>
    </>
  );
}

export default Header;
