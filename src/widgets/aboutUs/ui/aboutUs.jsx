import styles from "./aboutUs.module.scss";
import Image from "next/image";
import image1 from "../images/image1.webp";
import { useTranslation } from "@/context/hooks/useTranslate";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.target} id="about">
      <div className={styles.container}>
        <Image className={styles.img} src={image1} alt="Картинка" />
        <div className={styles.textContainer}>
          <p className={styles.title}>
            {t(
              "Beijing New Materials Co., Ltd. works every day to implement infrastructure projects of any complexity around the world"
            )}
          </p>
          <div className={styles.textFlexContainer}>
            <div className={styles.textWrapper}>
              <p className={styles.subtitle}>
                {t("Wide range of protective materials")}
              </p>
              <p className={styles.text}>
                {t(
                  "Our company specialized in manufacturing of wide range of protective materials against aggressive environments for industrial enterprises"
                )}
              </p>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.subtitle}>
                {t("Compliance with international quality standards")}
              </p>
              <p className={styles.text}>
                {t(
                  "Our production facilities allow us to make a variety of industrial materials that meet modern safety and performance standards"
                )}
              </p>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.subtitle}>
                {t("Large scale production facilities")}
              </p>
              <p className={styles.text}>
                {t(
                  "We possess the manufacturing facilities, distinctive equipment, and technologies required to create high-quality materials"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
