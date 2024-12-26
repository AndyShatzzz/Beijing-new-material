"use client";
import Header from "@/widgets/header/ui/header";
import React from "react";
import styles from "@/app/page.module.scss";
import { WrapperRoute } from "@/widgets/wrapperRoute/ui/wrapperRoute";
import Footer from "@/widgets/footer/ui/footer";
import { Articles } from "@/widgets/articles/ui/articles";
import img11 from "@/shared/images/img11.webp";
import img12 from "@/shared/images/img12.webp";
import img13 from "@/shared/images/img13.webp";
import img14 from "@/shared/images/img14.webp";

export default function ThermalInsulation() {
  const arrData = [
    {
      image: img14,
      subtitle: "Aerogel",
      text: "Highly efficient innovative material, related to new type of insulation materials. Characterized by low thermal conductivity, high tensile strength and compression, convenient to use in the heat insulation of various structures.",
    },
    {
      image: img11,
      subtitle: "Stone wool based insulation materials",
      text: "Time-tested heat insulation compound made from crushed volcanic rocks: gabbro and basalt, special components and synthetic resins. Compared to glass wool, stone wool is not afraid of high humidity. The thickness of the fibers varies from 7 to 12 μm.",
    },
    {
      image: img12,
      subtitle: "Fiberglass based insulation materials",
      text: "Fiberglass insulation is a type of mineral wool that has quartz (silicon dioxide) as its main raw material in its composition. This kind of heat insulation consists of long fibers which are made from molten quartz sand. Fibres are non-burning, hygroscopic, elastic, resistant to chemical and biological effects. Fibers are interwoven and gathered in rolls or plates of a certain thickness.",
    },
    {
      image: img13,
      subtitle: "Insulation based on foamed polyethylene",
      text: "Foamed polyethylene has a specific structure with closed surfaces. Material (in various forms) widely used - both for additional thermal insulation, and for waterproofing, and for noise insulation of a variety of building structures. Also this material is widely used in the engineering industry for the purpose of isolating all kinds of equipment.",
    },
  ];
  return (
    <main className={styles.main} style={{ backgroundColor: "#fff" }}>
      <Header />
      <WrapperRoute title={"Thermal insulation materials "} />
      <Articles arrData={arrData} />

      <Footer />
    </main>
  );
}
