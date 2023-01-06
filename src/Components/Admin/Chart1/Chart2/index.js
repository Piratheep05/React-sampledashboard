import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import girl from "../../../../Assests/girl.jpg";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Chart1 from "../../Chart1";
import { TextField, FormLabel, Grid, FormControl, Select } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import axios from "axios";

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

export default function MediaControlCard(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  // const [employeesList, setEmployeesList] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addStudent = (e) => {
    e.preventdefault();
    console.log("api call");
    axios
      .post("http://localhost:8080/create", {
        name: name,
        batch: batch,
        field: field,
        email: email,
      })
      .then((response) => {
        console.log(response, "success");
      });
    // getEmployee()
  };

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 351 }}
        image={girl}
        alt="G.Brunthikka"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h3">
            Your! profile
          </Typography>

          <List component="nav" aria-label="mailbox folders">
            <ListItem sx={{ fontSize: 20 }}>
              <Typography component="div" variant="h6">
                Name: G.Brunthikka
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography component="div" variant="h6">
                Role : Teacher
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component="div" variant="h6">
                Join year: 2021
              </Typography>
            </ListItem>
            <Divider light />
            <ListItem>
              <Typography component="div" variant="h6">
                Email: Brunthikka@gmail.com
              </Typography>
            </ListItem>
          </List>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button variant="contained" onClick={handleClickOpen}>
            update details
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Update details
            </BootstrapDialogTitle>
            <Box
              component="form"
              fullWidth
              noValidate
              autoComplete="off"
              onSubmit={addStudent}
            >
              <DialogContent dividers>
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item md={4} xs={12}>
                    <FormLabel>Name</FormLabel>
                    <TextField
                      fullWidth
                      id="Name"
                      name="Name"
                      size="small"
                      // label="title"
                      variant="outlined"
                      // value={formValues.title}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <FormLabel>field</FormLabel>
                    <TextField
                      id="field"
                      name="field"
                      size="small"
                      variant="outlined"
                      type="text"
                      // value={formValues.borderRadius}
                      onChange={(e) => {
                        setField(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box>
                      <FormLabel>batch</FormLabel>
                      <TextField
                        id="batch"
                        name="batch"
                        size="small"
                        variant="outlined"
                        type="text"
                        // value={formValues.fontSize}
                        onChange={(e) => {
                          setBatch(e.target.value);
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <FormLabel>Email</FormLabel>
                    <TextField
                      id="Email"
                      name="Email"
                      size="small"
                      variant="outlined"
                      type="text"
                      // value={formValues.cardbackgroundcolor}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleClose} type="submit">
                  Save changes
                </Button>
              </DialogActions>
            </Box>
          </BootstrapDialog>
        </Box>
      </Box>
      {/* <Box sx={{maxWidth:400 }}>
      <Chart1/>
      </Box> */}
    </Card>
  );
}
