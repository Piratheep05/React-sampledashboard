import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import log1 from "../../Assests/log1.Jpg";
import lockimg3 from "../../Assests/lockimg3.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import { IconButton } from "@mui/material";

export default function AboutCard2() {
  return (
    <Card sx={{ maxWidth: 745 }}>
      {/* <CardMedia sx={{ height: 240 }} image={lockimg3} /> */}
      {/* <CardMedia > */}
      <IconButton sx={{ mr: 2}} >
        <StarRateIcon sx={{ fontSize: "40px" }}/>
      </IconButton>
      {/* </CardMedia> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          Expertise
        </Typography>
        <Typography variant="h6" color="black">
          We offer a unique combination of both security industry expertise and
          digital publishing competencies: Quality information delivered
          effectively.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
