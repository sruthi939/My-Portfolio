import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { MdArrowForward, MdMail } from "react-icons/md";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <div className="landing-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">AVAILABLE FOR FREELANCE & FULL-TIME</span>
            </div>
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>

          <div className="landing-info">
            <h3>A</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">UI/UX Designer</div>
              <div className="landing-h2-2">Creative Architect</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Full-Stack Developer</div>
              <div className="landing-h2-info-1">Frontend Engineer</div>
            </h2>

            <div className="landing-actions">
              <a href="#work" className="landing-btn landing-btn-primary" data-cursor="disable">
                View Projects <MdArrowForward />
              </a>
              <a href="#contact" className="landing-btn landing-btn-secondary" data-cursor="disable">
                Contact Me <MdMail />
              </a>
            </div>
          </div>

          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <div className="mobile-photo-frame">
              <img
                src="/images/mypicnbg.png"
                alt={config.developer.fullName}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
