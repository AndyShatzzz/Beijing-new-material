"use client";
import Header from "@/widgets/header/ui/header";
import React from "react";
import styles from "@/app/page.module.scss";
import { WrapperRoute } from "@/widgets/wrapperRoute/ui/wrapperRoute";
import Footer from "@/widgets/footer/ui/footer";
import { Articles } from "@/widgets/articles/ui/articles";
import img8 from "@/shared/images/img8.webp";
import img9 from "@/shared/images/img9.webp";
import img10 from "@/shared/images/img10.webp";

export default function RubberProducts() {
  const arrData = [
    {
      image: img8,
      subtitle: "Rubber sheets for steel structures protection",
      text: "Vulcanized rubber coatings used for protection of steel structures used in industrial plants from the effects of aggressive media. Layer thickness can vary from 2 to 8 mm depending on customer`s need.",
    },
    {
      image: img9,
      subtitle: "Rubber mixtures for gumming chemical equipment",
      text: "Rubber compound is a multi-component and homogeneous system designed for the manufacturing of various products by vulcanization. Vulcanized rubber is able to withstand high elastic deformation.",
    },
    {
      image: img10,
      subtitle: "Pulley lagging rubber linings",
      text: "Special rubber coating that is fixed to the conveyor drum by means of glue or mechanical way. This coating ensures maximum adhesion of the belt to the driving drum, which helps reduce slipping and further tension of the belt, also this rubber coating protects the drum from corrosion and mechanical damage.",
    },
  ];
  return (
    <main className={styles.main} style={{ backgroundColor: "#fff" }}>
      <Header />
      <WrapperRoute title={"Rubber products"} />
      <Articles arrData={arrData} />

      <Footer />
    </main>
  );
}
