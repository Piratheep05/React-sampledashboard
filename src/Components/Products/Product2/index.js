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
import log3 from "../../../Assests/log3.JPG"

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
         <CardMedia
        component="img"
        sx={{ width: 651 }}
        image={log3}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" sx={{ fontWeight: "bold" }}>
            A2
          </Typography>
          <Typography color="black" variant="h4">
          Tuya Residential Keyless Push-Pull Automatic Smart Lock
          </Typography>
          <Box>
            <ListItemText>
              <Typography variant="h5" gutterBottom>
                1. Complete voice guide
              </Typography>
              <Typography variant="h5" gutterBottom>
                2. One-key unlocking, safe and convenient
              </Typography>
              <Typography variant="h5" gutterBottom>
                3. Automatically lock the door when closing
              </Typography>
              <Typography variant="h5" gutterBottom>
                4. Automatically refresh and verify one-step
              </Typography>
            </ListItemText>
          </Box>
        </CardContent>
      </Box>
     
    </Card>
  );
}
