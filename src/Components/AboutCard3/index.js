import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { IconButton } from "@mui/material";

export default function AboutCard2() {
  return (
    <Card sx={{ maxWidth: 745 }}>
      {/* <CardMedia sx={{ height: 240 }} image={lockimg3} /> */}
      {/* <CardMedia > */}
      <IconButton sx={{ mr: 2 }}>
        <HandshakeIcon sx={{ fontSize: "40px" }} />
      </IconButton>
      {/* </CardMedia> */}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Mission
        </Typography>
        <Typography variant="h6" color="black">
          Providing accessible, flexible and efficient technological education
          and skills training to meet the needs of society and the industry.
          Providing an environment for innovation and creativity. Formulating an
          active collaboration with the industry, business and the community for
          career opportunities. Enhancing social and economic pathways and
          opportunities for young people.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
