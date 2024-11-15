import "./LandingPage.css";
import {
  testimonials,
  ourOfferings,
  ourTargetAudience,
} from "./LandingPageData";

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
              href="#about"
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
        <section
          id="about-us"
          style={{
            backgroundColor: "#fdfdf5",
            padding: "80px 20px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              {/* Left Side - Image */}
              {/*<div className="col-md-6 text-center">
                <Image
                  src={logo}
                  alt="About Us"
                  style={{
                    width: "90%",
                    borderRadius: "15px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  }}
                ></Image>
              </div>/*}

              {/* Right Side - Content */}
              <div className="col-md-6">
                <h2
                  className="poppins-bold"
                  style={{
                    color: "#333",
                    marginBottom: "20px",
                    fontWeight: "700",
                    fontSize: "2.5rem",
                  }}
                >
                  Why Choose{" "}
                  <span style={{ color: "#FFA500" }}>OnPoint AI</span>?
                </h2>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "18px",
                    color: "#555",
                    marginBottom: "30px",
                  }}
                >
                  Hi! I’m{" "}
                  <a
                    href="https://www.linkedin.com/in/tom-zhang-485341274/"
                    target="_blank"
                  >
                    Tom Zhang
                  </a>
                  . With over 3 years of hands-on experience using cutting-edge
                  AI tools, I’m here to make your life more efficient and
                  productive. Unlike tutorials that skim the surface, I provide
                  tailored, real-world solutions to help you harness AI for
                  personal or business success.
                </p>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{
                        color: "#FFA500",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    ></i>
                    <div>
                      <strong>Mastery of Advanced Tools:</strong> Skilled in
                      ChatGPT (from 3.5 to 4v and APIs), Google Gemini, MicroGPT
                      for programming, and AI agents for autonomous automation.
                    </div>
                  </li>
                  <li
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{
                        color: "#FFA500",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    ></i>
                    <div>
                      <strong>Certifications Holder:</strong> Holder of the Meta
                      Backend Development Professional Certificate, IBM AI
                      Engineering credentials, and many more.
                    </div>
                  </li>
                  <li
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{
                        color: "#FFA500",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    ></i>
                    <div>
                      <strong>Author Contributor:</strong> Contributed heavily
                      to an upcoming book on <strong>Ollama</strong> and prompt
                      engineering, set to release in Q2 2025. Translation? I
                      know how to make AI <strong>actually</strong> work for
                      you!
                    </div>
                  </li>
                  <li
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{
                        color: "#FFA500",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    ></i>
                    <div>
                      <strong>Real-World Impact:</strong> Founder of{" "}
                      <a
                        href="https://orbitview.vercel.app/"
                        style={{
                          color: "#FFA500",
                          textDecoration: "none",
                          fontWeight: "600",
                        }}
                      >
                        OrbitView
                      </a>
                      , revolutionizing global learning with AI-driven
                      solutions.
                    </div>
                  </li>
                </ul>
                <p
                  style={{
                    marginTop: "30px",
                    color: "#333",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  With my guidance, you’ll unlock the true potential of
                  AI—without the frustration or guesswork. Let’s transform your
                  vision into reality!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="features-section py-5 bg-light poppins"
        >
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
        {/* Target audience section */}
        <section
          id="audience"
          className="audience-section py-5 bg-dark text-light poppins"
        >
          <div className="container text-center">
            <h2 className="poppins-bold mb-4">Who do we serve?</h2>
            <div className="row">
              {ourTargetAudience.map((audience) => (
                <div className="col-md-4 mt-3" key={audience.id}>
                  <h3 className="target-audience-paragraph">
                    {audience.group}
                  </h3>
                  <p className="target-audience-paragraph ">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimnonial section */}

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
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
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
        {/*<section id="results" className="results-section py-5">
          <div className="container">
            <h2 className="text-center poppins-bold mb-4">
              See Omniwave Nexus in Action
            </h2>
            <div className="row text-center">
              <div className="col-md-6">
                <img
                  src="before-using.png"
                  alt="Before Omniwave Nexus"
                  className="img-fluid mb-4"
                />
                <h5>Before Using Omniwave Nexus</h5>{" "}
              </div>
              <div className="col-md-6">
                <img
                  src="after-using.png"
                  alt="After Omniwave Nexus"
                  className="img-fluid mb-4"
                />
                <h5>After Using Omniwave Nexus</h5>{" "}
              </div>
            </div>
          </div>
        </section> */}
        {/* Pricing solutions section */}
        <section id="pricing" className="pricing-section py-5 bg-light">
          <div className="container">
            <h2 className="text-center poppins-bold mb-4">Choose Your Plan</h2>
            <div className="row text-center">
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Free Plan</h5>
                    <p className="card-text">$0/month, 1 credit</p>
                    <a href="#subscribe" className="btn btn-outline-primary">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Premium Plan</h5>
                    <p className="card-text">$29.99/month, 25 credits</p>
                    <a href="#subscribe" className="btn btn-primary">
                      Subscribe Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">All-Star Plan</h5>
                    <p className="card-text">$99.99/month, 75 credits</p>
                    <a href="#subscribe" className="btn btn-outline-primary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            Leftover credits can be bought/sold in our credit system <br />
            Supports payment in cash & cryptocurrencies
          </div>
        </section>
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
