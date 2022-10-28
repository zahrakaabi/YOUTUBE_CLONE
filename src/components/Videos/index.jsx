/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { useState, useEffect } from 'react';
import { Stack, Box } from '@mui/material';

// PropTypes
import PropTypes from 'prop-types';

// Local UI Components
import { VideoCard, ChannelCard } from '../';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                     VIDEOS                     */
/* ---------------------------------------------- */
function Videos({ videos }) {
    console.log('data', videos)
  /* *************** RENDERING ****************** */
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((video, index) => (
            <Box key={index} direction="column">
                {video.id.videoId && <VideoCard video={video} />}
                {video.id.channelId && <ChannelCard channelDetail={video} />}
            </Box>
        ))}
    </Stack>
  )
}

Videos.propTypes = {
    videos: PropTypes.array.isRequired
}

export default Videos;