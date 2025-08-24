// React hooks and core library imports
import { useState } from "react"; // useState is a React hook to create state in functional components

// ProSidebar imports for the collapsible sidebar
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"; 
// ProSidebar is the main wrapper
// Menu, MenuItem are for sidebar menu items
// SubMenu allows nested collapsible menus

// Material-UI components and hooks
import { Box, IconButton, Typography, useTheme } from "@mui/material"; 
// Box: general-purpose container
// IconButton: button for icons (clickable icon)
// Typography: for text styling
// useTheme: hook to access current MUI theme (light/dark mode)

// React Router import
import { Link } from "react-router-dom"; // Link is used for navigation without page reload

// Sidebar CSS
import "react-pro-sidebar/dist/css/styles.css"; // default styles for ProSidebar

// Custom theme tokens
import { tokens } from "../../theme"; // custom colors defined for light/dark modes

// Material-UI icons imports
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// Custom reusable Sidebar Item component
// Props:
// title = display text
// to = route path
// icon = icon component
// selected = current active menu item
// setSelected = function to update selected item
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme(); // Access MUI theme (light/dark)
  const colors = tokens(theme.palette.mode); // Get color tokens based on current theme

  return (
    <MenuItem
      active={selected === title} // highlights menu item if it's selected
      style={{
        color: colors.grey[100], // text color from theme
      }}
      onClick={() => setSelected(title)} // update selected item on click
      icon={icon} // icon for the menu item
    >
      <Typography>{title}</Typography> {/* Display menu text */}
      <Link to={to} /> {/* Navigation link using react-router */}
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme(); // Get current theme
  const colors = tokens(theme.palette.mode); // Get theme-based colors
  const [isCollapsed, setIsCollapsed] = useState(false); // State to track if sidebar is collapsed
  const [selected, setSelected] = useState("Dashboard"); // State for currently selected menu item

  return (
    <Box
      sx={{
        // Custom CSS overrides for ProSidebar components using MUI sx prop
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`, // sidebar background color
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important", // icon background transparent
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important", // item padding
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important", // hover color for menu items
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important", // color for active menu item
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)} // toggle collapse state
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined} // show icon if collapsed
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100], // text color
            }}
          >
            {!isCollapsed && (
              // Show logo and collapse button only when sidebar is expanded
              <Box
             
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS {/* Logo text */}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon /> {/* Collapse button */}
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER PROFILE SECTION */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`} // user profile image
                  style={{ cursor: "pointer", borderRadius: "50%" }} // circular image
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Srijith  {/* User name */}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin {/* User role */}
                </Typography>
              </Box>
            </Box>
          )}

          {/* SIDEBAR MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {/* Dashboard */}
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* SubMenu example under Dashboard */}
            <SubMenu title="Test Submenu" icon={<HomeOutlinedIcon />}>
              {/* Nested menu items */}
              <MenuItem>
                <Link to="/test1" />Test Item 1
              </MenuItem>
              <MenuItem>
                <Link to="/test2" />Test Item 2
              </MenuItem>
            </SubMenu>

            {/* Section Title */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            {/* Menu items under "Data" */}
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Section Title */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            {/* Menu items under "Pages" */}
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Section Title */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            {/* Menu items under "Charts" */}
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
