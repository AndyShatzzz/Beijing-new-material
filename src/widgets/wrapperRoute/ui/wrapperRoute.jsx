import Image from "next/image";
import styles from "./wrapperRoute.module.scss";
import mainImage from "../images/mainImage.webp";
import { useTranslation } from "@/context/hooks/useTranslate";

export const WrapperRoute = ({ title }) => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapperRouteSection}>
      <div className={styles.imageContainer}>
        <Image className={styles.container} src={mainImage} alt="Картинка" />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{t(title)}</h2>
      </div>
    </section>
  );
};
