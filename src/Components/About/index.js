import React from 'react';
import AboutCard from '../AboutCard';
import AboutCard2 from '../AboutCard2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AboutCard3 from "../AboutCard3";
import AboutCard4 from "../AboutCard4";

export default function About() {
  return(
    <>
    <AboutCard/>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
      <AboutCard2/>
      </Grid>
      <Grid item xs={4}>
        <AboutCard3/>
      </Grid>
      <Grid item xs={4}>
        <AboutCard4/>
      </Grid>
    </Grid>
  </Box>
  </>
  )
}