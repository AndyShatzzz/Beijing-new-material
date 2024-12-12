import Header from "@/widgets/header/ui/header";
import React from "react";
import styles from "@/app/page.module.scss";
import { WrapperRoute } from "@/widgets/wrapperRoute/ui/wrapperRoute";
import Footer from "@/widgets/footer/ui/footer";
import { Articles } from "@/widgets/articles/ui/articles";
import img1 from "@/shared/images/img1.webp";
import img2 from "@/shared/images/img2.webp";
import img3 from "@/shared/images/img3.webp";
import img4 from "@/shared/images/img4.webp";

export default function AcidResistant() {
  const arrData = [
    {
      image: img1,
      subtitle: "Acid-resistant bricks",
      text: "These kind of bricks are made of special components that enhance its resistance to aggressive media and mechanical strength. These bricks are widely used in construction and repair of various industrial facilities, such as: in the chemical, petrochemical, food and metallurgical industries, as well as in covering surfaces subject to heavy loads.",
    },
    {
      image: img2,
      subtitle: "Acid-resistant tile",
      text: "Suitable for flooring applications in food and petrochemical plants where they are exposed to strong acids impact.",
    },
    {
      image: img3,
      subtitle: "Acid-resistant powder",
      text: "Its main purpose of the powder is to protect surfaces from the negative effects of chemical reagents. The powder itself is neutral. The powder is mainly used as a filler in the construction industry - in epoxy and silicate coatings, acid-resistant concretes and acid-resistant adhesives.",
    },
    {
      image: img4,
      subtitle: "Putties and grouting compounds",
      text: "These materials are used to fill joints when coating with acid-resistant bricks or tiles.",
    },
  ];
  return (
    <main className={styles.main} style={{ backgroundColor: "#fff" }}>
      <Header />
      <WrapperRoute />
      <Articles arrData={arrData} />

      <Footer />
    </main>
  );
}
