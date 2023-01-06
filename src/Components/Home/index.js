import { Typography } from "@mui/material";
import React from "react";
import Home1 from "./Home1";
import play from "../../Assests/play.JPG"
import home from "../../Assests/home.jpg"

export default function Home(props) {
  return (
    <>
    {/* <Typography>
      <h1>WELCOME ITUM</h1>
    </Typography> */}
    <Home1/>
    <img src={play} width="1400px"/>
    </>
  );
}
