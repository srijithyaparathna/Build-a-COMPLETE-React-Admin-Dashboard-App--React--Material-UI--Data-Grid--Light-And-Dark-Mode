// Importing Material-UI components for layout and styling
import { Box, useTheme } from "@mui/material"; 
// Box: A wrapper component to apply margin, padding, and other layout styles easily
// useTheme: Hook to access the current MUI theme (light/dark mode, palette colors, etc.)

// Importing a custom Header component from your project
import Header from "../../components/Header"; 
// This component likely renders a title and subtitle at the top of the page

// Importing Material-UI Accordion components
import Accordion from "@mui/material/Accordion"; 
import AccordionSummary from "@mui/material/AccordionSummary"; 
import AccordionDetails from "@mui/material/AccordionDetails"; 
// Accordion: The main collapsible container
// AccordionSummary: The clickable header part of the Accordion
// AccordionDetails: The content area that expands/collapses

import Typography from "@mui/material/Typography"; 
// Typography: Used for rendering text with MUI styling (variant, color, etc.)

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
// Icon used in AccordionSummary to indicate that the accordion can expand

// Importing a custom tokens function to get color values based on theme mode
import { tokens } from "../../theme"; 
// tokens(theme.palette.mode) returns an object with color shades for light/dark mode

// Functional component FAQ
const FAQ = () => {
  // Accessing the current theme (light/dark) from MUI
  const theme = useTheme(); 

  // Getting color values for the current theme using custom tokens
  const colors = tokens(theme.palette.mode); 

  // Returning the JSX to render
  return (
    // Box acts as a container with a margin of 20px
    <Box m="20px"> 
      {/* Header component to display the page title and subtitle */}
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" /> 

      {/* First Accordion */}
      <Accordion defaultExpanded>
        {/* Accordion header with a clickable summary and expand icon */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {/* Question text styled using Typography and theme-based color */}
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        {/* Accordion content that appears when expanded */}
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Second Accordion */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Third Accordion */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Fourth Accordion */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Fifth Accordion */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

// Exporting the FAQ component to be used in other parts of the application
export default FAQ;
