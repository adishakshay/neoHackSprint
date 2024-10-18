// src/pages/Admin/EnvironmentalReports.jsx
import React from 'react';
import { Box, Typography, Card, Grid, Toolbar } from '@mui/material';

const EnvironmentalReports = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5' }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Environmental Reports
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, boxShadow: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Latest Reports</Typography>
              <ul>
                <li>Annual Carbon Emission Report 2023</li>
                <li>Water Usage Analysis Report Q3 2023</li>
                <li>Waste Management Review 2023</li>
              </ul>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EnvironmentalReports;
