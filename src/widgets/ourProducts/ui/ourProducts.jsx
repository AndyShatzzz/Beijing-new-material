import React from "react";
import styles from "./ourProducts.module.scss";
import Image from "next/image";
import Link from "next/link";
import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";
import image4 from "../images/image4.webp";
import image5 from "../images/image5.webp";
import image6 from "../images/image6.webp";
import { useTranslation } from "@/context/hooks/useTranslate";

export const OurProducts = () => {
  const { t } = useTranslation();
  const arrData = [
    {
      text: "Acid-resistant materials",
      link: "/materials/acid-resistant",
      img: image1,
    },
    {
      text: "Fire-resistant and refractory materials",
      link: "/materials/fire-resistant",
      img: image2,
    },
    {
      text: "Rubber products",
      link: "/materials/rubber-products",
      img: image3,
    },
    {
      text: "Thermal insulation materials",
      link: "/materials/thermal-insulation",
      img: image4,
    },
    {
      text: "Plastic panels",
      link: "/materials/plastic-panels",
      img: image5,
    },
    {
      text: "Chemical additives for concrete",
      link: "/materials/chemical-additives",
      img: image6,
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
              <h2 className={styles.title}>{t(item.text)}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
