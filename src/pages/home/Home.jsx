import React from "react";
import AnimateProp from "../../components/animate/AnimateProp";
import Footer from "../../components/footer/Footer";
import ForYouProps from "../../components/foryou/ForYouProps";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="animatedProperty">
          <AnimateProp />
        </div>
        <div className="for-you-properties">
          <ForYouProps />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
