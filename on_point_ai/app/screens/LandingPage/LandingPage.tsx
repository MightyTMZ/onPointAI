import "./LandingPage.css";
// import {
  // testimonials,
  // ourOfferings,
  // ourTargetAudience,
// } from "./LandingPageData";
import PricingModel from "./LandingPageSections/PricingModel";
import TargetAudience from "./LandingPageSections/TargetAudience";
import WhatWeHelp from "./LandingPageSections/WhatWeHelp";
import WhyOnPoint from "./LandingPageSections/WhyOnPoint";
// import Image from "next/image";

const LandingPage = () => {
  {
    /*const heroBackgrounds = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [currentHeroBackground, setCurrentHeroBackground] = useState(0);
  const secondsBetweenImages = 0.5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroBackground(
        (prevBackground: number) =>
          (prevBackground + 1) % heroBackgrounds.length
      );
    }, secondsBetweenImages * 1000);

    return () => clearInterval(interval);
  }, []); */
  }

  return (
    <>
      <div className="">
        {/* Hero section */}
        <section
          id="hero"
          className="hero-section d-flex align-items-center text-light"
          style={{
            // backgroundImage: `url(${heroBackgrounds[currentHeroBackground]})`,
            backgroundColor: "#000",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div className="container text-center">
            {/* <img
              src={OmniwaveNexus}
              alt="Omniwave Nexus Logo"
              height={150}
              className="mb-4"
            /> */}
            <div className="title-wrap">
              <h1
                className="display-4 poppins-bold glowing-text"
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                Supercharge Your life with AI - Simplified for You
              </h1>
            </div>
            <a
              href="https://calendly.com/tom-zhang-career"
              id="try-button1"
              className="btn btn-primary btn-lg mt-4 poppins"
            >
              BOOK A CONSULTATION
            </a>
            <a
              href="#about"
              id="try-button2"
              className="btn btn-primary btn-lg mt-4 poppins"
            >
              LEARN MORE
            </a>
          </div>
        </section>
        {/* Features section
        <section id="product-image">
          <div
            className="3d-model"
            style={{
              width: "auto",
              height: "400px",
              background: "grey",
            }}
          ></div>
        </section> */}
        <WhyOnPoint />
        <TargetAudience/>
        <WhatWeHelp />
        {/* Testimnonial section 

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
        </section>/*}
        
        {/* Pricing solutions section */}
        <PricingModel />
        {/* Contact us section 
        <section
          id="contact"
          className="contact-section py-5 bg-dark text-light"
        >
          <div className="container">
            <h2 className="text-center poppins-bold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </section>*/}
      </div>
    </>
  );
};

export default LandingPage;
