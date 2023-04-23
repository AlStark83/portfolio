import { useState } from "react";
import NavBar from "../Components/NavBar/NavBar.jsx";
import CardSkills from "../Components/Card_Skills/Card_Skills.jsx";
import CardProjects from "../Components/Card_Project/Card_Projects.jsx";
import Footer from "../Components/Footer/Footer.jsx"
import styles from "./Home.module.css";
import { ReactSVG } from "react-svg";

function Home() {
	let list = [];
	const frontEnd = CardSkills(
		(list = ["HTML", "CSS", "Javascript", "React", "Jquery", "Oauth"])
	);
	const backEnd = CardSkills(
		(list = ["Node.js", "Express.js", "Sequelize", "Postgres", "Restful API's"])
	);
	const other = CardSkills(
		(list = ["Git", "Github", "VS Code", "Scrum Board"])
	);
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
		<div className={styles.homeContainer}>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poiret+One&family=Yellowtail&display=swap');
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
						<h2>
							Hi There! I'm <span>Al</span>
						</h2>
						<h1> Full Stack Developer based in CDMX, México</h1>
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
			<hr id="aboutMe"/>
			<div className={styles.aboutMeContainer}>
				<h2 className={styles.aboutMe}>
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
			<hr id="skills" />
			<div className={styles.skillsContainer}>
				{/* <div> */}
				<h2 className={styles.sectionTitle}>
					Skills
				</h2>
				{/* </div> */}
				<div className={styles.techSkills}>
					<h3>{"Tech Skills"}</h3>
					<div className={styles.skillsSections}>
						<div className={styles.techSkillsContainer}>
							<h4>{"Front-End"}</h4>
							<div className={styles.list}>{frontEnd}</div>
						</div>
						<div className={styles.techSkillsContainer}>
							<h4>{"Back-End"}</h4>
							<div className={styles.list}>{backEnd}</div>
						</div>
						<div className={styles.techSkillsContainer}>
							<h4>{"Other"}</h4>
							<div className={styles.list}>{other}</div>
						</div>
					</div>
				</div>

				<div className={styles.techSkills}>
					<h3>{"Soft Skills"}</h3>
					<div className={styles.skillsSections}>
						<div className={styles.techSkillsContainer}>
							<h4>{"Continuous learning"}</h4>
						</div>
						<div className={styles.techSkillsContainer}>
							<h4>{"Problem solving skills"}</h4>
						</div>
						<div className={styles.techSkillsContainer}>
							<h4>{"Communication skills"}</h4>
						</div>
						<div className={styles.techSkillsContainer}>
							<h4>{"Attention to detail"}</h4>
						</div>
						<div className={styles.techSkillsContainer}>
							<h4>{"Team player"}</h4>
						</div>
						<div className={styles.techSkillsContainer}>
							<h4>{"Adaptability"}</h4>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className={styles.skillsContainer}>
				<h2 id="projects" className={styles.sectionTitle}>
					My Projects
				</h2>
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
			<hr id="contactMe"/>
			<div  className={styles.skillsContainer}>
				<h2  className={styles.sectionTitle}>
					Contact Me
				</h2>
				<div className={styles.buttonsContainer}>
					<a href="mailto:a.guerrero.c.83@gmail.com">
						<button>MAIL</button>
					</a>
					<a href="https://github.com/AlStark83" target="_blank">
						<button>GITHUB</button>
					</a>
					<a href="https://www.linkedin.com/in/alberto-guerrero-covarrubias-5058b397/" target="_blank"></a>
					<button>LINKEDIN</button>
		
				</div>
			</div>
			<div className={styles.footer}>
		  <h6>Alberto Guerrero 2023</h6>
			</div>
		</div>
	);
}

export default Home;
