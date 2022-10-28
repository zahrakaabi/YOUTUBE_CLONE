/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { Stack } from '@mui/material';

// PropTypes
import PropTypes from 'prop-types';

// Fake API CATEGORIES
import { categories } from '../../utils/constants'

// Style
import './index.css';

/* ---------------------------------------------- */
/*                    SIDEBAR                     */
/* ---------------------------------------------- */
function Sidebar({ selectedCategory, setSelectedCategory }) {
  /* *************** RENDERING ****************** */
  return (
    <Stack
        direction={{ xs: 'row', md: 'column' }}
        sx={{
            overflowY: 'auto',
            height: { xs: 'auto', md: '92%' },
            width: { xs: 'fit-content', md: '200px' }
        }}
    >
        {categories.map((category, index) => (
            <button 
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`category-btn ${category.name === selectedCategory ? 'active' : 'blured'} flex justify-start items-center`}
            >
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

Sidebar.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired
}

export default Sidebar;