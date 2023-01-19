import React from "react";
import "./foryou.scss";
import { motion } from "framer-motion";

const ForYouProps = () => {
  const items = [
    {
      img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg",
      title: "A flat with 3 rooms",
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
    <div className="foryou">
      <h3 className="foryou-title">Properties that might intrest you</h3>
      <div className="foryou-card">
        {items.map((item) => (
          <div className="card-item">
            <img src={item.img} alt="" />
            <div className="card-details">
              <div className="details-top">
                <h2 className="card-title">
                  Perfect 2 bedroom 1 bathroom rooms
                </h2>
              </div>

              <div className="details-bottom">
                <span className="location">Kathmandu, Nepal</span>
                <span className="type">Flat</span>
                <span className="price">Rs 12000</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYouProps;
