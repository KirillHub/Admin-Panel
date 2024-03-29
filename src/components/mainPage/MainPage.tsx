import { Box, Button } from '@mui/material'
import { useRoutes } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'

import { routes as r } from '../../router'
import { Topbar } from '../../scenes/global/Topbar'
import { Sidebar } from '../../scenes/global/Sidebar'

const MainPage = () => {
   const routes = useRoutes(r)

   return (
      <>
         <ProSidebarProvider>
            <Sidebar />
         </ProSidebarProvider>

         <main className="content">
            <Topbar />

            {routes}
         </main>
      </>
   )
}

export default MainPage
