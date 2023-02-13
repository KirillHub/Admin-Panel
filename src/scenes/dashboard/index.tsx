import { Button } from "@mui/material";
import { Box } from "@mui/system"
import { useNavigate, redirect } from "react-router-dom";
import Header from "../../components/header/Header";
import { links } from "../../router";

const Dashboard = () => {
	const goto = useNavigate();

	return (
		<Box m='20px'>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Header title="DASHBOARD" subtitle='Welcome to your dashboard' />
			</Box>
			{/* <Button sx={{ color: 'white' }} onClick={() => navigateOnClick()}>Click to R in Main</Button> */}
		</Box>
	)
}

export default Dashboard