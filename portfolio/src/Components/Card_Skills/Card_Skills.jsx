import React from "react";
import styles from "./Card_Skills.module.css";

function CardSkills(list) {
	return (
			<ul>
        {list.map((item) =>( 
      <li key={item}>{item}</li>
      ))}
      </ul>
	);
}

export default CardSkills;
