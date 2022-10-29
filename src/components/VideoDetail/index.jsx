/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

// Icons
import { CheckCircle } from '@mui/icons-material';

// UI Local Components
import { Video } from '../';

// Fetch API
import { fetchAPI } from '../../utils/fetchFromAPI';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                 VIDEO DETAIL                   */
/* ---------------------------------------------- */
function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((response) => setVideoDetail(response.items[0]));
    
    //fetchAPI(`/search?part=snippet&q={id}`)
    //.then((response) => setVideoDetail(response.items));
  }, [id])

  /* *************** RENDERING ****************** */
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1} sx={{ width: '100%', postion: 'sticky', top: '90px' }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch/v=${id}`}
            className="react-player"
            controls
          />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail;