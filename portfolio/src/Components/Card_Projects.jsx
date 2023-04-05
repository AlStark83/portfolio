import React from "react";
import styles from "./Card_Projects.module.css";
// import Button from "./Button";

function CardProjects(img, title, description, list, url1, text1, url2, text2) {
	// const button1 = Button(url1, text1);
	// const button2 = Button(url2, text2);
	return (
		<div className={styles.container}>
			<div className={styles.img}>{img}</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.description}>{description}</div>
			<div className={styles.list}>{list}</div>
			<div>
				{/* <div>{button1}</div>
				<div>{button2}</div> */}
			</div>
		</div>
	);
}

export default CardProjects;
