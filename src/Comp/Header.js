import React from "react";
import "./Header.css";
import img from "../assets/hero-img.png";

export default function Header() {
  return (
    <>
      <div className="Main">
        <h1>Welcome Back,Chris.</h1>
        <p>
          Let's take a look at your day today! You have <b>0 patients</b>{" "}
          scheduled and{" "}
          <b>
            0 new <br></br>patients{" "}
          </b>
          .you are scheduled to produce <b>$0.00</b>. You need to produce{" "}
          <b>$0.00 </b>stay on <br></br> track this month.
          <span>View Huddle</span>
        </p>
        <div className="Hero">
          <img src={img} alt="hero-img" />
        </div>
        <div className="parent">
          <div className="box1">
            Create a Custom<br></br>Campaign
          </div>
          <div className="box2">work on My Tasks</div>
          <div className="box3">
            Find Revenue <br></br>Opportunities
          </div>
        </div>
      </div>
    </>
  );
}
