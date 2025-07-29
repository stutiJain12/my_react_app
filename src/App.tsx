// import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/PrivacySupport/FooterScreen/Footer';
import Services from './Components/PrivacySupport/ServiceScreen/Services';
import WhyChooseSection from './Components/PrivacySupport/ServiceScreen/WhyChooseSection';
// import About from './Components/PrivacySupport/About';
// import Contact from './Components/PrivacySupport/Contact';

function App() {
  // const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // useEffect(() => {
  //   function handleResize() {
  //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  //   }

  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Call it initially to set the size.

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  // console.log("WINDOWSIZE", windowSize);

  return (
    <div className="website-BG">
    <Home/>
    <Services/>
    <WhyChooseSection/>
    <img
        src="https://static.wixstatic.com/media/c837a6_c333bdc72fb24b2aac15fd8e1a3207cc~mv2.jpg/v1/fill/w_1920,h_975,al_c,q_85,enc_avif,quality_auto/c837a6_c333bdc72fb24b2aac15fd8e1a3207cc~mv2.jpg"
        alt="Section visual"
        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', maxHeight: '900px' }}
      />
    <Footer />
    {/* <About/> */}
    {/* <Contact/> */}
  </div>
  );
}

export default App;
