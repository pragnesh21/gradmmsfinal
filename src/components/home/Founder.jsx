import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.webp";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Pragnesh Makwana</h3>

        <p>
          Hey, Everyone I am Pragnesh Makwana, the founder of Graduate Momos Wala.
          <br />
          Our aim is to create the most tasty Momos on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
