/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

// UI Local Components
import Sidebar from '../Sidebar';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                     NAVBAR                     */
/* ---------------------------------------------- */
function Feed() {
  /* *************** RENDERING ****************** */
  return (
    <Stack
      direction={{ xs:'column', md:'row' }}
    >
      <Box
        sx={{
          height: { xs: 'auto', md: '90vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2 } //px = pl+pr
        }}
      >
        <Sidebar />
        <Typography 
          className="copyright"
          varient="body2"
          sx={{
            mt: 1.5,
            color: '#fff'
          }}
        >
          Copyright &copy;2022 | zahra kaabi
        </Typography>
      </Box>

      <Box>
        <Typography>New <span>Videos</span></Typography>
      </Box>
    </Stack>
  )
}

export default Feed;