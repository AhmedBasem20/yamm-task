import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Sidebar />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: "20px",
          marginLeft: isMobile ? "0px" : "250px",
          marginTop: isMobile ? "64px" : "0px",
          overflowX: "hidden",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
