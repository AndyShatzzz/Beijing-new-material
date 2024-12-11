import React from "react";
import styles from "./ourProducts.module.scss";
import Image from "next/image";
import Link from "next/link";
import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";
import image4 from "../images/image4.webp";

export const OurProducts = () => {
  const arrData = [
    {
      text: "Acid-resistant materials",
      link: "/products/acid-resistant",
      img: image1,
    },
    {
      text: "Fire-resistant and refractory materials",
      link: "/products/fire-resistant",
      img: image2,
    },
    {
      text: "Rubber products",
      link: "/products/rubber-products",
      img: image3,
    },
    {
      text: "Thermal insulation materials",
      link: "/products/thermal-insulation",
      img: image4,
    },
    {
      text: "Plastic panels",
      link: "/products/plastic-panels",
      // img: image1,
    },
    {
      text: "Chemical additives for concrete",
      link: "/products/chemical-additives",
      // img: image1,
    },
  ];
  return (
    <section className={styles.mainContainer}>
      <div className={styles.gridContainer}>
        {arrData.map((item, index) => (
          <Link key={index} href={item.link} className={styles.gridChild}>
            <div className={styles.contentWrapper}>
              <Image className={styles.img} src={item.img} alt={item.text} />
              <div className={styles.overlay}></div>
              <h2 className={styles.title}>{item.text}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
