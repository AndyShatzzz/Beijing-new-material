import React from "react";
import styles from "./worksSphere.module.scss";
import img1 from "@/shared/images/application1.svg";
import img2 from "@/shared/images/application2.svg";
import img3 from "@/shared/images/application3.svg";
import img5 from "@/shared/images/application4.svg";
import img6 from "@/shared/images/application5.svg";
import vector1 from "@/shared/images/Vector1.svg";
import vector2 from "@/shared/images/Vector2.svg";
import Image from "next/image";

export const WorksSphere = () => {
  const arrData = [
    {
      image: img1,
      text: "Metallurgical plants",
    },
    {
      image: img2,
      text: "Gas and oil production and processing facilities",
    },
    {
      image: img3,
      text: "Heavy machinery plants",
    },
    {
      image: img5,
      text: "Chemical industry enterprises",
    },
    {
      image: img6,
      text: "Mining and refining enterprises",
    },
  ];
  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Scope of Application</h2>
          <Image src={vector1} alt="Image" />
          <Image className={styles.vector2} src={vector2} alt="Image" />
        </div>
        <div className={styles.contentWrapper}>
          {arrData.map((item, index) => (
            <div className={styles.gridContainer} key={index}>
              <Image className={styles.image} src={item.image} alt="Картинка" />
              <p className={styles.text}>{item.text}</p>
              <a href="#" className={styles.button}>
                <p className={styles.buttonText}>Read more</p>
                <Image
                  className={styles.buttonVector1}
                  src={vector1}
                  alt="Image"
                />
                <Image
                  className={styles.buttonVector2}
                  src={vector2}
                  alt="Image"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
