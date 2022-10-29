/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

//UI Local Component
import { fetchAPI } from '../../utils/fetchFromAPI';
import { ChannelCard, Videos } from '../';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                 CHANNEL DETAIL                */
/* ---------------------------------------------- */
function ChannelDetail() {
  const { id } = useParams(); // destruct id from URL
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((response) => setChannelDetail(response?.items[0]));
    
    //@ TO DO : check https://developers.google.com/youtube/v3/docs/search/list
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((response) => setVideos(response?.items));
  }, [id])

  /* *************** RENDERING ****************** */
  return (
    <Box minHeight= '95vh'>
      <Box>
        <div className="channel-detail" />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail;