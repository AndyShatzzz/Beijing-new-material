import Image from "next/image";
import image1 from "../images/image1.svg";
import image2 from "../images/image2.svg";
import image3 from "../images/image3.svg";
import image4 from "../images/image4.svg";

import styles from "./whyMe.module.scss";

export default function WhyMe() {
  const arrData = [
    {
      image: image2,
      title: "The best price",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c1",
    },
    {
      image: image3,
      title: "Deadline guarantee",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c2",
    },
    {
      image: image1,
      title: "Always in stock",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c3",
    },
    {
      image: image4,
      title: "Well-established logistics routes",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c5",
    },
  ];
  return (
    <section id="about" className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.yearWrapper}>
          <div className={styles.yearContainer}>
            <p className={styles.yearTitle}>
              1<span className={styles.yearTitleRed}>5</span>
            </p>
            <p className={styles.yearTitleText}>years of experience</p>
          </div>
          <p className={styles.yearSubtitleText}>
            In the production and supply of refractory materials for industry
          </p>
        </div>
        <div className={styles.gridContainer}>
          {arrData &&
            arrData.map((item) => (
              <div className={styles.wrapper} key={item._id}>
                <Image
                  className={styles.img}
                  src={item.image}
                  alt={item.title}
                />
                <p className={styles.subtitle}>{item.title}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
