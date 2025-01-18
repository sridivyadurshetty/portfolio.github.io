import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {experience.map((item, index) => (
          <div
            key={index}
            className={`${styles.timelineContainer} ${
              index % 2 === 0 ? styles.leftContainer : styles.rightContainer
            }`}
          >
            <img src={getImageUrl(item.imageSrc)} alt={item.organisation} />
            <div className={styles.textBox}>
              <h2>{item.role}</h2>
              <small>
                {item.startDate} - {item.endDate}
              </small>
              <h3>{item.organisation}</h3>
              <ul>
                {item.experiences.map((exp, idx) => (
                  <li key={idx}>{exp}</li>
                ))}
              </ul>
              <span
                className={
                  index % 2 === 0
                    ? styles.leftContainerArrow
                    : styles.rightContainerArrow
                }
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
