import { useState } from "react";
import About_Me from "../Components/About_Me/About_Me.jsx";
import Contact_Me from "../Components/Contact_Me/Contact_Me.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Header from "../Components/Header/Header.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import Projects from "../Components/Projects/Projects.jsx"
import styles from "./Home.module.css";
import Skills from "../Components/Skills/Skills.jsx";

function Home() {
	return (
		<div className={styles.homeContainer}>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poiret+One&family=Yellowtail&display=swap');
			</style>
			<Header />
			<Hero />
			<hr id="aboutMe" />
			<About_Me />
			<hr id="skills" />
			<Skills />
			<hr id="projects"/>
			<Projects />
			<hr id="contactMe" />
			<Contact_Me />
			<div className={styles.footer}>
				<h6>Alberto Guerrero 2023</h6>
			</div>
		</div>
	);
}

export default Home;
