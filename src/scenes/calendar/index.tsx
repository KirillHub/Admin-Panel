import { useState } from 'react'

import FullCalendar, { formatDate } from '@fullcalendar/react'
// import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header/Header'

type AddEventProps = {
   id: string
   title: string
   start: string
   end: string
   allDay: string
}

type HandleDateClickProps = {
   dateStr: string
   startStr: string
   endStr: string
   allDay: string

   view: {
      calendar: {
         unselect: () => void
         addEvent: (props: AddEventProps) => void
      }
   }
}

type HandleEventClickProps<T extends HandleDateClickProps> = {
   selected: HandleDateClickProps
   event: {
      title: T['dateStr']
      remove: () => void
   }
}

const Calendar = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const [currentEvents, setCurrentEvents] = useState([])

   const handleDateClick = (selected: HandleDateClickProps) => {
      const title = prompt('Please enter a new title for your event')
      const calendarApi = selected.view.calendar
      calendarApi.unselect()

      if (title) {
         calendarApi.addEvent({
            id: `${selected.dateStr}-${title}`,
            title,
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay,
         })
      }
   }

   const handleEventClick = (selected: HandleEventClickProps<HandleDateClickProps>) => {
      if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
         selected.event.remove()
      }
   }

   return (
      <Box m="20px">
         <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

         <Box display="flex" justifyContent="space-between">
            {/* CALENDAR SIDEBAR */}
            <Box
               style={{
                  backgroundColor: colors.primary[400],
                  flex: '1 1 20%',
                  padding: '15px',
                  borderRadius: '4px',
               }}
            >
               <Typography variant="h5">Events</Typography>
               <List>
                  {currentEvents.map((event: AddEventProps) => (
                     <ListItem
                        key={event.id}
                        sx={{
                           bgcolor: colors.greenAccent[500],
                           margin: '10px 0',
                           borderRadius: '2px',
                        }}
                     >
                        <ListItemText
                           primary={event.title}
                           secondary={
                              <Typography>
                                 {/* {formatDate(event.start, {
												year: "numeric",
												month: "short",
												day: "numeric",
											})} */}
                              </Typography>
                           }
                        />
                     </ListItem>
                  ))}
               </List>
            </Box>

            {/* CALENDAR */}
            <Box flex="1 1 100%" ml="15px">
               {/* TODO: Fix Calendar  */}

               {/* <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
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
          /> */}
            </Box>
         </Box>
      </Box>
   )
}

export default Calendar