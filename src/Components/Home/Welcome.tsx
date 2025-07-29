import React, { useEffect, useState } from "react";
import "../../App.css";

const Welcome = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the size.

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("WINDOWSIZE", windowSize);

  return (
    <div className="welcome-section" id="home">
    <div className="welcome-overlay" />
    <div className="welcome-content">
      <h1>Start Teaching With LMStudy</h1>
      <p>With over 11000 customers, millions of users are using LMStudy</p>
      <div className="welcome-buttons">
        <button className="welcome-btn welcome-outline">Buy Theme</button>
        <button className="welcome-btn welcome-primary">Courses</button>
      </div>
    </div>
  </div>
    // <header className=" container homemasthead  font-face-gm" id="home">
    // <div className="d-flex flex-row justify-content-between">
    // <div className={windowSize.width > 576 ? "w-50" : "w-100"}>
    // </div>
    // </div>
    // </header>
  )

}
export default Welcome;