import React from "react";
import styles from "./applicationAreas.module.scss";
import { useTranslation } from "@/context/hooks/useTranslate";

export const ApplicationAreas = () => {
  const { t } = useTranslation();
  const arrData = [
    {
      title: "Metallurgical plants",
      className: "metallurgIcon",
      link: "/scope-of-application/metallurgical-plants",
    },
    {
      title: "Gas and oil production and processing facilities",
      className: "gasAndOilIcon",
      link: "/scope-of-application/gas-and-oil-facilities",
    },
    {
      title: "Heavy machinery plants",
      className: "heavyMachineryIcon",
      link: "/scope-of-application/heavy-machinery-plants",
    },
    {
      title: "Chemical industry enterprises",
      className: "chemicalIndustryIcon",
      link: "/scope-of-application/chemical-industry-enterprises",
    },
    {
      title: "Mining and refining enterprises",
      className: "miningIcon",
      link: "/scope-of-application/mining-enterprises",
    },
  ];
  return (
    <section className={styles.applicationAreasSection}>
      <div className={styles.cardGrid}>
        {arrData.map((item, index) => (
          <a href="#" key={index} className={styles.card}>
            <div
              className={`${styles.cardIcon} ${styles[item.className]}`}
            ></div>
            <h3 className={styles.cardTitle}>{t(item.title)}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};
