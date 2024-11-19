"use client";
import Image from "next/image";
import React from "react";
import Arash from "../TestimonialPics/arash_farahani.jpg";
import Aurick from "../TestimonialPics/aurick_anwar_mybro.jpg";
import Bardia from "../TestimonialPics/bardia.png";

const testimonials = [
  {
    id: 1,
    image: Arash,
    text: "Tom (OnPointAI) is a sharp, up-to-date tech enthusiast, and I’m sure he has valuable knowledge to share.",
    name: "Arash Farahani",
    role: "COO at Calmways",
  },
  {
    id: 2,
    image: Aurick,
    text: "I’ve taken courses before, but nothing compares to the one-on-one help I got from OnPoint AI. He is your own AI consultant on speed dial.",
    name: "Aurick A.",
    role: "High School Student",
  },
  {
    id: 3,
    image: Bardia,
    text: "Thanks to OnPoint AI, I can now use AI tools like a pro. Their patient and personalized approach is exactly what I needed!",
    name: "Bardia H.",
    role: "High School Student",
  },
];

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
          What People Say
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
                  src={testimonial.image}
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
                />
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
