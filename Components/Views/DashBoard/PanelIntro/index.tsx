import React, { Component } from 'react'
import { Box, Grid, Grow, Typography } from '@mui/material'

export default class PanelIntro extends Component {
  render() {
    return (
      <Grow in timeout={{ enter: 800 }}>
        <Box sx={{ background: '#c8facd', padding: '5px 10px 5px 30px', borderRadius: '4px' }}>
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
                <Typography variant="h6">Welcome back!</Typography>
                <Typography variant="h6">Dinocollab</Typography>
                <Typography variant="body1">
                  Thank you for your business, your trust, and your confidence. It is our pleasure to work with you.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="assets/images/illustration_dashboard.png"
                  alt="illustration_dashboard"
                  sx={{ maxWidth: '100%', maxHeight: '285px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grow>
    )
  }
}
