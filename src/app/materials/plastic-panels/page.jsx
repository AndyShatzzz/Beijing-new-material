import Header from "@/widgets/header/ui/header";
import React from "react";
import styles from "@/app/page.module.scss";
import { WrapperRoute } from "@/widgets/wrapperRoute/ui/wrapperRoute";
import Footer from "@/widgets/footer/ui/footer";
import { Articles } from "@/widgets/articles/ui/articles";
import img15 from "@/shared/images/img15.webp";
import img16 from "@/shared/images/img16.webp";

export default function PlasticPanels() {
  const arrData = [
    {
      image: img15,
      subtitle: "Polyethylene plastic panels",
      text: "Has good heat resistance and frost resistance, good chemical stability, high rigidity and impact resistance, as well as good mechanical strength. This material can withstand the effects of most acids, alkalis and organic solutions.",
    },
    {
      image: img16,
      subtitle: "Polypropylene panels",
      text: "Polypropylene has high impact strength, wear resistance and low coefficient of friction. Polypropylene panels also have advantages such as moisture resistance, dirt resistance and corrosion resistance.",
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
