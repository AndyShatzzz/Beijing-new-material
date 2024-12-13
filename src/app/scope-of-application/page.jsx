import Header from "@/widgets/header/ui/header";
import React from "react";
import styles from "@/app/page.module.scss";
import { WrapperRoute } from "@/widgets/wrapperRoute/ui/wrapperRoute";
import Footer from "@/widgets/footer/ui/footer";
import { ApplicationAreas } from "@/widgets/applicationAreas/ui/applicationAreas";

export default function Materials() {
  return (
    <main className={styles.main} style={{ backgroundColor: "#fff" }}>
      <Header />
      <WrapperRoute title={"Scope of Application"} />
      <ApplicationAreas />
      <Footer />
    </main>
  );
}
