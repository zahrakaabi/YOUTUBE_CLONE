/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { Stack, Box } from '@mui/material';

// PropTypes
import PropTypes from 'prop-types';

// Local UI Components
import { VideoCard, ChannelCard, Loading } from '../';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                     VIDEOS                     */
/* ---------------------------------------------- */
function Videos({ videos, direction }) {
  if (!videos?.length) {
    return <Loading />;
  }

  /* *************** RENDERING ****************** */
  return (
    <Stack direction={ direction || "row" } flexWrap="wrap" justifyContent="start" gap={2}>
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
    videos: PropTypes.array.isRequired,
    direction: PropTypes.string
}

export default Videos;