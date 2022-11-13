import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrapper } from "../../Wrapper";
import ReactTooltip from "react-tooltip";

const Skills = () => {
  const [skills, setSkills] = React.useState([]);
  const [experience, setExperience] = React.useState([]);
  React.useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experiences"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        Skills & <span>experience</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skills, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item"
              key={index}
            >
              <div
                className="app__flex "
                style={{ backgroundColor: skills.bgColor }}
              >
                <img src={urlFor(skills.icon)} alt={skills.name} />
              </div>
              <p className="p-text">{skills.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experience.map((experience, index) => (
            <motion.div className="app__skills-exp-item" key={index}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <div key={index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrapper(Skills, "skills");
