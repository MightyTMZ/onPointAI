import React from "react";

const WhyOnPoint = () => {
  return (
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
              Why Choose <span style={{ color: "#FFA500" }}>OnPoint AI</span>?
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
              . With over 3 years of hands-on experience using cutting-edge AI
              tools, I’m here to make your life more efficient and productive.
              Unlike tutorials that skim the surface, I provide tailored,
              real-world solutions to help you harness AI for personal or
              business success.
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
                  <strong>Mastery of Advanced Tools:</strong> Skilled in ChatGPT
                  (from 3.5 to 4v and APIs), Google Gemini, MicroGPT for
                  programming, and AI agents for autonomous automation.
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
                  <strong>Author Contributor:</strong> Contributed heavily to an
                  upcoming book on <strong><a href="https://ollama.com/">Ollama</a></strong> and prompt
                  engineering, set to release in April/May 2025. Translation? I know
                  how to create, tweak, tune, and MAKE and  AI <strong>actually</strong> work for you!
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
                  , revolutionizing networking, learning, communication, and personalization with immersive experiences and cutting-edge AI at a fraction of the cost.
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
              With my guidance, you’ll unlock the true potential of AI—without
              the frustration or guesswork. Let’s transform your vision into
              reality!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOnPoint;
