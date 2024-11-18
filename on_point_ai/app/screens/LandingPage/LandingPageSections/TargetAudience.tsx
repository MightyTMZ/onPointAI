import React from "react";
import { ourTargetAudience } from "../LandingPageData";

const TargetAudience = () => {
  return (
    <section
      id="audience"
      className="audience-section py-5 bg-dark text-light poppins"
    >
      <div className="container text-center">
        <h2 className="poppins-bold mb-4">Who do we serve?</h2>
        <div className="row">
          {ourTargetAudience.map((audience) => (
            <div className="col-md-4 mt-3" key={audience.id}>
              <h3 className="target-audience-paragraph">{audience.group}</h3>
              <p className="target-audience-paragraph ">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
