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
import { demoThumbnailURL, demoVideoURL, demoVideoTitle, demoChannelURL, demoChannelTitle} from '../../utils/constants';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                  VIDEO CARD                    */
/* ---------------------------------------------- */
function VideoCard({ video: { id: { videoId }, { snippet } } }) {
  console.log('tada', snippet)
  /* *************** RENDERING ****************** */
  return (
    <Link to="#">video card</Link>
  )
}

VideoCard.propTypes = {
    video: PropTypes.string.isRequired
}

export default VideoCard;