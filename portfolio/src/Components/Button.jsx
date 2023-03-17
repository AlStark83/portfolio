import React from "react";
import styles from "./Button.module.css";

function Button(url, text) {
	return (
		<div className={styles.container}>
			<button  key = {text}> 
			<a href={url}>{text}</a>
			 </button>
		</div>
	);
}

export default Button;
