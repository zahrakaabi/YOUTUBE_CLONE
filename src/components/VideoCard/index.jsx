/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

// PropTypes
import PropTypes from 'prop-types';

// UI Local Components
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../../utils/constants';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                  VIDEO CARD                    */
/* ---------------------------------------------- */
function VideoCard({ video: { id: { videoId }, snippet } }) {
  /* *************** RENDERING ****************** */
  return (
    <Card sx={{ width: { xs:'100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: '180px' }}
        />
      </Link>
      <CardContent sx={{ height: 106, background: '#222' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff" >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.chaneelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray" >
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0,60)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

VideoCard.propTypes = {
    video: PropTypes.string.isRequired
}

export default VideoCard;