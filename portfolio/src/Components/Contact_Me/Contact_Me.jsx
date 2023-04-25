import React from "react";
import styles from "../../View/Home.module.css"

export default function Contact_Me(){
  return (
    <div className={styles.skillsContainer}>
				<h2 className={styles.sectionTitle}>Contact Me</h2>
				<div className={styles.buttonsContainer}>
					<a href="mailto:a.guerrero.c.83@gmail.com">
						<button>MAIL</button>
					</a>
					<a href="https://github.com/AlStark83" target="_blank">
						<button>GITHUB</button>
					</a>
					<a
						href="https://www.linkedin.com/in/alberto-guerrero-covarrubias-5058b397/"
						target="_blank"></a>
					<button>LINKEDIN</button>
				</div>
			</div>
  )
}