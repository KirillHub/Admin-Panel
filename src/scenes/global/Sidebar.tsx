import { useState } from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Menu, MenuItem, Sidebar as ProSidebar, useProSidebar } from 'react-pro-sidebar'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

import { tokens } from '../../theme'
import './style.css'
import { redirect, useNavigate } from 'react-router-dom'
import { links } from '../../router'

interface ItemProps {
   title: string
   to: string
   icon: React.ReactNode
   selected: string
   setSelected: (title: string) => void
}

const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const goto = useNavigate()

   return (
      <MenuItem
         active={selected === title}
         style={{
            color: colors.grey[100],
         }}
         onClick={() => {
            setSelected(title), goto(to)
         }}
         icon={icon}
      >
         <Typography>{title}</Typography>
      </MenuItem>
   )
}

export const Sidebar = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const [isCollapsed, setIsCollapsed] = useState(false)
   const [selected, setSelected] = useState('Dashboard')

   return (
      <Box
         sx={{
            '& .ps-sidebar-container': {
               height: '100vh !important',
               background: `${colors.primary[400]} !important`,
            },
            '& .pro-icon-wrapper': {
               backgroundColor: 'transparent !important',
            },
            '& .pro-inner-item': {
               padding: '5px 35px 5px 20px !important',
            },
            '& .pro-inner-item:hover': {
               color: '#868dfb !important',
            },
            '& .pro-menu-item.active': {
               color: '#6870fa !important',
            },
            '& .ps-menu-button': {
               padding: '5px 35px 5px 20px !important',
            },
            '& .ps-menu-button:hover': {
               color: '#868dfb !important',
            },
            '& .ps-menu-button:active': {
               color: '#6870fa !important',
            },
         }}
      >
         <div className="sidebar">
            <ProSidebar defaultCollapsed={isCollapsed} transitionDuration={0.9}>
               <Menu>
                  {/* LOGO AND MENU ICON */}
                  <MenuItem
                     onClick={() => {
                        setIsCollapsed(!isCollapsed)
                     }}
                     icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                     style={{
                        margin: '10px 0 20px 0',
                        color: colors.grey[100],
                     }}
                  >
                     {!isCollapsed && (
                        <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                           <Typography variant="h3" color={colors.grey[100]}>
                              ADMINIS
                           </Typography>
                           <IconButton
                              onClick={() => {
                                 setIsCollapsed(!isCollapsed)
                              }}
                           >
                              <MenuOutlinedIcon />
                           </IconButton>
                        </Box>
                     )}
                  </MenuItem>

                  {/* USER */}
                  {!isCollapsed && (
                     <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                           <img
                              alt="profile-user"
                              width="100px"
                              height="100px"
                              src={'../../assets/user.png'}
                              style={{ cursor: 'pointer', borderRadius: '50%' }}
                           />
                        </Box>
                        <Box textAlign="center">
                           <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: '10px 0 0 0' }}>
                              Ed Roh
                           </Typography>
                           <Typography variant="h5" color={colors.greenAccent[500]}>
                              VP Fancy Admin
                           </Typography>
                        </Box>
                     </Box>
                  )}

                  {/* MENU ITEMS */}
                  <Box paddingLeft={isCollapsed ? undefined : '10px'}>
                     <Item
                        title="Dashboard"
                        to={links.dashboard}
                        icon={<HomeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                     />

                     <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                        Data
                     </Typography>
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

                     <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                        Pages
                     </Typography>
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

                     <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                        Charts
                     </Typography>
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
         </div>
      </Box>
   )
}
