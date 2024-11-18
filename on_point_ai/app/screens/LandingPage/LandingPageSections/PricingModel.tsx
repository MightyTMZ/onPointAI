import React from "react";

const PricingModel = () => {
  return (
    <section id="pricing" className="pricing-section py-5 bg-light poppins">
      <div className="container">
        <h2 className="text-center poppins-bold mb-4">
          Choose Your Consultation
        </h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontWeight: "bold",
                    color: "#CD7F32",
                  }}
                >
                  Bronze Package
                </h5>
                <p className="card-text">$29.99</p>
                <p className="card-text text-start">
                  30 minute short, focused session for clients who need quick AI
                  solutions or guidance on specific AI tools or integrations
                </p>
                <ul className="text-start">
                  <li>1 key AI question answered</li>
                  <li>
                    Personalized strategy advice for immediate AI application
                  </li>
                  <li>Suggestions for improving workflow with AI tools</li>
                  <li>Follow-up via email with session summary</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontWeight: "bold",
                    color: "#71706e",
                  }}
                >
                  Silver Package
                </h5>
                <p className="card-text">$49.99</p>
                <p className="card-text text-start">
                  1 hour session for clients looking for a deeper understanding
                  and customized AI strategy, this session offers more detailed
                  advice and hands-on help.
                </p>
                <ul className="text-start">
                  <li>In-depth analysis of existing AI workflows</li>
                  <li>
                    Tailored recommendations on integrating AI tools and
                    automation into your business or daily life
                  </li>
                  <li>Problem-solving for specific AI-related challenges</li>
                  <li>
                    Step-by-step guidance on integrating AI into current
                    processes
                  </li>
                  <li>
                    Follow-up email with resources and a recap of action steps
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontWeight: "bold",
                    color: "#b59410",
                  }}
                >
                  Gold Package
                </h5>
                <p className="card-text">$99.99</p>
                <p className="card-text text-start">
                  2 hour session. The ultimate consultation experience, this
                  package includes a comprehensive AI strategy tailored to the
                  client’s business or personal needs, as well as full support
                  in implementing solutions.
                </p>
                <ul className="text-start">
                  <li>Comprehensive audit of AI integration needs</li>
                  <li>
                    Personalized roadmap for AI adoption and scaling in your
                    business or workflow
                  </li>
                  <li>2 hours of real-time, hands-on implementation help</li>
                  <li>
                    Exclusive AI tools and techniques tailored to your business
                    goals
                  </li>
                  <li>
                    Post-session support via email for up to 1 week after the
                    consultation
                  </li>
                  <li>
                    Recurring follow-up check-in after 30 days to track progress
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  AI Tool Setup & Installation Assistance
                </h5>
                <p className="card-text">$149.99</p>
                <p className="card-text text-start">
                  For clients who need help setting up specific AI tools like
                  ChatGPT, Gemini, MicroGPT, local LLMs, retrieval augmented
                  generation (RAG), AI agents, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontWeight: "bold",
                    backgroundImage: "linear-gradient(90deg, #ff0000, #0000ff)", // Use background-image for gradient
                    WebkitBackgroundClip: "text", // Apply the gradient to the text
                    color: "transparent",
                  }}
                >
                  Ultimate Workflow Automation Installation
                </h5>
                <p className="card-text">$249.99</p>
                <p className="card-text text-start">
                  For clients looking to automate multiple tasks
                  and processes within their workflow. It includes the creation
                  of a custom AI agent or tool tailored to your specific needs,
                  designed to streamline operations, increase productivity, and
                  eliminate repetitive tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingModel;
