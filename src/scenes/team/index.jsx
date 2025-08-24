import React from 'react'
// Importing necessary components from Material UI
import { Box, Typography, useTheme } from "@mui/material"; 
// Box -> a wrapper for layout/styling
// Typography -> handles styled text
// useTheme -> hook to access the current MUI theme (dark/light)

// Importing the DataGrid component from Material UI X (for displaying tabular data)
import { DataGrid } from "@mui/x-data-grid";

// Importing theme tokens (custom colors defined in your theme.js file)
import { tokens } from "../../theme";

// Importing mock team data (rows for DataGrid)
import { mockDataTeam } from "../../data/mockData";

// Importing MUI icons for different access levels
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

// Importing a custom Header component (title + subtitle for the page)
import Header from "../../components/Header";
import { Field } from 'formik';

// TEAM COMPONENT

const Team = () => {
// Access current theme light and dark mode
const theme = useTheme();

// get custom color palette (token) based on theme mode
const colors = tokens(theme.palette.mode);


// Define dataGrid columns structure of the table
const columns = [
    {field:"id",headerName:"ID"} , // column showing id 

    {
        field:"name",  // Column for name 
        headerName:"Name", // Column title
        flex:1, // takes proportional width 
        cellClassName: "name-column--cell", // Apply a custom class for styling

    },
    {
        field:'age',
        headerName: "Age",
        type:"number", // Enforce number formatting 
        headerAlign:"left", // Align header text left
        align: "left" // Align cell text left
    },
    {
        field:"phone",
        headerAlign:"Phone Number",
        flex:1, // Adjusts column width dynamically
    },
    {
        field:'email',
        headerName:'Email',
        flex:1,
    },
    {
        // Access Level Column (special because it renders custom content)
        field:"accessLevel",
        headerName:"Access Level",
        flex:1,

        // rendercell allows you to display custom UI inside a cell
         renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto" // Center horizontally
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              // Background color depends on access role
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700] // default for "user"
            }
            borderRadius="4px"
          >
            {/* Show an icon depending on the access level */}
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}

            {/* Show access text next to icon */}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },




    },

    
];


// -----------------------------
  // Component Return (JSX Layout)
  // -----------------------------
  return (
    <Box m="20px"> 
      {/* Page Header (Title + Subtitle) */}
      <Header title="TEAM" subtitle="Managing the Team Members" />

      {/* DataGrid Wrapper */}
      <Box
        m="40px 0 0 0"
        height="75vh" // Take 75% of viewport height
        sx={{
          // Styling overrides for DataGrid
          "& .MuiDataGrid-root": {
            border: "none", // Remove default border
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none", // Remove cell borders
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300], // Apply green color to name cells
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700], // Header background
            borderBottom: "none", // Remove border below header
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400], // Table body background
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none", // Remove footer border
            backgroundColor: colors.blueAccent[700], // Footer background
          },
          "& .MuiCheckbox-root": {
            // Custom color for checkboxes
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* DataGrid Component */}
        <DataGrid 
          checkboxSelection // Enable checkboxes for row selection
          rows={mockDataTeam} // Provide row data (mockData)
          columns={columns} // Use defined column structure
          
        />
      </Box>
    </Box>
  );
};














export default Team;