import React, { useState } from "react";
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
import Chart1 from "../Chart1";
import Chart2 from "../Chart1/Chart2";
import { ChartView } from "echarts";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import CreateIcon from "@mui/icons-material/Create";
import TextField from "@mui/material/TextField";
import axios from "axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { dataSet } from "../data";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

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

function createData(
  Subjects,
  HighMaths,
  AppliedScience,
  mobiledevelopment,
  digitalmarketing,
  Microcontroller
) {
  return {
    Subjects,
    HighMaths,
    AppliedScience,
    mobiledevelopment,
    digitalmarketing,
    Microcontroller,
  };
}

const rows = [
  createData("19/IT/IT/509", 80, 56, 67, 34, 67),
  createData("19/IT/IT/510", 80, 56, 67, 34, 67),
  createData("19/IT/IT/511", 80, 56, 67, 34, 67),
  createData("19/IT/IT/512", 80, 56, 67, 34, 67),
  createData("19/IT/IT/513", 80, 56, 67, 34, 67),
  createData("19/IT/IT/514", 80, 56, 67, 34, 67),
  createData("19/IT/IT/515", 80, 56, 67, 34, 67),
  createData("19/IT/IT/516", 80, 56, 67, 34, 67),
];

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [dataState, setDataState] = useState(dataSet);

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [employeesList, setEmployeesList] = useState([]);
  const [marks,setMarks] = useState([]);

  const addEmployee = (e) => {
    e.preventdefault();
    console.log("api call");
    axios
      .post("http://localhost:8080/create", {
        name: name,
        username: username,
        password: password,
        role: role,
      })
      .then((response) => {
        console.log(response, "success");
      });
    // getEmployee()
  };

  const getEmployee = () => {
    axios.get("http://localhost:8080/employees").then((response) => {
      setEmployeesList(response.data);
      console.log(response.data, "success");
    });
  };



  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
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
                Semister panel dashboard
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
          <Typography align="left" variant="h4" sx={{ fontWeight: "bold" }}>
            Semister 1
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Student Reg</StyledTableCell>
                  <StyledTableCell align="right">High Maths</StyledTableCell>
                  <StyledTableCell align="right">
                    Applied Science
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    mobile development
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    digital marketing
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Microcontroller
                  </StyledTableCell>
                  <StyledTableCell>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.Subjects}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.HighMaths}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.AppliedScience}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.mobiledevelopment}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.digitalmarketing}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Microcontroller}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Stack spacing={2} direction="row">
                        <Button variant="contained">Edit</Button>
                        <Button variant="contained">Delete</Button>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <Box sx={{ flexGrow: 1 }}>
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
          </Box> */}
        </Box>

        {/* <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Typography align="left" variant="h4" sx={{ fontWeight: "bold" }}>
            Semister 2
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Subjects</StyledTableCell>
                  <StyledTableCell align="right">Marks</StyledTableCell>
                  <StyledTableCell align="right">Grade</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.Subjects}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.Marks}</StyledTableCell>
                    <StyledTableCell align="right">{row.Grade}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box> */}
      </Box>
    </>
  );
}
