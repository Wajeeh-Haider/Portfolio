import React from "react";
import { images } from "../../constants";
import "./Navbar.scss";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="navbar__logo">
          <img src={images.logo} alt="logo" />
        </div>

        <ul className="navbar__links">
          {["home", "skills", "about", "testimonials", "contact", "work"].map(
            (item) => {
              return (
                <li key={`item${item}`} className="app__flex p-text">
                  <div />
                  <a href={`#${item}`}>{item}</a>
                </li>
              );
            }
          )}
        </ul>

        <div className="app__navbar-menu">
          <HiMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "home",
                  "skills",
                  "about",
                  "testimonials",
                  "contact",
                  "work",
                ].map((item) => {
                  return (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
