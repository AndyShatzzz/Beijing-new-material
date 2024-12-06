"use client";
import styles from "./about.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reactSlick.css";
import Image from "next/image";
import mainImage from "../images/mainImage.webp";
import mainImage2 from "../images/mainImage2.webp";
import mainImage3 from "../images/mainImage3.webp";

export default function About() {
  const arrData = [
    {
      img: mainImage,
      title:
        "Beijing New Materials Co., Ltd. - reliable protection of enterprises ",
      _id: "df710270-2db0-4345-bca5-cfe4bed46c74",
    },
    {
      img: mainImage2,
      title:
        "Production of a wide range of protective materials from aggressive environments for industrial enterprises",
      _id: "df710270-2db0-4345-bca5-cfe4bed46c70",
    },
    {
      img: mainImage3,
      title:
        "Beijing New Materials Co., Ltd. guarantees compliance with all modern world safety standards",
      _id: "514458a6-115b-4cc6-8b1a-3c5f28cc6273",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    className: "containerAbout",
    adaptiveHeight: true,
  };

  return (
    <section>
      <div className={styles.imageContainer}>
        <Slider {...settings}>
          {arrData.map((item) => (
            <>
              <Image
                key={item._id}
                className={styles.container}
                src={item.img}
                alt="Картинка"
              />
              <h1 className={styles.title}>{item.title}</h1>
            </>
          ))}
        </Slider>
      </div>
    </section>
  );
}
