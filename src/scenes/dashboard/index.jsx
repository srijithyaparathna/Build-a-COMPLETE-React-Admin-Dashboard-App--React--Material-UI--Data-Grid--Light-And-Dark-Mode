// ----------------------------- IMPORTS -----------------------------

// MUI components for layout, typography, buttons, and icons
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

// Custom theme tokens (color palettes based on light/dark mode)
import { tokens } from "../../theme";

// Mock transaction data (simulated recent transaction list)
import { mockTransactions } from "../../data/mockData";

// MUI Icons for UI visualization
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

// Custom components
import Header from "../../components/Header"; // Top page header
import LineChart from "../../components/LineChart/LineChart"; // Line chart for revenue
import GeographyChart from "../../components/GeographyChart/GeographyChart"; // Map-based chart
import BarChart from "../../components/BarChart/BarChart"; // Bar chart for sales
import StatBox from "../../components/StatBox/StatBox"; // Card with stats and progress
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle"; // Circular progress

// ----------------------------- COMPONENT -----------------------------
const Dashboard = () => {
  const theme = useTheme(); // Access MUI theme (light/dark)
  const colors = tokens(theme.palette.mode); // Get color tokens based on mode

  return (
    <Box m="20px"> {/* Outer wrapper with margin */}

      {/* ----------------- HEADER ----------------- */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Dashboard title + subtitle */}
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* Download button on the right */}
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700], // custom color
              color: colors.grey[100], // text color
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            {/* Button icon before text */}
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* ----------------- GRID & CHARTS ----------------- */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)" // 12-column grid
        gridAutoRows="140px" // default row height
        gap="20px" // spacing between grid items
      >

        {/* ----------------- ROW 1 (Stat Boxes) ----------------- */}

        {/* Emails Sent */}
        <Box
          gridColumn="span 3" // occupies 3/12 columns
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75" // progress bar value (75%)
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Sales Obtained */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50" // 50% progress
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* New Clients */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30" // 30% progress
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Traffic Received */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80" // 80% progress
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ----------------- ROW 2 ----------------- */}

        {/* Revenue Line Chart */}
        <Box
          gridColumn="span 8" // chart takes 8/12 columns
          gridRow="span 2"   // spans 2 rows
          backgroundColor={colors.primary[400]}
        >
          {/* Top section: revenue summary */}
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>

            {/* Download button (icon only) */}
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          {/* Line chart for revenue */}
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Recent Transactions list */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto" // scrollable if content exceeds height
        >
          {/* Transactions Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>

          {/* Transaction Rows */}
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              {/* Transaction details */}
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

              {/* Date */}
              <Box color={colors.grey[100]}>{transaction.date}</Box>

              {/* Cost */}
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

        {/* ----------------- ROW 3 ----------------- */}

        {/* Campaign Progress Circle */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            {/* Circular progress chart */}
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        {/* Sales Quantity (Bar Chart) */}
        <Box
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
        </Box>

        {/* Geography-based traffic */}
        <Box
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
        </Box>
      </Box>
    </Box>
  );
};

// ----------------------------- EXPORT -----------------------------
export default Dashboard;
