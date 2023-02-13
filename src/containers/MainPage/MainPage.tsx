import { Button, Box } from "@mui/material";
import { Route, Router, Routes, useNavigate, useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import './style.scss';

import { links } from "../../router";
import { Topbar } from "../../scenes/global/Topbar";
import { Sidebar } from "../../scenes/global/Sidebar";
import Team from "../../scenes/team";
import Invoices from "../../scenes/invoices";
import Contacts from "../../scenes/contacts";
import Bar from "../../scenes/bar";
import Form from "../../scenes/form";
import Line from "../../scenes/line";
import Pie from "../../scenes/pie";
import FAQ from "../../scenes/faq";
import Geography from "../../scenes/geography";
import Calendar from "../../scenes/calendar/calendar";
import { ColorModeContext, useMode } from "../../theme";
import { ProSidebarProvider } from "react-pro-sidebar";
import { routes as r } from '../../router';

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

				{/* POSSIBLE VARIANT */}
				{/* <Routes>
							<Route path="/" element={<Dashboard/>}/>
						</Routes> */}
			</main>
		</>
	)
};

export default MainPage