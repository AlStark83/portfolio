import React from "react";
import styles from "./About_Me.module.css";
import { ReactSVG } from "react-svg";

export default function About_Me() {
	return (
		<div className={styles.aboutMeContainer}>
			<h2 className={styles.aboutMe}>About Me</h2>
			<div className={styles.sectionsContainer}>
				<div className={styles.aboutMeContent}>
					<div className={styles.aboutMeContentCol}>
						<div className={styles.svg}>
							<ReactSVG src="src\assets\undraw_hello_re_3evm.svg" />
						</div>
					</div>
					<div className={styles.aboutMeContentCol}>
						<p className={styles.paragraphAboutMe}>
							Always willing and with good attitude to face new projects, I have
							been the arrowhead for new challenges in the last jobs I've been,
							this has allowed me to contribute and enrich my knowledge and
							skills.
						</p>
					</div>
				</div>
				<div className={styles.aboutMeContent}>
					<div className={styles.aboutMeContentCol}>
						<p className={styles.paragraphAboutMe}>
							I am located in Mexico City, I did my Full Stack Developer
							training in the Soy Henry bootcamp with headquarters in Argentina,
							which consists of an intensive course with more than 800hs of
							practice and learning, where I was also Teaching Assistant
							highlighting me with the badge of Leadership awarded by vote of my
							peers.
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
	);
}
