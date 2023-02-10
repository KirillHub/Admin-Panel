import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { links } from "../../router";

const MainPage = () => {
	const goto = useNavigate();
	const navigateToPage = () => {
		goto(links.testRoute)
	};

	return (
		<>
			<Button onClick={() => navigateToPage()}>ROUTER</Button>
		</>
	)
};

export default MainPage