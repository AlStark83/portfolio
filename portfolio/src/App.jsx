import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import CardSkills from "./Components/Card_Skills";
import CardProjects from "./Components/Card_Projects";

function App() {
	const frontEnd = CardSkills("Front-End", [
		"HTML",
		"CSS",
		"Javascript",
		"React",
		"Jquery",
		"Oauth",
	]);
	const backEnd = CardSkills("Back-End", [
		"Node.js",
		"Express.js",
		"Sequelize",
		"Postgres",
		"Restful API's",
	]);
	const other = CardSkills("Other", [
		"Git",
		"Github",
		"VS Code",
		"Scrum Board",
	]);
	const basicProject = CardProjects("", "API-Pokemon", "", ["React", "CSS modules", "Redux", "JavaScript", "Sequelize", "Postgres", "Node.js", "Express.js"], )

	return (
		<div className="App">
			<div>
				<NavBar />
				<h1>Hi There! I'm Al</h1>
				<h2>Full Stack Developer based in CDMX</h2>
				<img
					src="https://www.canva.com/design/DAFdY5LynsA/Lo93P7LhaPTwUiyKym6RzQ/watch?utm_content=DAFdY5LynsA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
					alt="Me smiling"
				/>
			</div>
			<hr />
			<div>
				<div>
					<h2 id="aboutMe">About Me</h2>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
					nemo, atque incidunt, et voluptates, amet alias doloribus deleniti
					quae dignissimos vitae praesentium inventore? Recusandae modi incidunt
					laudantium quo nostrum nisi!
				</p>
			</div>
			<hr />
			<div>
				<div>
					<h2 id="skills">Skills</h2>
				</div>
				<div>
					<div>{frontEnd}</div>
					<div>{backEnd}</div>
					<div>{other}</div>
				</div>
			</div>
			<div>
				<div>
					<h2 id="projects">My Projects</h2>
				</div>
				<div>

				</div>
			</div>
		</div>
	);
}

export default App;
