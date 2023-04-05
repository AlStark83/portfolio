import React from "react";
import styles from "./NavBar.module.css";
// import Button from "./Button";

function NavBar() {
	
	// const aboutMe = Button("#aboutMe", "About Me");
	// const skills = Button("#skills", "Skills");
	// const products = Button("#products", "Products");
	// const contactMe = Button("#contatcMe", "Contact Me");

	return (
		<div className={styles.navBarContainer}>
			{/* {aboutMe}
			{skills}
			{products}
			{contactMe} */}
			<button><a href="#aboutMe">About Me</a></button>
			<button><a href="#skills">Skills</a></button>
			<button><a href="#products">Products</a></button>
			<button><a href="#contactMe">Contact Me</a></button>
		</div>
	);
}

export default NavBar;
