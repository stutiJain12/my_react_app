import React from "react";
import "./ServicesSection.css";

const features = [
    {
      title: "Qualified Team",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
    },
    {
      title: "Same Day Availability",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
    },
    {
      title: "Outstanding Support",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
    },
    {
      title: "Eco-Friendly Materials",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
    },
  ];

const WhyChooseSection = () => {
    return(
      <div className="why-choose-section">
      <div className="why-choose-image">
        <img
          src="https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&w=600"
          alt="Why Choose"
        />
      </div>
      <div className="why-choose-content">
        <h2>Why Choose The Cleanic</h2>
        <div className="why-choose-features">
          {features.map((f, i) => (
            <div className="why-choose-feature" key={i}>
              <div className="why-choose-icon">✦</div>
              <div>
                <div className="why-choose-title">{f.title}</div>
                <div className="why-choose-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="why-choose-btn">Get to Know Us</button>
      </div>
    </div>
    )

}

export default WhyChooseSection;