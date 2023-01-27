import React from "react";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <div className="single-wrapper">
        <div className="single-left">
          <div className="img-container">
            <img
              src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg"
              alt=""
              className="single-img"
            />
            <img
              src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg"
              alt=""
              className="single-img"
            />
            <img
              src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg"
              alt=""
              className="single-img"
            />
            <img
              src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg"
              alt=""
              className="single-img"
            />
          </div>
          <div className="nav-container">
            <div className="img-nav active"></div>
            <div className="img-nav"></div>
            <div className="img-nav"></div>
            <div className="img-nav"></div>
          </div>
        </div>
        <div className="single-right">
          <h3 className="single-title">
            Perfect 1 bedroom 1 bathroom and 1 Kitchen room
          </h3>
          <p className="single-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
            nobis officiis ullam amet possimus, ipsam nam quae nemo fugiat
            nostrum est dolorum cum laudantium officia enim, illum iusto cumque
            aspernatur harum incidunt omnis iste. Eius quos sapiente magnam et
            fugit cupiditate veritatis inventore recusandae provident laboriosam
            quidem reprehenderit adipisci nostrum officia perspiciatis fugiat
            officiis quia, consequatur ratione. Quibusdam, minima fugiat.
          </p>
          <ul className="single-keypoints">
            <li>nice</li>
            <li>24 hr water</li>
            <li>Free wifi</li>
            <li>Attached toilet bathroom</li>
          </ul>
          <button className="book-now single-btn">Book</button>
          <button className="req-visit single-btn">Request house visit</button>
        </div>
      </div>
    </div>
  );
};

export default Single;
