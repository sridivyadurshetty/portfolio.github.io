import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
  return (
    <div className={styles.container} id="skills">
      <div className={styles.wrapper}>
        <div className={styles.title}>Skills</div>
        <div className={styles.desc}>
          Here are some of my skills on which I have been working for the past 2
          years.
        </div>
        <div className={styles.skillsContainer}>
          {skills.map((skill) => (
            <div className={styles.skill} key={skill.title}>
              <h2 className={styles.skillTitle}>{skill.title}</h2>
              <div className={styles.skillList}>
                {skill.skills.map((item) => (
                  <div className={styles.skillItem} key={item.name}>
                    <img
                      className={styles.skillImage}
                      src={item.image}
                      alt={item.name}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
