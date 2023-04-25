import React from "react";
import styles from "../../View/Home.module.css"
import CardProjects from "../Card_Project/Card_Projects.jsx";

export default function Projects() {
	let list = [];
	const basicProject = CardProjects(
		"src/assets/Pokemon_project.gif",
		"API-Pokemon",
		"This project was made with:",
		(list = [
			"React",
			"CSS modules",
			"Redux",
			"JavaScript",
			"Sequelize",
			"Postgres",
			"Node.js",
			"Express.js",
		]),
		"https://pi-pokemon-kappa.vercel.app/"
	);
	const groupProject = CardProjects(
		"src/assets/groupProject.jpg",
		"Travel Agency",
		"This project was made with:",
		(list = [
			"React",
			"Redux",
			"JavaScript",
			"Sequelize",
			"Postgres",
			"Node.js",
			"Express.js",
			"Auth0",
			"Stripe",
			"JWT",
		]),
		"https://pf-kane-travel.vercel.app//"
	);
	return (
		<div className={styles.skillsContainer}>
			<h2 className={styles.sectionTitle}>My Projects</h2>
			<div></div>
			<div className={styles.sectionscontainer}>
				<div className={styles.projectsSection}>
					<div>{basicProject}</div>
				</div>
				<div className={styles.projectsSection}>
					<div>{groupProject}</div>
				</div>
			</div>
		</div>
	);
}
