import React from "react";
import styles from "../../View/Home.module.css"
import CardSkills from "../Card_Skills/Card_Skills.jsx";

export default function Skills(){
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
  return (
    <div className={styles.skillsContainer}>
				<h2 className={styles.sectionTitle}>Skills</h2>
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
				<br />
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
  )
}