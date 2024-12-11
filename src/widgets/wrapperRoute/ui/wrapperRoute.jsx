import Image from "next/image";
import styles from "./wrapperRoute.module.scss";
import mainImage from "../images/mainImage.webp";

export const WrapperRoute = () => {
  return (
    <section>
      <div className={styles.imageContainer}>
        <Image className={styles.container} src={mainImage} alt="Картинка" />
        {/* <h1 className={styles.title}>{item.title}</h1> */}
      </div>
    </section>
  );
};
