/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

// UI Local Components
import { Sidebar, Videos } from '../';

// Fetched Data
import { fetchAPI } from '../../utils/fetchFromAPI';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                     FEED                       */
/* ---------------------------------------------- */
function Feed() {
  // CONSTs
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  // HOOKs
  useEffect(() => {
    // @TO DO : Check this https://developers.google.com/youtube/v3/getting-started#partial
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((response) => setVideos(response.items))
  }, [selectedCategory]) 
  // array with variables => run whenevr the value of variable changes
  // (dependencies)empty array = only run when we reload the page

  /* *************** RENDERING ****************** */
  return (
    <Stack direction={{ xs:'column', md:'row' }}>
      <Box
        sx={{
          height: { xs: 'auto', md: '90vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2 } //px = pl+pr
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
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

      <Box
        sx={{
          px: 2,
          overflowY: 'auto',
          height: '90vh'
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory} <span>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed;