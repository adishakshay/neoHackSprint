// src/pages/Admin/SustainabilityMetrics.jsx
import React from 'react';
import { Box, Typography, Card, Grid, Toolbar } from '@mui/material';

const SustainabilityMetrics = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5' }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Sustainability Metrics
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, boxShadow: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Key Metrics Overview</Typography>
              <ul>
                <li>Total Carbon Emissions: 1,200 kg</li>
                <li>Renewable Energy Usage: 75%</li>
                <li>Waste Recycled: 60%</li>
                <li>Water Consumption: 25,000 liters</li>
              </ul>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SustainabilityMetrics;
