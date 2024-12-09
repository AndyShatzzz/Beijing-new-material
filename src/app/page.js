import Header from "@/widgets/header/ui/header";
import styles from "./page.module.scss";
import About from "@/widgets/about/ui/about";
import WhyMe from "@/widgets/whyMe/ui/whyMe";
import GoodsStore from "@/widgets/goodsStore/ui/goodsStore";
import { AboutUs } from "@/widgets/aboutUs/ui/aboutUs";
import { WorksSphere } from "@/widgets/worksSphere/ui/worksSphere";

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <Header />
      <About />
      <WhyMe />
      <AboutUs />
      <WorksSphere />
      {/* <GoodsStore /> */}
    </main>
  );
}
