"use client";

import styles from "./footer.module.scss";
import Image from "next/image";
import mail from "../images/mail.svg";
import bgImage1 from "../images/bgImage1.webp";
import Link from "next/link";
import { useTranslation } from "@/context/hooks/useTranslate";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <section id="contacts" className={styles.footerContainer}>
      <Image className={styles.bgImage} src={bgImage1} alt="Image" />
      <div className={styles.contentContainer}>
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logo}>{t("BEIJING")}</span>{" "}
          <span className={styles.logoText}>{t("NEW MATERIALS")}</span>
        </Link>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{t("Contacts")}</h2>
          <div className={styles.contactContainer}>
            <Image src={mail} alt="Mail" />
            <a
              className={styles.text}
              href="mailto:office@beijingnewmaterials.com"
              target="blank"
            >
              office@beijingnewmaterials.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.bottomText}>{t("Copyright ©2024")}</p>
        <p className={styles.bottomText}>
          {t("Beijing new Materials Co. Ltd.")}
        </p>
      </div>
    </section>
  );
}
