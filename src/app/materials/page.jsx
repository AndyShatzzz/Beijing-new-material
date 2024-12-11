import Header from "@/widgets/header/ui/header";
import React from "react";
import styles from "@/app/page.module.scss";
import { WrapperRoute } from "@/widgets/wrapperRoute/ui/wrapperRoute";
import About from "@/widgets/about/ui/about";
import WhyMe from "@/widgets/whyMe/ui/whyMe";
import { WorksSphere } from "@/widgets/worksSphere/ui/worksSphere";
import GoodsStore from "@/widgets/goodsStore/ui/goodsStore";
import Footer from "@/widgets/footer/ui/footer";
import { OurProducts } from "@/widgets/ourProducts/ui/ourProducts";

export default function Materials() {
  return (
    <main className={styles.main} style={{ backgroundColor: "#fff" }}>
      <Header />
      <WrapperRoute />
      <OurProducts />
      {/* <WhyMe />
      <WorksSphere />
      <GoodsStore /> */}
      <Footer />
    </main>
  );
}
