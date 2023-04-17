import { useState } from "react";
import NavBar from "../Components/NavBar/NavBar.jsx";
import CardSkills from "../Components/Card_Skills/Card_Skills.jsx";
import CardProjects from "../Components/Card_Project/Card_Projects.jsx";
import styles from "./Home.module.css";
import { ReactSVG } from "react-svg";

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
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Yellowtail&display=swap');
			</style>
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
						<h1>Hi There! I'm </h1>
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
					<h2 className={styles.aboutMe} id="aboutMe">
						About Me
					</h2>
				<div className={styles.sectionsContainer}>
					<div className={styles.aboutMeContent}>
						<div className={styles.aboutMeContentCol}>
							<div className={styles.svg}>
								<ReactSVG src="src\assets\undraw_hello_re_3evm.svg" />
							</div>
						</div>
						<div className={styles.aboutMeContentCol}>
							<p className={styles.paragraphAboutMe}>
								Always willing and with good attitude to face new projects, I
								have been the arrowhead for new challenges in the last jobs I've
								been, this has allowed me to contribute and enrich my knowledge
								and skills.
							</p>
						</div>
					</div>
					<div className={styles.aboutMeContent}>
						<div className={styles.aboutMeContentCol}>
							<p className={styles.paragraphAboutMe}>
								I am located in Mexico City, I did my Full Stack Developer
								training in the Soy Henry bootcamp with headquarters in
								Argentina, which consists of an intensive course with more than
								800hs of practice and learning, where I was also Teaching
								Assistant highlighting me with the badge of Leadership awarded
								by vote of my peers.
							</p>
						</div>
						<div className={styles.aboutMeContentCol}>
							<div className={styles.svg}>
								<ReactSVG src="src\assets\undraw_success_factors_re_ce93.svg" />
							</div>
						</div>
					</div>
				</div>
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
