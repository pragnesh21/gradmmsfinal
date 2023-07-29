import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Graduate Momos Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @graduatemomoswala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/pragnesh-makwana-6812651b4/">
          <AiFillLinkedin/>
        </a>
        <a href="https://www.instagram.com/21_2_pragnesh/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/pragnesh21">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
