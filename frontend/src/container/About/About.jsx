import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const About = () => {
  const profiles = [
    {
      title: "Web Development",
      description: "I am a Good Web Developer",
      imgUrl: images.About01,
    },
    {
      title: "Front End Development",
      description: "I am a Good Web Developer",
      imgUrl: images.About02,
    },
    {
      title: "Backent Development",
      description: "I am a Good Web Developer",
      imgUrl: images.About03,
    },
    {
      title: "Mern Stack Development",
      description: "I am a Good Web Developer",
      imgUrl: images.About04,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Great Development</span>
        <br />
        means
        <span> Great Bussiness</span>
      </h2>

      <div className="app__profiles">
        {profiles.map((item, index) => {
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
              <img src={item.imgUrl} alt="" />
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

export default About;
