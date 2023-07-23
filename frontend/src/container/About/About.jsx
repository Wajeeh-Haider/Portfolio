import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrapper } from "../../Wrapper";

const About = () => {
  const [about, setAbout] = React.useState([]);

  React.useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that
        <span>Wajeeh</span>
        <br />
        means
        <span> Great Bussiness</span>
      </h2>

      <div className="app__profiles">
        {about.map((item, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.4,
                type: "tween",
              }}
              key={index}
              className="app__profile-item"
            >
              <img src={urlFor(about[index].image).url()} alt={about.image} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {item.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrapper(About, "about");
