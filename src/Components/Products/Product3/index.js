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
import log4 from "../../../Assests/log4.JPG"

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
        
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" sx={{ fontWeight: "bold" }}>
            A3
          </Typography>
          <Typography color="black" variant="h4">
          Tuya Bluetooth Wi-Fi Doorbell Automatic Push-Pull Smart Lock
          </Typography>
          <Box>
            <ListItemText>
              <Typography variant="h5" gutterBottom>
                1. Appearance attractiveness and intelligence
              </Typography>
              <Typography variant="h5" gutterBottom>
                2. Exquisite design fulfill classical appearance
              </Typography>
              <Typography variant="h5" gutterBottom>
                3. Double aesthetic feeling show your taste
              </Typography>
              <Typography variant="h5" gutterBottom>
                4. Automatically refresh and verify one-stepPatented automatic intelligent sensor automatic push and pull lock
              </Typography>
            </ListItemText>
          </Box>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 651 }}
        image={log4}
        alt="Live from space album cover"
      />
     
    </Card>
  );
}
