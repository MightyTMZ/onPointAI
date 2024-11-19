import React from "react";
import { testimonials } from "../LandingPageData";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "80px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container text-center">
        <h2
          className="poppins-bold"
          style={{
            color: "#333",
            marginBottom: "50px",
            fontWeight: "700",
            fontSize: "2.5rem",
          }}
        >
          What Our Clients Say
        </h2>
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col-md-4" key={testimonial.id}>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  marginBottom: "20px",
                }}
              >
                <Image
                  URL={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                  width={80}
                  height={80}
                ></Image>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#555",
                    fontStyle: "italic",
                    lineHeight: "1.8",
                  }}
                >
                  "{testimonial.text}"
                </p>
                <h5
                  style={{
                    fontSize: "18px",
                    color: "#333",
                    fontWeight: "600",
                    marginTop: "15px",
                  }}
                >
                  {testimonial.name}
                </h5>
                <span style={{ color: "#888", fontSize: "14px" }}>
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
