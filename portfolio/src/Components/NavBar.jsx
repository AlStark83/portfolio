import React from "react";
import styles from "./NavBar.module.css";
import Button from "./Button";

function NavBar() {
	const aboutMe = Button("#aboutMe", "About Me");
	const skills = Button("#skills", "Skills");
	const products = Button("#products", "Products");
	const contactMe = Button("#contatcMe", "Contact Me");

	return (
		<div className={styles.container}>
			{aboutMe}
			{skills}
			{products}
			{contactMe}
		</div>
	);
}

export default NavBar;
