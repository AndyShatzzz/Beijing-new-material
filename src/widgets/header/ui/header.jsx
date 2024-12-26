"use client";
import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { LanguageSwitcher } from "@/features/languageSwitcher/ui/languageSwitcher";
import { useTranslation } from "@/context/hooks/useTranslate";

export default function Header() {
  const [headClass, setHeadClass] = useState(styles.header);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState(styles.linksContainer);
  const [wrapperStyle, setWrapperStyle] = useState(styles.opacityWrapper);
  const { t } = useTranslation();
  const [showWrapper, setShowWrapper] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowWrapper(width < 930 && width > 630);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (evt) => {
      console.log(window.scrollY);
      if (window.scrollY > 30) {
        setHeadClass(styles.headerSticky);
      } else {
        setHeadClass(styles.header);
      }
    });
  });

  const handleOpenMenu = () => {
    if (window.scrollY > 30) {
      setWrapperStyle(styles.opacityWrapperStikyActive);
    } else {
      setWrapperStyle(styles.opacityWrapperActive);
    }
    setMenuStyle(styles.linksContainerOpen);
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    if (window.scrollY > 30) {
      setHeadClass(styles.headerSticky);
    } else {
      setHeadClass(styles.header);
    }
    setMenuStyle(styles.linksContainer);
    setWrapperStyle(styles.opacityWrapper);
    setIsMenuOpen(false);
  };

  return (
    <header className={headClass}>
      <div className={wrapperStyle}></div>
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          <span className={styles.logo}>{t("BEIJING")}</span>
          <span className={styles.logoText}>{t("NEW MATERIALS")}</span>
        </Link>
        <div className={menuStyle}>
          <Link
            href="/#about"
            className={styles.links}
            onClick={handleCloseMenu}
          >
            {t("About Us")}
          </Link>
          <Link
            href="/materials"
            className={styles.links}
            onClick={handleCloseMenu}
          >
            {t("Our Products")}
          </Link>
          <Link
            href="/scope-of-application"
            className={styles.links}
            onClick={handleCloseMenu}
          >
            {t("Scope of Application")}
          </Link>
          <Link
            href="/#contacts"
            className={styles.links}
            onClick={handleCloseMenu}
          >
            {t("Contacts")}
          </Link>
          {showWrapper ? (
            <div className={styles.languageSwitcher}>
              <LanguageSwitcher />
            </div>
          ) : (
            <LanguageSwitcher />
          )}
        </div>
        {!isMenuOpen && (
          <IconButton
            sx={{ margin: 0, padding: 0 }}
            className={styles.menuButton}
            onClick={handleOpenMenu}
          >
            <MenuIcon sx={{ color: "#fff", width: "32px", height: "32px" }} />
          </IconButton>
        )}
        {isMenuOpen && (
          <IconButton className={styles.menuButton} onClick={handleCloseMenu}>
            <CloseIcon sx={{ color: "#fff", width: "32px", height: "32px" }} />
          </IconButton>
        )}
      </div>
    </header>
  );
}
