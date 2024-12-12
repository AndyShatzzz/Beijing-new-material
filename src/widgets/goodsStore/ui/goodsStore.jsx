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
import img2 from "@/shared/images/img2.webp";
import img3 from "@/shared/images/img3.webp";
import img4 from "@/shared/images/img4.webp";
import img5 from "@/shared/images/img5.webp";
import img6 from "@/shared/images/img6.webp";
import img7 from "@/shared/images/img7.webp";
import img8 from "@/shared/images/img8.webp";
import img9 from "@/shared/images/img9.webp";
import img10 from "@/shared/images/img10.webp";
import img11 from "@/shared/images/img11.webp";
import img12 from "@/shared/images/img12.webp";
import img13 from "@/shared/images/img13.webp";
import img14 from "@/shared/images/img14.webp";
import img15 from "@/shared/images/img15.webp";
import img16 from "@/shared/images/img16.webp";
import img17 from "@/shared/images/img17.webp";
import Link from "next/link";

export default function GoodsStore() {
  const data = [
    {
      image: img1,
      name: "Acid-resistant Bricks",
      _id: "645cbe78-b498-4a49-b3ad-981188889253",
      description1:
        "Resistant to aggressive environments and mechanical impact",
      description2: "Chemical and heat resistant",
      description3:
        "It has an average compressive strength of approximately 23,000 PSI",
      description4: "Used to cover surfaces subject to heavy loads.",
      link: "/materials/acid-resistant",
    },
    {
      image: img2,
      name: "Acid-resistant Tile",
      _id: "382d8c1b-e38c-48d6-b066-ab97e673d66e",
      description1:
        "Suitable for flooring applications in food and petrochemical plants where they are exposed to strong acids impact",
      description2:
        "Resistant to acids, alkalis and other aggressive substances.",
      description3: "Matte structure, non-slip and wear-resistant",
      description4: "Resistance to high temperatures and no deformation",
      link: "/materials/acid-resistant",
    },
    {
      image: img3,
      name: "Acid-resistant Powder",
      _id: "322d8c1a-e38a-48d6-b062-ab97e333d63a",
      description1:
        "It is a perfect component to make different acid-resistant mixtures like mastics, mortars and concretes",
      description2:
        "It used in chemically active media like galvanic and pickling baths, floors of chemicals plants, fume ducts and so on",
      description3:
        "It use the mortar as glue for acid-resistant tiles or bricks and for float work",
      link: "/materials/acid-resistant",
    },
    {
      image: img4,
      name: "Putties and grouting Compounds",
      _id: "322d8c1a-e38a-48d6-b062-ab97e673d63e",
      description1:
        "it is utilized to fill the gap in concrete cracks and voids in soil or rock",
      description2:
        "Used for grout stabilizes the soil directly in the weak zone",
      link: "/materials/acid-resistant",
    },
    {
      image: img5,
      name: "Refractory Brick",
      _id: "645cbe78-b498-4a49-b3ad-981188889253",
      description1:
        "it is a block of ceramic material that can withstand high temperatures, chemical environments and mechanical stress",
      description2:
        "It serve as linings for furnaces, reactors, boilers and other high-temperature equipment",
      link: "/materials/fire-resistant",
    },
    {
      image: img6,
      name: "Fireproof Tile",
      _id: "645cbe78-b498-4a49-b3ad-981188489341",
      description1:
        "It can survive temperatures up to 1100 degrees, is shockproof and resistant to temperature changes",
      description2: "It does not slip and has a significant thickness",
      description3:
        "It is formed under conditions of enormous thermal loads and high pressure.",
      link: "/materials/fire-resistant",
    },
    {
      image: img7,
      name: "Fire resistant compounds",
      _id: "645cbe78-b498-4a49-b3ad-983588489341",
      description1:
        "Provide protection from high temperatures and resistance to aggressive conditions",
      description2:
        "It is distinguished by their thermal insulation properties and resistance to high-temperature effects",
      description3:
        "Provide reliable protection against fire and thermal effects, and also have good adhesion and strength",
      link: "/materials/fire-resistant",
    },
    {
      image: img8,
      name: "Rubber sheets for steel structures protection",
      _id: "645cbe78-b498-4a49-b3ad-983588489341",
      description1:
        "It serves to protect steel building elements exposed to chemical attack",
      description2:
        "It used to protect steel and concrete structures from corrosion",
      link: "/materials/rubber-products",
    },
    {
      image: img9,
      name: "Rubber mixtures for gumming chemical equipment",
      _id: "645cbe78-b498-4a49-b3ad-983588489341",
      description1:
        "It used for working with chemical equipment and are also widely used in chlorine production",
      description2: "It is resistant to oils and various types of fuel",
      link: "/materials/rubber-products",
    },
    {
      image: img10,
      name: "Pulley lagging rubber linings",
      _id: "382d8c1b-e38c-48d6-b066-ab97e673d43a",
      description1:
        "Flexible rubber segment connection allows the slats to be bent in the middle, allowing for easy bolting onto the rounded surface of the drum",
      description2:
        "It consists of a flexible rubber base and ceramic inserts with a surface covered with protruding pimples",
      description3:
        "It improves the adhesion coefficient and centers the belt, and prevents sticking thanks to the self-cleaning profile",
      link: "/materials/rubber-products",
    },
    {
      image: img11,
      name: "Stone wool based insulation materials",
      _id: "645cbe78-b498-4a49-b3ad-981188889573",
      description1:
        "Is is distinguished by their environmentally friendly composition, durability and fire resistance",
      description2: "Melting point reaches up to 1000° C",
      description3:
        "Thermal conductivity values range from 0.04 to 0.05 W/(m*K)",
      description4:
        "Vapor permeability in the range from 0.25 to 0.3 mg/(m•h•Pa)",
      link: "/materials/thermal-insulation",
    },
    {
      image: img12,
      name: "Fiberglass based insulation materials",
      _id: "645cbe78-b498-4a49-c3ad-431188889573",
      description1:
        "Non-combustible mineral heat and sound insulation, intended for use in frame wall and partition structures",
      description2:
        "It is used to maintain a comfortable microclimate in the room, quartz insulation has one of the best indicators",
      description3:
        "This material does not crumble, does not break, does not fall apart, regains its shape and easily rises even from a compressed state",
      link: "/materials/thermal-insulation",
    },
    {
      image: img13,
      name: "Insulation based on foamed polyethylene",
      _id: "645cbe77-c498-4a49-c3ad-436148339573",
      description1:
        "It is used for thermal insulation of door and window openings, ventilation and chimney systems",
      description2: "It combines low thermal conductivity and water resistance",
      description3:
        "The product's special feature is heat-reflecting layers that are applied to one or both sides of the insulation, which ensures maximum heat retention in the room",
      link: "/materials/thermal-insulation",
    },
    {
      image: img14,
      name: "Aerogel",
      _id: "645cbe77-c498-1b49-d3ad-436148339573",
      description1:
        "During operation, the thermal conductivity coefficient does not change, for example, due to moisture or aging",
      description2:
        "It reliably protect building structures from heat loss, effectively remove water vapor",
      description3:
        "Aerogel is based on natural quartz powder, the use of which is safe for people and the environment",
      link: "/materials/thermal-insulation",
    },
    {
      image: img15,
      name: "Polyethylene plastic panels",
      _id: "132cbe77-c498-1b49-d3ad-436148339573",
      description1: "Heat resistance and frost resistance",
      description2: "Good chemical stability",
      description3: "High rigidity and impact resistance",
      description4:
        "This material can withstand the effects of most acids, alkalis and organic solutions",
      link: "/materials/plastic-panels",
    },
    {
      image: img16,
      name: "Polypropylene panels",
      _id: "132cbe77-c498-1b49-d3ad-436148354295",
      description1:
        "It durable and reliable even when used in aggressive environments",
      description2:
        "The hygienic nature of the panels allows them to be used in the food industry and medicine",
      description3:
        "It provides additional heat and sound insulation, increase fire resistance and resistance to aggressive atmospheric factors",
      link: "/materials/plastic-panels",
    },
    {
      image: img17,
      name: "Chemical additives for concrete",
      _id: "132cbe77-c498-1b49-d3ad-436148343855",
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
        <h2 className={styles.title}>Our Products</h2>
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
                  <h3 className={styles.subtitle}>{item.name}</h3>
                  <p className={styles.text}>{item.description1}</p>
                  <p className={styles.text}>{item.description2}</p>
                  <p className={styles.text}>{item.description3}</p>
                  <p className={styles.text}>{item.description4}</p>
                  <p className={styles.text}>{item.description5}</p>
                  <p className={styles.text}>{item.description6}</p>
                  <p className={styles.price}>{item.price}</p>
                  <Link className={styles.button} href={item.link}>
                    Read more
                  </Link>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}
