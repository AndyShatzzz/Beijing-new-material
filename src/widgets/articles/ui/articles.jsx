import React from "react";
import Image from "next/image";
import styles from "./articles.module.scss";

export const Articles = ({ arrData }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {arrData.map((item, index) => (
          <div
            key={index}
            className={`${styles.itemContainer} ${
              index % 2 === 0
                ? styles.itemContainerLeft
                : styles.itemContainerRight
            }`}
          >
            <>
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.subtitle}>{item.subtitle}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </>
          </div>
        ))}
      </div>
    </section>
  );
};
