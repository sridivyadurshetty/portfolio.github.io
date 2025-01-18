import React from "react";
import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.timeline}>
        {education.map((item, index) => (
          <div
            key={index}
            className={`${styles.timelineContainer} ${
              index % 2 === 0 ? styles.leftContainer : styles.rightContainer
            }`}
          >
            <img src={getImageUrl(item.imageSrc)} alt={item.institution} />
            <div className={styles.textBox}>
              <h2>{item.degree}</h2>
              <small>
                {item.startDate} - {item.endDate}
              </small>
              <p>{item.institution}</p>
              <small>{item.location}</small>
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
