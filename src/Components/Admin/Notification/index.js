import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";

const drawerWidth = 240;
const emails = [
  "username@gmail.com",
  "user02@gmail.com",
  "user03@gmail.com",
  "user04@gmail.com",
  "user05@gmail.com",
];

export default function PermanentDrawerLeft() {
  const listItemData = [
    { label: "Dashboard", link: "/blog", icon: <InboxIcon /> },
    { label: "Calender", link: "/ReportAdmin", icon: <AssessmentIcon /> },
    {
      label: "Academic Notices",
      link: "/notification",
      icon: <NotificationsIcon />,
    },
    {
      label: "Semester module",
      link: "/UserManage",
      icon: <NotificationsIcon />,
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: 1200,
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              Notification panel dashboard
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", display: "flex-end" }}
            >
              <Link href="/login">
                <IconButton>
                  <LogoutIcon />
                </IconButton>
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {listItemData.map((item, i) => (
            <IconButton size="small" key={i}>
              <ListItem exact component={NavLink} to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
              </ListItem>
            </IconButton>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          <h1>notifications </h1>
          <List sx={{ pt: 0 }}>
            {emails.map((email) => (
              <ListItem disableGutters>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Typography>
      </Box>
    </Box>
  );
}
