import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedinIn,
  faLinkedin,
  faLine,
  faCodiepie,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  return (
    <div>
      <p className="social-container" style={{}}>
      <a target="_blank"
          style={{margin: 10 + "px" }}
          href="https://github.com/ravisingh2811/"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a target="_blank"
          href="http://www.youtube.com/@stacktrace5090"
          className="youtube social"
          style={{ color: "red", margin: 10 + "px" }}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
        target="_blank"
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
          style={{color: "blue", margin: 10 + "px" }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
        target="_blank"
          style={{ color: "red", margin: 10 + "px" }}
          href="https://www.instagram.com/mr.ravisingh28/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        
      </p>
    </div>
  );
}
