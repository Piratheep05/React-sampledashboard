import { Typography } from "@mui/material";
import React from "react";
import Home1 from "./Home1";
import loghome4 from "../../Assests/loghome4.JPG"

export default function Home(props) {
  return (
    <>
    <Typography>
      <h1>Welcome Lock hood</h1>
    </Typography>
    <Home1/>
    <img src={loghome4} width="1400px"/>
    </>
  );
}
