/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { Stack, Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

// Icons
import { CheckCircle } from '@mui/icons-material';

// UI Local Components
import { Videos } from '../';

// Fetch API
import { fetchAPI } from '../../utils/fetchFromAPI';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                 VIDEO DETAIL                   */
/* ---------------------------------------------- */
function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((response) => setVideoDetail(response.items[0]));
    
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((response) => setVideos(response.items));
  }, [id])

  if (!videoDetail?.snippet) {
    return 'Loading...';
  }

  const { snippet : { title, channelId, channelTitle }, statistics : { viewCount, likeCount } } = videoDetail;

  /* *************** RENDERING ****************** */
  return (
    <Box minHeight="95vh" direction="row" sx={{ pl: { sx: '10px', md: '30px' } }}>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1} sx={{ width: '100%', postion: 'sticky', top: '90px' }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch/v=${id}`}
            className="react-player"
            controls
          />
          <Typography color="#fff" fontWeight="bold" varient="h5" p={2}>
            {
              // @TO DO : uncommit if you won't use destruction
              // {videoDetail.snippet.title}
            }
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Typography varient={{ sm: "subtitle1", md: "h6" }} color="#fff">
                {channelTitle}
                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center" variant="body1" sx={{ opacity: 0.7 }}>
              <Typography>{parseInt(viewCount).toLocaleString()} videos</Typography>
              <Typography>{parseInt(likeCount).toLocaleString()} likes</Typography>
            </Stack>
          </Stack>
        </Box>
        
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail;