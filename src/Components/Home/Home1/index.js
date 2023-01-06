import * as React from "react";
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
import CircleIcon from "@mui/icons-material/Circle";
import ListItemText from "@mui/material/ListItemText";
import degree1 from "../../../Assests/degree1.JPG";
import classimg from "../../../Assests/classimg.jpg";


export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 651 }}
        image={degree1}
        alt="Live from space album cover"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#000",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          {/* <Typography component="div" variant="h5" >
            A3
          </Typography> */}
          <Typography color="white" variant="h4" sx={{ fontWeight: "bold" }}>
            INSTITUTE OF TECHNOLOGY UNIVERSITY OF MORATUWA
          </Typography>
          <Box>
            <ListItemText>
              {/* <Typography variant="h5" gutterBottom color="white">
                JOIN LOCKHOOD AS A DISTRIBUTOR, GROW YOUR BUSINESS WITH
                ELECTRONIC LOCKS.
              </Typography> */}
              {/* <Typography variant="h7" gutterBottom color="white">
                This Is The Gold Mining Industry, And The Curtain Will Never
                End. Choose The Master Brand In The International Smart Lock
                Industry.
              </Typography> */}
              <Box sx={{maxWidth:200}}>
              <img src={classimg} />
              </Box>
            </ListItemText>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
