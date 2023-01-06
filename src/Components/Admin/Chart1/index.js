import React from "react";
import ReactECharts from "echarts-for-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function index() {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Semister1', 'Semister2', 'Semister3', 'Semister4']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia>
          <ReactECharts option={option} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Semesters Activities
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
