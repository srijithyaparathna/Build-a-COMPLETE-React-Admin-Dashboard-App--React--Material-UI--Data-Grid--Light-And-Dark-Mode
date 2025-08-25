// React hook for local component state
import { useState } from "react";

// FullCalendar React wrapper (main calendar component)
import FullCalendar from "@fullcalendar/react";

// Utility function for formatting event dates
import { formatDate } from "@fullcalendar/core";

// FullCalendar plugins for different views
import dayGridPlugin from "@fullcalendar/daygrid";       // Month view with days in grid
import timeGridPlugin from "@fullcalendar/timegrid";     // Week/day view with time slots
import interactionPlugin from "@fullcalendar/interaction"; // Allows date/event clicking & selecting
import listPlugin from "@fullcalendar/list";             // List-style event view

// MUI (Material-UI) components for layout and styling
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

// Custom components/theme
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  // Get current MUI theme (light/dark)
  const theme = useTheme();
  // Map theme to custom color tokens
  const colors = tokens(theme.palette.mode);

  // Local state to store currently visible events
  const [currentEvents, setCurrentEvents] = useState([]);

  /**
   * Handle selecting a date range on the calendar
   * triggered when a user clicks/drag-selects on dates
   */
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event"); // Ask user for event name
    const calendarApi = selected.view.calendar; // Get FullCalendar API instance
    calendarApi.unselect(); // Clear selection highlight

    if (title) {
      // Add event programmatically
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`, // unique ID
        title,                              // event name
        start: selected.startStr,           // event start date/time
        end: selected.endStr,               // event end date/time
        allDay: selected.allDay,            // whether it’s all-day
      });
    }
  };

  /**
   * Handle clicking an event on the calendar
   * Prompts for confirmation before removing event
   */
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove(); // Delete event from calendar
    }
  };

  return (
    <Box m="20px">
      {/* Custom header */}
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      {/* Main layout: Sidebar + Calendar */}
      <Box display="flex" justifyContent="space-between">
        
        {/* 📌 EVENT SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {/* Display current events in sidebar */}
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title} // Event title
                  secondary={
                    <Typography>
                      {/* Format date using FullCalendar's formatDate */}
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* 📌 FULLCALENDAR MAIN VIEW */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh" // Calendar height
            plugins={[
              dayGridPlugin,      // Month view
              timeGridPlugin,     // Week/day view
              interactionPlugin,  // Allows clicks & selections
              listPlugin,         // List view
            ]}
            headerToolbar={{
              left: "prev,next today",                // Buttons on the left
              center: "title",                        // Month/week/day title
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth", // View switcher
            }}
            initialView="dayGridMonth" // Default view (Month grid)
            editable={true}            // Allow dragging/resizing events
            selectable={true}          // Allow selecting date ranges
            selectMirror={true}        // Show temporary event while selecting
            dayMaxEvents={true}        // "more" link when too many events
            select={handleDateClick}   // Function when user selects date(s)
            eventClick={handleEventClick} // Function when user clicks event
            eventsSet={(events) => setCurrentEvents(events)} // Update sidebar
            initialEvents={[
              // Default sample events
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
