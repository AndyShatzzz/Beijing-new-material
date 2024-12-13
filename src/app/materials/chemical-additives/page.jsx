import Header from "@/widgets/header/ui/header";
import React from "react";
import styles from "@/app/page.module.scss";
import { WrapperRoute } from "@/widgets/wrapperRoute/ui/wrapperRoute";
import Footer from "@/widgets/footer/ui/footer";
import { Articles } from "@/widgets/articles/ui/articles";
import img17 from "@/shared/images/img17.webp";

export default function PlasticPanels() {
  const arrData = [
    {
      image: img17,
      subtitle: "Chemical additives for concrete",
      text: "We manufacture and are ready to offer you a wide range of concrete additives, among which: concrete plasticizers, concrete adhesion inhibitors, concrete adhesion accelerators, anti-freeze additives, expansion additives, rigid concrete additives, concrete stabilisers, refractory mixtures, hydrophobic additives in concrete.",
    },
  ];
  return (
    <main className={styles.main} style={{ backgroundColor: "#fff" }}>
      <Header />
      <WrapperRoute title={"Chemical additives for concrete"} />
      <Articles arrData={arrData} />

      <Footer />
    </main>
  );
}
