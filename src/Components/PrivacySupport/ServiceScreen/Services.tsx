
import React from "react";
import "./ServicesSection.css";

const services = [
    {
      title: "Move In/Move Out",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&w=600", // Replace with your image
    },
    {
      title: "Deep Cleaning",
      image: "https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&w=600", // Replace with your image
    },
    {
      title: "Laundry",
      image: "https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&w=600", // Replace with your image
    },
  ];

const Services = () => {
    return (
    <div className="services-section" id="services">
    <h2 className="services-title">For Anything You Need</h2>
    <p className="services-subtitle">Our stellar services</p>
    <div className="services-cards">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <img src={service.image} alt={service.title} />
          <div className="service-label">{service.title}</div>
        </div>
      ))}
    </div>
    <button className="see-all-btn">See All Services</button>
  </div>
    )
}

export default Services;