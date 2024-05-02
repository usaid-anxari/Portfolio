import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((item, index) => (
          <div key={index} className="services-format">
            <h1>{item.w_no}</h1>
            <h2>{item.w_name}</h2>
            <img src={item.w_img} alt="" />
            <p>{item.w_des}</p>
            <div className="mywork-btn">
              <a href={item.w_link} target="blank">
                Live Previwe
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  );
};

export default MyWork;
