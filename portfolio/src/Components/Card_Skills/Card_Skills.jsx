import React from "react";
import styles from "./Card_Skills.module.css";

function CardSkills(name, list) {

  return (
		<div className={styles.container}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.list}>
        {list}
      </div>
		</div>
	);
}

export default CardSkills;
