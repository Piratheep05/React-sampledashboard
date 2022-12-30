import React, { useState } from "react";
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
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

function createData(Name, Username, Role, Password) {
  return { Name, Username, Role, Password };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
];

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const listItemData = [
    { label: "blog", link: "/blog", icon: <InboxIcon /> },
    { label: "ReportAdmin", link: "/ReportAdmin", icon: <AssessmentIcon /> },
    {
      label: "notification",
      link: "/notification",
      icon: <NotificationsIcon />,
    },
    { label: "UserManage", link: "/UserManage", icon: <NotificationsIcon /> },
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
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Users
        </Button>
        <Button onClick={getEmployee} variant="outlined">
          show users
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
           Add users
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Box
              component="form"
              onSubmit={addEmployee}
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                helperText="Please enter your Name"
                label="name"
                id="name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                helperText="Please enter your Username"
                label="Username"
                id="Username"
                name="Username"
                autoComplete="Username"
                autoFocus
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <TextField
                helperText="Please enter your Role"
                label="password"
                id="password"
                name="password"
                autoComplete="password"
                autoFocus
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <TextField
                helperText="Please enter your Password"
                label="role"
                id="role"
                name="role"
                autoComplete="role"
                autoFocus
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
              <DialogActions>
                <Button variant="contained" onClick={handleClose} type="submit">
                  Submit
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </BootstrapDialog>
      </div>
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
            <Typography variant="h6" noWrap component="div">
              Admin blog panel dashboard
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right"/>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Username</StyledTableCell>
                  <StyledTableCell align="right">Role</StyledTableCell>
                  <StyledTableCell align="right">Password</StyledTableCell>
                  {/* <StyledTableCell align="right"></StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {employeesList.map((row) => (
                  <StyledTableRow key={row.id}>

                    <StyledTableCell component="th" scope="row">
                      {row.Name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Username}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.Role}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Password}
                    </StyledTableCell>
                    {/* <StyledTableCell align="right">
                      <Stack direction="row" spacing={2}>
                        {" "}
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                          Delete
                        </Button>
                        <Button variant="outlined" startIcon={<CreateIcon />}>
                          Edit
                        </Button>
                      </Stack>
                    </StyledTableCell> */}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}
