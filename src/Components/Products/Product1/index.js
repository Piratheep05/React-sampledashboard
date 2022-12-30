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
import lockimg2 from "../../../Assests/lockimg2.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import log2 from "../../../Assests/log2.JPG";
import ListItemText from "@mui/material/ListItemText";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" sx={{ fontWeight: "bold" }}>
            A1
          </Typography>
          <Typography color="black" variant="h4">
            Ultra Slim 18MM One-Button Automatic Control Smart Door Lock
          </Typography>
          <Box>
            <ListItemText>
              <Typography variant="h5" gutterBottom>
                1. Slim and simple design with one-touch unlocking
              </Typography>
              <Typography variant="h5" gutterBottom>
                2. Ergonomic edges and corners bring a smooth feel
              </Typography>
              <Typography variant="h5" gutterBottom>
                3. Metal die-cast model with panels as thin as 18.8m
              </Typography>
              <Typography variant="h5" gutterBottom>
                4. Sensitive and fast fingerprint recognition process
              </Typography>
            </ListItemText>
          </Box>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 651 }}
        image={log2}
        alt="Live from space album cover"
      />
    </Card>
  );
}
