import React from "react";
import styles from "./Hero.module.css";


export default function Hero(){
  return (
    <div>
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <h2>
          Hi There! I'm <span>Al</span>
        </h2>
        <h1> Full Stack Developer based in CDMX, México</h1>
        <div className={styles.imgMe}>
          <img
            src="\src\assets\Profile Picture AGC - Editado.png"
            width="270px"
            alt="Me smiling"
          />
        </div>
      </div>
    </div>
  </div>
  )
}