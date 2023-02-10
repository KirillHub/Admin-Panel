import { Button } from "@mui/material";
import { useNavigate, useRoutes } from "react-router-dom";
import { links } from "../../router";

export const TestLazy = () => {
	const goto = useNavigate();
	const navigate = () => {
		goto(links.main)
	};

	return (
		<div style={{ fontWeight: '700', fontSize: '2.5rem', color: 'green' }}>
			Lorem ipsum, dolor sit amet consectetur
			adipisicing elit. Asperiores, iure incidunt! Veritatis perspiciatis aut
			illum ipsam eligendi rerum, inventore veniam repudiandae saepe modi commodi
			neque deleniti error aliquam, odio corporis?

			re[;rwlor[pwqr[pqkrpotvkewop;tktpovykop]]]

			<Button style={{ color: 'red', fontSize: '2.3rem', border: '3px solid green' }}
				onClick={() => navigate()}>on main</Button>
		</div>
	)
}