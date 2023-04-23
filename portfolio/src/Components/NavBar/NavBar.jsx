import React from "react";
import styles from "./NavBar.module.css";
// import Button from "./Button";

function NavBar() {
	
	// const aboutMe = Button("#aboutMe", "About Me");
	// const skills = Button("#skills", "Skills");
	// const products = Button("#products", "Products");
	// const contactMe = Button("#contatcMe", "Contact Me");

	return (
		<nav className={styles.navBarContainer}>
			{/* {aboutMe}
			{skills}
			{products}
			{contactMe} */}
			<a href="#aboutMe"><button>About Me</button></a>
			<a href="#skills"><button>Skills</button></a>
			<a href="#projects"><button>Projects</button></a>
			<a href="#contactMe"><button>Contact Me</button></a>
		</nav>
	);
}

export default NavBar;
