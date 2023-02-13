import { Button, Box } from "@mui/material";
import { useNavigate, useRoutes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

import { routes as r } from '../../router';
import { links } from "../../router";
import { Topbar } from "../../scenes/global/Topbar";
import { Sidebar } from "../../scenes/global/Sidebar";
import './style.scss';


const MainPage = () => {
	const routes = useRoutes(r);

	const goto = useNavigate();
	const navigateToPage = () => {
		goto(links.dashboard)
	};

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
};

export default MainPage