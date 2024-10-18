import React from 'react';
import { Card, Typography, Grid, Divider, Box, Toolbar } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const CustomLabel = ({ datum, x, y, color }) => (
  <text
    x={x + 30}  // Move label 30px to the right
    y={y}
    fill={color}
    textAnchor="start"
    style={{ fontSize: 12 }}
  >
    {datum.label}
  </text>
);

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5' }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom sx={{ mt: -5, marginBottom: 3, fontWeight: 'bold' }}>
          Corporate Sustainability Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Key Metrics */}
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, textAlign: 'center', boxShadow: 3 }}>
              <Typography variant="h6" sx={{ color: '#1976d2' }}>Total Carbon Emissions (kg)</Typography>
              <Typography variant="h4">1,200</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, textAlign: 'center', boxShadow: 3 }}>
              <Typography variant="h6" sx={{ color: '#388e3c' }}>Renewable Energy Usage (%)</Typography>
              <Typography variant="h4">75%</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, textAlign: 'center', boxShadow: 3 }}>
              <Typography variant="h6" sx={{ color: '#f57c00' }}>Waste Recycled (%)</Typography>
              <Typography variant="h4">60%</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, textAlign: 'center', boxShadow: 3 }}>
              <Typography variant="h6" sx={{ color: '#d32f2f' }}>Water Consumption (liters)</Typography>
              <Typography variant="h4">25,000</Typography>
            </Card>
          </Grid>
          {/* Performance Metrics */}
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, textAlign: 'center', boxShadow: 3 }}>
              <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Sustainability Performance Metrics</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <BarChart
                    xAxis={[{ scaleType: 'band', data: ['Carbon Emissions', 'Energy Use', 'Waste Management', 'Water Usage'] }]}
                    series={[{ data: [1200, 75, 60, 25000] }]}
                    width={500}
                    height={300}
                    sx={{ backgroundColor: '#fff' }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 1200, label: 'Carbon Emissions' },
                          { id: 1, value: 75, label: 'Renewable Energy' },
                          { id: 2, value: 60, label: 'Waste Recycled' },
                          { id: 3, value: 25000, label: 'Water Consumption' },
                        ],
                      },
                    ]}
                    width={380}
                    height={280}
                    padding={{ top: 40, bottom: 40, left: 40, right: 40 }} // Add padding to ensure space around the chart
                    innerRadius={50} // Add inner radius to create space between labels and chart
                    labelComponent={CustomLabel} // Use custom label component
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ margin: '20px 0' }} />

        <Grid container spacing={3}>
          {/* Recent Activities */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, boxShadow: 3 }}>
              <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Recent Sustainability Initiatives</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1">- New solar panels installed at headquarters</Typography>
                <Typography variant="body1">- Waste management workshop held</Typography>
                <Typography variant="body1">- Carbon footprint assessment completed</Typography>
              </Box>
            </Card>
          </Grid>
          {/* Important Alerts */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, boxShadow: 3 }}>
              <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Important Alerts</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1" color="error">- Urgent: Review waste management policies</Typography>
                <Typography variant="body1" color="error">- Alert: Upcoming sustainability audit</Typography>
                <Typography variant="body1" color="error">- Reminder: Submit sustainability reports by end of month</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ margin: '20px 0' }} />

        <Grid container spacing={3} sx={{ mb: 5.8 }}>
          {/* Staff Performance */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, boxShadow: 3 }}>
              <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Sustainability Performance Highlights</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1">- Average employee sustainability score: 4.8/5</Typography>
                <Typography variant="body1">- Most impactful department: Facilities Management</Typography>
                <Typography variant="body1">- Employee of the month: Sarah Green for sustainability efforts</Typography>
              </Box>
            </Card>
          </Grid>
          {/* Upcoming Events */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 3, borderRadius: 4, boxShadow: 3 }}>
              <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Upcoming Sustainability Events</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1">- Sustainability training session on Thursday</Typography>
                <Typography variant="body1">- Green initiative planning meeting next week</Typography>
                <Typography variant="body1">- Quarterly sustainability review next month</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
