import React from 'react'

// import box and typography components for layout and text and usetheme hook for accessing theme mode
import { Box,Typography,useTheme } from '@mui/material'

// Import the Datagrid component form MUIs data-grid package 
import { DataGrid } from '@mui/x-data-grid'

// Import custom theme tokens (color palette variations for light/dark mode)
import { tokens } from "../../theme"; 

// Import mock invoice data to display inside the DataGrid (rows)
import { mockDataInvoices } from "../../data/mockData"; 

// Import a reusable Header component for page title/subtitle
import Header from "../../components/Header"; 



const Invoices = () => {

// Get the current theme 
const theme = useTheme();

// Map theme colors (Based on mode) from token
const colors = tokens(theme.palette.mode);


// Define datagrid columns what fields to display header names width/behavior
const columns = [
    {field:"id",headerName:"ID"}, // simple column for invoice ID

{
    field:"name",
    headerName: "Name",
    flex:1, // felx makes the column width responsive
    cellClassName: "name-column--cell" // custom class to apply sx styling
},
{
    field:"phone",
    headerName: "Phone Number",
    flex:1,
},
{
    field:"email",
    headerName: "Email",
    flex:1,
}
,
{
    field:"cost",
    headerName: "Cost",
    flex:1,
 // 🔎 Customization: renderCell lets us override how a cell is displayed
      // Here we use Typography to color the cost text green
   renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),



} ,  {
      field: "date",
      headerName: "Date",
      flex: 1,
    },


]








  return (
   <Box m="20px"> {/* Outer box with page margin */}
      
      {/* Reusable header component with title + subtitle */}
      <Header title="INVOICES" subtitle="List of Invoice Balances" />

      {/* Container box for DataGrid */}
      <Box
        m="40px 0 0 0"   // Top margin spacing
        height="75vh"   // Grid height = 75% of viewport height
        sx={{
          // 🔎 Styling with sx: 
          // use `&` selectors to target DataGrid parts by their CSS classes
          
          "& .MuiDataGrid-root": {
            border: "none", // Remove the outer border
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none", // Remove horizontal cell dividers
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300], // Apply green to Name column
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700], // Header background
            borderBottom: "none", // Remove header bottom border
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400], // Table body background
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none", 
            backgroundColor: colors.blueAccent[700], // Footer background
          },
          "& .MuiCheckbox-root": {
            // 🔎 Customization: checkboxSelection checkboxes styled here
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* 🔎 DataGrid basics:
            - rows={mockDataInvoices} → data array (each object needs an "id")
            - columns={columns} → structure and rendering of each column
            - checkboxSelection → adds checkbox column for row selection
        */}
        <DataGrid 
          checkboxSelection // Enable checkboxes on each row
          rows={mockDataInvoices} // The data to display
          columns={columns}       // The column configuration
        />
      </Box>
    </Box>
  );
};

export default Invoices