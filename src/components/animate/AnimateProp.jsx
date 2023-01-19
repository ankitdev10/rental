import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";
import "./animate.scss";

const AnimateProp = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  //   const [sliderNumberL, setSliderNumberL] = useState(0);
  const [direction, setDirection] = useState("");

  // MAKE SURE TO KEEP SEVEN ITEMS ONLY HERE
  const handleClick = (type) => {
    if (type === "r") {
      setDirection("r");
      setSliderNumber((prev) => prev + 1);
      sliderNumber === 3 && setSliderNumber(0);
    }
    if (type === "l") {
      setSliderNumber((prev) => prev - 1);
      sliderNumber === 0 && setSliderNumber(3);
    }
  };

  const items = [
    {
      img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
      title: "A flat with 3 rooms ",
      location: "Kathmanduu",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
      title: "A flat with 3 rooms",
      location: "bhaktapur",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
      title: "A flat with 3 rooms",
      location: "sangha",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
      title: "A flat with 3 rooms",
      location: "banehsowr",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
      title: "A flat with 3 rooms",
      location: "jkp",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
      title: "A flat with 3 rooms",
      location: "india",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
      title: "A flat with 3 rooms",
      location: "pakistan",
    },
  ];
  return (
    <div className="animate">
      <ArrowBackIos onClick={() => handleClick("l")} className="icon l" />
      <div className="card-container">
        {items.map((item, index) => (
          <div
            style={{
              transform:
                direction === "r"
                  ? `translate(${sliderNumber * -230}px)`
                  : `translate(${sliderNumber * 230}px)`,
              transition: "all 1s ease",
            }}
            key={index}
            className="card"
          >
            <div className="animate-top">
              <img src={item.img} alt="" className="animate-img" />
            </div>
            <div className="animate-bottom">
              <div className="property-title">{item.title}</div>
              <div className="property-location">{item.location}</div>
            </div>
          </div>
        ))}
      </div>
      <ArrowForwardIos onClick={() => handleClick("r")} className="icon r" />
    </div>
  );
};

export default AnimateProp;
