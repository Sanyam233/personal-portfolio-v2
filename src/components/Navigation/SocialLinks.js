import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import * as socialLinks from "../../json/external-links.json";

const SocialLinks = () => (
  <div className="social-links">
    <a href={socialLinks.GITHUB} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="link" icon={faGithub} />
    </a>
    <a href={socialLinks.LINKEDIN} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="link" icon={faLinkedin} />
    </a>
    <a href={socialLinks.INSTAGRAM} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="link" icon={faInstagram} />
    </a>
  </div>
);

export default SocialLinks;
