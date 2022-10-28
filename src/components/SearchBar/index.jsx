/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';

// Icons
import SearchIcon from '@mui/icons-material/Search';

// Style
import './index.css';

/* ---------------------------------------------- */
/*                   SEARCH BAR                   */
/* ---------------------------------------------- */
function SearchBar() {
  /* *************** RENDERING ****************** */
  return (
    <Paper
      component='form'
      varient='outlined'
      elevation={0}
      onSubmit={() => {}}
      sx={{
        pl: 2,
        borderRadius: 20
      }}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{p: '10px', color: '#222'}}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar;