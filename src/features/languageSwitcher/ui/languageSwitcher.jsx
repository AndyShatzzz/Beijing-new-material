"use client";

import styles from "./languageSwitcher.module.scss";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import chinaFlag from "../images/chinaFlag.svg";
import ukFlag from "../images/ukFlag.svg";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/context/hooks/useTranslate";

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;

  const handleClick = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
    handleClose();
  };

  const { t } = useTranslation();

  return (
    <>
      <IconButton
        id="user-button"
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.iconButton}
      >
        {language === "en" ? (
          <Image src={ukFlag} alt="China language" />
        ) : (
          <Image src={chinaFlag} alt="China language" />
        )}
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "user-button",
        }}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleChangeLanguage("en")}
          disabled={language === "en"}
        >
          <Image src={ukFlag} alt="English language" />
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeLanguage("zh")}
          disabled={language === "zh"}
        >
          <Image src={chinaFlag} alt="China language" />
        </MenuItem>
      </Menu>
    </>
  );
};
