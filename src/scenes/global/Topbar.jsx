import React from 'react'
// importing necessarty components and hooks form meterial UI (MUI)

import { Box,IconButton,useTheme,InputBase  } from '@mui/material'

// usecontext is used to comsume the global context for dark and light mode 
import { useContext } from 'react'


//  colormodecontext: a custom context we created to handle theme swtching dark and light
// tokens: a function that gives us color values based on the currnt theme mode.
import {ColorModeContext,tokens} from "../../theme"


//inputbase is a material UI component for a simple text input field (used here for search)



// importing material ui icons 
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"; 
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"; 
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"; 
import SearchIcon from "@mui/icons-material/Search"; 

const Topbar = () => {

// useTheme hook gives us access to the current theme light or dark 
const theme = useTheme();

// based on current moke dark/light we fetch the right color palette tokens
const colors = tokens(theme.palette.mode);


  const colorMode = useContext(ColorModeContext); 
  // Using useContext to get access to colorMode object, 
  // which includes the toggleColorMode() function for switching themes.


  return (
    <Box display={'flex'} justifyContent={'space-between'} p={2}  >
      {/* search bar  */}
      <Box 
      display={'flex'} // input and search incn in row
      backgroundColor = {colors.primary[400]}
      borderRadius={"3px"}
      >
        {/* input field for searching  */}
        <InputBase sx={{
          ml:2,flex:1  // ml- marginleft flet - 1 make it expand
        }}
        placeholder='Search' />
        {/* search icon as a button */}
        <IconButton type='button'
        sx={{p:1}}
        >
          <SearchIcon/>
        </IconButton>
      </Box>

{/* 
 icons settings */}
<Box display={'flex'} >

  {/* dark/light mode toggle button */}
  <IconButton onClick={colorMode.toggleColorMode} >
         {theme.palette.mode === "dark" ? (
            // If current mode is dark -> show moon icon
            <DarkModeOutlinedIcon />
          ) : (
            // If current mode is light -> show sun icon
            <LightModeOutlinedIcon />
          )}
  </IconButton>



 {/* Notification bell icon */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        {/* Settings (gear) icon */}
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        {/* Profile (person) icon */}
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>

</Box>





    </Box>
  )
}

export default Topbar