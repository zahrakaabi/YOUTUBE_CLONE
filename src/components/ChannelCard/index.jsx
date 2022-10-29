/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// PropTypes
import PropTypes from 'prop-types';

// UI Local Components
import { demoProfilePicture } from '../../utils/constants';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                CHANNEL CARD                    */
/* ---------------------------------------------- */
function ChannelCard({ channelDetail }) {
  /* *************** RENDERING ****************** */
  return (
    <Box sx={{ 
      boxShadow: 'none', borderRadius: 0, 
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px', margin: 'auto'
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent 
          sx={{ display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center',
                textAlign: 'center', color: '#fff' 
              }}>
            <CardMedia 
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.sinppet?.title}
              sx={{ borderRadius: '50%', width: 180, height: 180, mb: 2 }}
            />
            <Typography varient="h6" >
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
              </Typography>
            )}
        </CardContent>
      </Link>
    </Box>
  )
}

ChannelCard.propTypes = {
    channelDetail: PropTypes.string.isRequired
}

export default ChannelCard;
