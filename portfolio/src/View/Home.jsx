import { useState } from "react";
import NavBar from "../Components/NavBar/NavBar.jsx";
import CardSkills from "../Components/Card_Skills/Card_Skills.jsx";
import CardProjects from "../Components/Card_Project/Card_Projects.jsx";
import styles from "./Home.module.css";

function Home() {
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
	const basicProject = CardProjects("", "API-Pokemon", "", [
		"React",
		"CSS modules",
		"Redux",
		"JavaScript",
		"Sequelize",
		"Postgres",
		"Node.js",
		"Express.js",
	]);

	return (
		<div className={styles.homeContainer}>
			<div>
				<div className={styles.header}>
					<img
						className={styles.logo}
						src="src\assets\Alberto Logo (white 320 × 80 px).png"
						alt="logo"
					/>
					<NavBar />
				</div>
				<div className={styles.heroContainer}>
					<div className={styles.hero}>
						<h1>Hi There! I'm Al</h1>
						<h2>Full Stack Developer based in CDMX, México</h2>
						<div className={styles.imgMe}>
							<img
								src="\src\assets\Profile Picture AGC - Editado.png"
								width="270px"
								alt="Me smiling"
							/>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className={styles.aboutMeContainer}>
				<div>
					<h2 className={styles.aboutMe} id="aboutMe">
						About Me
					</h2>
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
				<div></div>
			</div>
		</div>
	);
}

export default Home;
