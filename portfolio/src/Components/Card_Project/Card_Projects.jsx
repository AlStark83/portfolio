import React from "react";
import styles from "./Card_Projects.module.css";
// import Button from "./Button";

function CardProjects(
	image,
	title,
	description,
	list,
	url1,
	text1,
	url2,
	text2
) {
	// const button1 = Button(url1, text1);
	// const button2 = Button(url2, text2);
	return (
		<div className={styles.cardProject}>
			<a href={url1} target="_blank">
				<div className={styles.img}>
					<img src={image} alt={title} />
				</div>
				<div className={styles.title}>{title}</div>
			</a>
			<div className={styles.contentContainer}>
				<div className={styles.description}>{description}</div>
				<div className={styles.list}>
					<ul>
						{list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
			<div>
				{/* <div>{button1}</div>
				<div>{button2}</div> */}
			</div>
		</div>
	);
}

export default CardProjects;
