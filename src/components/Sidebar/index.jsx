/* ---------------------------------------------- */
/*                   DEPENDENCIES                 */
/* ---------------------------------------------- */
// Packages
import { Stack } from '@mui/material';

// Fake API CATEGORIES
import { categories } from '../../utils/constants'

// Style
import './index.css';

/* ---------------------------------------------- */
/*                    SIDEBAR                     */
/* ---------------------------------------------- */
function Sidebar() {
  const SELECTED_CATEGORY = 'New';

  /* *************** RENDERING ****************** */
  return (
    <Stack
        direction={{ xs: 'row', md: 'column' }}
        sx={{
            overflowY: 'auto',
            height: { xs: 'auto', md: '92%' }
        }}
    >
        {categories.map((category, index) => (
            <button 
                key={index}
                className={`category-btn ${category.name === SELECTED_CATEGORY ? 'active' : 'blured'} flex justify-start items-center`}
            >
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar;