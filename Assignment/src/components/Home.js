import React from "react";
import "./Home.css";
import Right from "./Right";
import img from '../Assest/download.png'
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="sub_left">
            <div>
            <img
                className="left_img"
                src={img}
              />
              {/* <img
                className="left_img"
                src="https://www.imagediamond.com/blog/wp-content/uploads/2022/02/Prabhas-wallpaper-feb-2022-19-scaled.jpg"
              /> */}
            </div>
            <div>
              <h2>David Token</h2>
              <h4>MID ARCHITECT</h4>
            </div>
            <div>
              <h5>ABOUT ME</h5>
              <p>
                Anyone who has worked in React would have faced this and if not
                then will face it definitely. Prop drilling is basically a
                situation when the same data is being sent at almost every level
              </p>
            </div>
            <div>
              <h6>INTERIOR DESIGN</h6>
              <div className="container1">
                <div className="skill html">  </div>
              </div>
              <h6>3D MODELING</h6>
              <div className="container1">
                <div className="skill html2">  </div>
              </div>
              <h6>PHOTOGRAPHY</h6>
              <div className="container1">
                <div className="skill html3">  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Home;
