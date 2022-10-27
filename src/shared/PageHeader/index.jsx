/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import React from 'react';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

// UI Local Components
import { SearchBar } from '../../components';

// Images
import { logo } from '../../utils/constants';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                     NAVBAR                     */
/* ---------------------------------------------- */
function Navbar() {
  /* *************** RENDERING ****************** */
  return (
    <Stack 
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        justifyContent: 'space-between'
      }}>
      <Link to="/" className="logo flex items-center"><img src={logo} alt="Logo" /></Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar;