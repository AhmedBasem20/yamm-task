import { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, AppBar, Toolbar, Typography, ListItemButton, ListItemIcon, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import YammLogo from '../assets/yamm.svg'
const Sidebar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerContent = (
        <>
            {isMobile && <Toolbar />}

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px'
            }}>
                <img src={YammLogo} />
            </div>
            <Divider />
            <List>
                <ListItem component={Link} to="/" onClick={toggleDrawer}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ReceiptLongIcon />
                        </ListItemIcon>
                        <ListItemText primary="Refund Orders" />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    );

    return (
        <>
            {isMobile && (
                <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ marginRight: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">Dashboard</Typography>
                    </Toolbar>
                </AppBar>
            )}

            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? mobileOpen : true}
                onClose={toggleDrawer}
                sx={{
                    width: "250px",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: "250px",
                        boxSizing: "border-box",
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </>
    );
};

export default Sidebar;
