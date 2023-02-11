import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import './style.scss';

import { links } from "../../router";
import { Topbar } from "../../scenes/global/Topbar";
import { Sidebar } from "../../scenes/global/Sidebar";
import { Dashboard } from "../../scenes/dashboard";
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


const MainPage = () => {
	const goto = useNavigate();
	const navigateToPage = () => {
		goto(links.testRoute)
	};


	return (
		<main className="content">
			<Topbar />
			<Box>Main content</Box>

			<Box className='__wrap'>__wrap</Box>

			<Button onClick={() => navigateToPage()}>ROUTER</Button>
		</main>
	)
};

export default MainPage