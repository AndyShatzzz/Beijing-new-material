"use client";

import styles from "./goodsStore.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reactSlick.css";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import vector1 from "@/shared/images/Vector1.svg";
import vector2 from "@/shared/images/Vector2.svg";
import img1 from "@/shared/images/img1.webp";
import img6 from "@/shared/images/img6.webp";
import img13 from "@/shared/images/img13.webp";
import img16 from "@/shared/images/img16.webp";
import img17 from "@/shared/images/img17.webp";
import img18 from "@/shared/images/img18.webp";
import Link from "next/link";
import { useTranslation } from "@/context/hooks/useTranslate";
import nextButton from "../images/next.svg";

export default function GoodsStore() {
  const { t } = useTranslation();
  const data = [
    {
      image: img1,
      name: "Acid-resistant materials",
      _id: "645cbe78-b498-4a49-b3ad-981188889253",
      description1:
        "Resistant to aggressive environments and mechanical impact",
      description2: "Chemical and heat resistant",
      description3:
        "It has an average compressive strength of approximately 23,000 PSI",
      description4: "Used to cover surfaces subject to heavy loads",
      link: "/materials/acid-resistant",
    },
    {
      image: img6,
      name: "Fire-resistant and refractory materials",
      _id: "382d8c1b-e38c-48d6-b066-ab97e673d66e",
      description1:
        "It is a block of ceramic material that can withstand high temperatures, chemical environments and mechanical stress",
      description2:
        "It serve as linings for furnaces, reactors, boilers and other high-temperature equipment",
      description3: "It does not slip and has a significant thickness",
      description4: "Resistance to high temperatures and no deformation",
      link: "/materials/fire-resistant",
    },
    {
      image: img18,
      name: "Rubber products",
      _id: "322d8c1a-e38a-48d6-b062-ab97e333d63a",
      description1:
        "It serves to protect steel building elements exposed to chemical attack",
      description2:
        "It used to protect steel and concrete structures from corrosion",
      description3:
        "It used for working with chemical equipment and are also widely used in chlorine production",
      link: "/materials/rubber-products",
    },
    {
      image: img13,
      name: "Thermal insulation materials",
      _id: "322d8c1a-e38a-48d6-b062-ab97e673d63e",
      description1: "Melting point reaches up to 1000° C",
      description2:
        "It is used to maintain a comfortable microclimate in the room, quartz insulation has one of the best indicators",
      description3: "It combines low thermal conductivity and water resistance",
      link: "/materials/thermal-insulation",
    },
    {
      image: img16,
      name: "Plastic panels",
      _id: "645cbe78-b498-4a49-b3ad-981188889253",
      description1: "Heat resistance and frost resistance",
      description2: "Good chemical stability",
      description3: "High rigidity and impact resistance",
      description4:
        "This kind materials can withstand the effects of most acids, alkalis and organic solutions",
      link: "/materials/plastic-panels",
    },
    {
      image: img17,
      name: "Chemical additives for concrete",
      _id: "645cbe78-b498-4a49-b3ad-981188489341",
      description1:
        "It makes concrete dense and increase its fluidity. The plastic mixture makes it easier to fill formwork and casting molds",
      description2: "It used to mix super-mobile mixtures",
      description3:
        "Accelerators help the mixture to harden faster, and retarders slow down the hardening process if the concrete is transported over long distances",
      link: "/materials/chemical-additives",
    },
  ];

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const [counterSliderToShow, setCounterSliderToShow] = useState(3);

  useEffect(() => {
    if (window.innerWidth > 920) {
      setCounterSliderToShow(3);
    } else if (window.innerWidth < 930 && window.innerWidth > 630) {
      setCounterSliderToShow(2);
    } else {
      setCounterSliderToShow(1);
    }
  }, [size]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: counterSliderToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    className: "containerWrapper",
    centerPadding: "100px",
  };

  return (
    <section className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{t("Our Products")}</h2>
        <Image src={vector1} alt="Image" />
        <Image className={styles.vector2} src={vector2} alt="Image" />
      </div>
      <div className={`slider-container ${styles.container}`}>
        <Slider {...settings}>
          {data &&
            data.map((item) => (
              <div className={styles.wrapper} key={item._id}>
                <div className={styles.wrapper2}>
                  <Image
                    className={styles.img}
                    src={item.image}
                    alt={item.name}
                  />
                  <h3 className={styles.subtitle}>{t(item.name)}</h3>
                  <p className={styles.text}>{t(item.description1)}</p>
                  <p className={styles.text}>{t(item.description2)}</p>
                  <p className={styles.text}>{t(item.description3)}</p>
                  <p className={styles.text}>{t(item.description4)}</p>
                  <p className={styles.text}>{t(item.description5)}</p>
                  <p className={styles.text}>{t(item.description6)}</p>
                  <p className={styles.price}>{item.price}</p>
                  <Link className={styles.button} href={item.link}>
                    <p className={styles.textButton}>{t("Read more")}</p>
                    <Image
                      className={styles.svgButton}
                      src={nextButton}
                      alt="Image"
                      style={{ color: "#fff" }}
                    />
                  </Link>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}
