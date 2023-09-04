import React, { useRef } from "react";
import "./HomepageResidencies.css";
import { Carousel } from "antd";
import { residencies } from "../../shared/homepageSlider";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const HomepageResidencies = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    draggable: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  const carouselRef = useRef(null); // Create a ref for the Carousel

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Call the next method on the Carousel
    }
  };
  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(); // Call the next method on the Carousel
    }
  };
  return (
    <div className="residency-wrapper">
      <div className="paddings innerWidth residency-container">
        <div className="residency-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <div className="residency-button">
          <button>
            <LeftOutlined onClick={prevSlide} />
          </button>
          <button>
            <RightOutlined onClick={nextSlide} />
          </button>
        </div>

        <Carousel ref={carouselRef} {...settings} afterChange={onChange}>
          {residencies.map((card, index) => (
            <div key={index} className="residency-card">
              <img src={card.image} alt="home" />

              <p className="secondaryText residency-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </p>

              <p className="primaryText">{card.name}</p>
              <p className="secondaryText">{card.detail}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
