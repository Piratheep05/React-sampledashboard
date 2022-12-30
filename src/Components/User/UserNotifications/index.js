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
// import Chart1 from "../Chart1";
// import Chart2 from "../Chart1/Chart2";
import { ChartView } from "echarts";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import Card1 from "../UserBLog/Card1";
import Card2 from "../UserBLog/Card2";
import Card3 from "../UserBLog/Card3";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const listItemData = [
    { label: "UserBlog", link: "/UserBlog", icon: <InboxIcon /> },
    {
      label: "UserManagement",
      link: "/UserManagement",
      icon: <AssessmentIcon />,
    },
    {
      label: "UserNotifications",
      link: "/UserNotifications",
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
          <Typography variant="h6" noWrap component="div">
            User blog panel dashboard
          </Typography>
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
        {/* <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
          <PersonIcon />
        </Avatar> */}
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
        {/* <Divider /> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card1 />
            </Grid>
            <Grid item xs={4}>
              <Card2 />
            </Grid>
            <Grid item xs={4}>
              <Card3 />
            </Grid>
          </Grid>
        </Box> */}
      </Box>
    </Box>
  );
}
