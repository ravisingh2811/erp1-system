import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  return (
    <div>
      <p className="social-container" style={{}}>
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
          style={{ color: "red", margin: 10 + "px" }}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
          style={{ color: "blue", margin: 10 + "px" }}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          style={{ color: "red", margin: 10 + "px" }}
          href="http://www.instagram.com/larnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          style={{ color: "black", margin: 10 + "px" }}
          href="https://github.com/ravisingh2811/"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </p>
    </div>
  );
}
