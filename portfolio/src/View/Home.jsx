import { useState } from "react";
import About_Me from "../Components/About_Me/About_Me.jsx";
import Contact_Me from "../Components/Contact_Me/Contact_Me.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Header from "../Components/Header/Header.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import Projects from "../Components/Projects/Projects.jsx";
import styles from "./Home.module.css";
import Skills from "../Components/Skills/Skills.jsx";
import ScrollToTop from "react-scroll-to-top";


function Home() {
	return (
		<div className={styles.homeContainer}>
			<ScrollToTop smooth top="400" color={"black"} />
			<Header />
			<Hero />
			<hr id="aboutMe" />
			<About_Me />
			<hr id="skills" />
			<Skills />
			<hr id="projects" />
			<Projects />
			<hr id="contactMe" />
			<Contact_Me />
			<div className={styles.footer}>
				<h6>Alberto Guerrero April 2023 V.1.0.2</h6>
			</div>
		</div>
	);
}

export default Home;
