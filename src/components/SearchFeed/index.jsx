/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

// UI Local Components
import { Videos } from '../';

// Fetched Data
import { fetchAPI } from '../../utils/fetchFromAPI';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                  SEARCH FEED                   */
/* ---------------------------------------------- */
function SearchFeed() {
  // CONSTs
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  // HOOKs
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
    .then((response) => setVideos(response.items))
  }, [searchTerm]) 

  /* *************** RENDERING ****************** */
  return (
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
        Search results for : <span style={{ color: 'red' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed;