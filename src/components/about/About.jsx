import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Graduate Momos Wala</h4>
          <p>
          We are Graduate Momos Wala. The place for most tasty momos on the
            enitre earth.
          </p>

          <p>
          Explore the various type of food and momos. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Pragnesh Makwana</h3>
            </div>

            <p>
              I am Pragnesh Makwana, the founder of Graduate Momos Wala. Affiliated to
              Good Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
