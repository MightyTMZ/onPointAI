import React from "react";
import { ourOfferings } from "../LandingPageData";

const WhatWeHelp = () => {
  return (
    <section id="features" className="features-section py-5 bg-light poppins">
      <div className="container">
        <h2 className="text-center poppins-bold mb-4">
          What we help you with...
        </h2>

        <div className="row">
          {ourOfferings.map((offering) => (
            <div className="col-lg-4 text-center" key={offering.id}>
              <i className="fa-solid fa-circle-check"></i>
              <h3>{offering.heading}</h3>
              <p className="landing-page-para">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHelp;
