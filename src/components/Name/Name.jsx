import React, { useEffect } from "react";
import classes from "./Name.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Name() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);
  return (
    <div data-aos="fade-right" className={classes.name}>
      <h2>You can make this website yours! </h2>
      <button className={classes.btn}>Make it now</button>
    </div>
  );
}

export default Name;
