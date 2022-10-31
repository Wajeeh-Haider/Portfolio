import React from "react";
import NavigationDots from "../components/NavigationDots";

const AppWrapper = (Component, idName) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container `}>
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
