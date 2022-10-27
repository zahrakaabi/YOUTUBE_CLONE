/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

// Local UI Components
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components';

// Styles
import './shared/Styles/global.css';

/* ---------------------------------------------- */
/*                   APP FUNCTION                 */
/* ---------------------------------------------- */
function App() {
  /* *************** RENDERING ****************** */
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#222', }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
