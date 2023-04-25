import React from "react";
import styles from "./Header.module.css";
import NavBar from "../NavBar/NavBar.jsx";

export default function Header() {
	return (
		<div className={styles.header}>
			<img
				className={styles.logo}
				src="src\assets\Alberto Logo (white 320 × 80 px).png"
				alt="logo"
			/>
			<NavBar />
		</div>
	);
}
