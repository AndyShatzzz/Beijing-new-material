import Image from "next/image";
import styles from "./wrapperRoute.module.scss";
import mainImage from "../images/mainImage.webp";

export const WrapperRoute = ({ title }) => {
  return (
    <section className={styles.wrapperRouteSection}>
      <div className={styles.imageContainer}>
        <Image className={styles.container} src={mainImage} alt="Картинка" />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </section>
  );
};
