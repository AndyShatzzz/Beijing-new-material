"use client";
import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export default function Header() {
  const [headClass, setHeadClass] = useState(styles.header);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState(styles.linksContainer);
  const [wrapperStyle, setWrapperStyle] = useState(styles.opacityWrapper);
  useEffect(() => {
    window.addEventListener("scroll", (evt) => {
      if (window.scrollY > 10) {
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
          <span className={styles.logo}>BEIJING</span>
          <span className={styles.logoText}>NEW MATERIALS</span>
        </Link>
        <div className={menuStyle}>
          <Link
            href="/#about"
            className={styles.links}
            onClick={handleCloseMenu}
          >
            About Us
          </Link>
          <Link
            href="/materials"
            className={styles.links}
            onClick={handleCloseMenu}
          >
            Our Products
          </Link>
          <Link
            href="/scope-of-application"
            className={styles.links}
            onClick={handleCloseMenu}
          >
            Scope of Application
          </Link>
          <Link
            href="/#contacts"
            className={styles.links}
            onClick={handleCloseMenu}
          >
            Contacts
          </Link>
        </div>
        {!isMenuOpen && (
          <Avatar
            sx={{ margin: 0, padding: 0, bgcolor: "#ff0000" }}
            className={styles.menuButton}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </Avatar>
        )}
        {isMenuOpen && (
          <Avatar
            className={styles.menuButton}
            onClick={handleCloseMenu}
            sx={{ bgcolor: "#ff0000" }}
          >
            <CloseIcon />
          </Avatar>
        )}
      </div>
    </header>
  );
}
