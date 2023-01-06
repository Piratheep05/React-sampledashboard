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
import Grid from "@mui/material/Grid";
import { ChartView } from "echarts";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Subjects, Marks, Grade) {
  return {
    Subjects,
    Marks,
    Grade,
  };
}

const rows = [
  createData("HighMaths", 80, "Pass"),
  createData("AppliedScience", 80, "Pass"),
  createData("mobiledevelopment", 80, "Pass"),
  createData("digitalmarketing", 80, "Pass"),
  createData("Microcontroller", 80, "Pass"),

];

const Filter = rows.filter((a,b) => {
  return (
    a.Marks + b.Marks
  )
})

console.log(Filter,"sum")

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const listItemData = [
    { label: "Student Blog", link: "/UserBlog", icon: <InboxIcon /> },
    {
      label: "Semister modules",
      link: "/UserManagement",
      icon: <AssessmentIcon />,
    },
    {
      label: "Notifications",
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
          <Box
            sx={{
              display: "flex",
              width: 1200,
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              Semister modules
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
 <Typography align="left" variant="h4" sx={{ fontWeight: "bold" }}>
            Semister 1
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Subjects</StyledTableCell>
                  <StyledTableCell align="right">Marks</StyledTableCell>
                  <StyledTableCell align="right">
                   Status
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">
                    mobile development
                  </StyledTableCell> */}
                
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.Subjects}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Marks}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Grade}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
           <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography
                  align="left"
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  total results :
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  align="left"
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  average of results :
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  align="left"
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  GPA :
                </Typography>
              </Grid>
            </Grid>
          </Box>

      </Box>
    </Box>
  );
}
