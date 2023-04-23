import React from "react";
import styles from "./Footer.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const js = 	<FontAwesomeIcon 	icon={solid("square-js")}		size="2xs"		style={{ color: "#fafafa" }}	/>;
// const reactIcon = 	<FontAwesomeIcon		icon={solid("react")}		size="2xs"		style={{ color: "#fafafa" }}	/>;
// const stripe = 	<FontAwesomeIcon		icon={solid("cc-stripe")}		size="2xs"		style={{ color: "#fafafa" }}	/>;
// const html = 	<FontAwesomeIcon		icon={solid("html5")}		size="2xs"		style={{ color: "#fafafa" }}	/>;
// const css = 	<FontAwesomeIcon		icon={solid("css3-alt")}		size="2xs"		style={{ color: "#fafafa" }}	/>;

function Footer() {
	return (
		<>
      <div className={styles.footerContainer}>
			{/* <div className={styles.icons}>
				<div>{js}</div>
				<div>{reactIcon}</div>
				<div>{stripe}</div>
				<div>{html}</div>
				<div>{css}</div>
        </div> */}
         <h6>Alberto Guerrero 2023</h6>
			</div>

		</>
	);
}

export default Footer;
