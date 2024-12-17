"use client";

import styles from "./footer.module.scss";
import Image from "next/image";
import mail from "../images/mail.svg";
import footerVector1 from "../images/FooterVector1.svg";
import footerVector2 from "../images/FooterVector2.svg";
import Link from "next/link";
import { useTranslation } from "@/context/hooks/useTranslate";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <section id="contacts" className={styles.footerContainer}>
      <div className={styles.imgLayer}></div>
      <Image
        className={styles.vectorImageTop}
        src={footerVector1}
        alt="Image"
      />
      <Image
        className={styles.vectorImageBottom}
        src={footerVector2}
        alt="Image"
      />
      <div className={styles.bgLayer}></div>
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
              href="mailto:BeijingNEWMATERIALS@GMAIL.COM"
              target="blank"
            >
              BEIJINGNEWMATERIALS@GMAIL.COM
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
