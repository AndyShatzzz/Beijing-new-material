"use client";
import Header from "@/widgets/header/ui/header";
import React from "react";
import styles from "@/app/page.module.scss";
import { WrapperRoute } from "@/widgets/wrapperRoute/ui/wrapperRoute";
import Footer from "@/widgets/footer/ui/footer";
import { Articles } from "@/widgets/articles/ui/articles";
import img5 from "@/shared/images/img5.webp";
import img6 from "@/shared/images/img6.webp";
import img7 from "@/shared/images/img7.webp";

export default function FireResistant() {
  const arrData = [
    {
      image: img5,
      subtitle: "Refractory brick",
      text: "These bricks are made of fireproof clay, which contains 30-40% aluminium oxide, alumina, and 50% silicon dioxide or silicon oxide in its composition. Thus, the fireclay bricks are used for objects with constant contact with fire and where effective protection against high temperatures is particularly important.",
    },
    {
      image: img6,
      subtitle: "Fireproof tile",
      text: "Fire resistant tile used to protect structures and equipment from the effects of high temperatures. It is designed for use not only in industry, construction, but also for solving domestic tasks. Due to the variety of types and properties, fire resistant tiles can meet any specific requirements for flame retardant constructions.",
    },
    {
      image: img7,
      subtitle: "Fire resistant compounds",
      text: "Fire resistant compounds are intended for the production of large-sized monolithic linings and repair work on furnace masonry. Also, similar mixtures are used for the manufacture of ladles with transport or pouring functions. Fire resistant compounds are easy to use and high-tech. The use of such materials makes it possible to carry out linings of the most complex structures and various geometric shapes.",
    },
  ];
  return (
    <main className={styles.main} style={{ backgroundColor: "#fff" }}>
      <Header />
      <WrapperRoute title={"Fire-resistant and refractory materials"} />
      <Articles arrData={arrData} />

      <Footer />
    </main>
  );
}
