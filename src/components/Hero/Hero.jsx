import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Sridivya</h1>
        <p className={styles.description}>
          I'm a dedicated and proactive graduate student holding an accomplished
          undergraduate degree in Computer Science, complemented by an extensive
          experience in the development and testing of multi-tier enterprise
          applications using Java/J2EE technologies. Eagerly pursuing an
          on-campus job opportunity to leverage well-honed organizational,
          communication, and adept problem-solving skills within a collaborative
          and dynamic environment. Reach out if you'd like to know more.
        </p>
        <a className={styles.contactBtn} href="mailto:dsridivya5@gmail.com">
          Contact me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
      ></img>
    </section>
  );
};
