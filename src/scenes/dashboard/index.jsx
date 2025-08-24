import React from 'react'
// Importing necessary UI components and hooks from meterial-UI
import {Box,Button,IconButton,Typography,useTheme,} from "@mui/material" 

// import custom theme tokens (color palettes defined in theme.js)
import { tokens } from '../../theme'

// Mock data (temporary sample transactions)
import {mockTransactions} from "../../data/mockData";

// Icons from Material-UI icons library
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';


// Custom reusable components
import Header from "../../components/Header";         // Dashboard page header
//import LineChart from "../../components/LineChart";   // Line chart for revenue
//import GeographyChart from "../../components/GeographyChart"; // Map-based chart
//import BarChart from "../../components/BarChart";     // Bar chart for sales
//import StatBox from "../../components/StatBox";       // Small stat card
//import ProgressCircle from "../../components/ProgressCircle"; // Circular progress





// Dashboard Component Main page
const Dashboard = () => {

    //Access the current theme (light or dark)
    const theme = useTheme();

    // Apply custom color tokens based on theme mode
    const colors = tokens(theme.palette.mode);






  return (
<Box m={"20px"} >
{/* Header section */}
 <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Custom header component with title & subtitle */}
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* Download button */}
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700], // Custom theme color
              color: colors.grey[100],                 // White/grey text
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            {/* Button icon on the left */}
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
</Box>

 {/* GRID LAYOUT FOR DASHBOARD WIDGETS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)" // 12-column grid layout
        gridAutoRows="140px"                  // Default row height
        gap="20px"                            // Space between grid items
      >
        {/* -------- ROW 1 -------- */}

        {/* Stat Box 1: Emails Sent */}
        <Box
          gridColumn="span 3"                  // Takes 3 out of 12 columns
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Custom stat card with icon, progress bar, and numbers */}
          {/* <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"   // Progress bar fill %
            increase="+14%"  // Percentage change
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          /> */}
        </Box>

        {/* Stat Box 2: Sales */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          /> */}
        </Box>

        {/* Stat Box 3: Clients */}
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

        {/* Stat Box 4: Traffic */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          /> */}
        </Box>

        {/* -------- ROW 2 -------- */}

        {/* Revenue Line Chart */}
        <Box
          gridColumn="span 8" // Chart takes 8 columns (2/3 width)
          gridRow="span 2"   // Chart height spans 2 rows
          backgroundColor={colors.primary[400]}
        >
          {/* Revenue Header */}
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            {/* Download IconButton */}
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          {/* Line Chart for Revenue */}
          {/* <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box> */}
        </Box>

        {/* Recent Transactions List */}
        <Box
          gridColumn="span 4" // Takes remaining 4 columns
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"     // Scrollable if list too long
        >
          {/* Transactions Header */}
          {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box> */}

          {/* Loop through mock transaction data */}
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`} // Unique key for React
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* -------- ROW 3 -------- */}

        {/* Campaign Progress */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          {/* <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>
              Includes extra misc expenditures and costs
            </Typography>
          </Box> */}
        </Box>

        {/* Sales Quantity Bar Chart */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box> */}

        {/* Geography Chart */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
      </Box>





</Box>


  )
}

export default Dashboard