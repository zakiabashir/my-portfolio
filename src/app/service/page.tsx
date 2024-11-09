"use client";
import "./service.css"; 
import { useState, useEffect } from "react";

// Define the Service type
type Service = {
  icon: string;
  title: string;
  description: string;
};

function Service() {
  const services: Service[] = [
    {
      icon: "🚗",
      title: "New & Used Car Sales",
      description: "Offering a wide selection of new and pre-owned vehicles to meet every need and budget.",
    },
    {
      icon: "🛠️",
      title: "Car Repair & Maintenance",
      description: "Providing reliable repair and maintenance services to keep your vehicle running smoothly.",
    },
    {
      icon: "🧼",
      title: "Professional Detailing",
      description: "Enhance your car’s appearance with our top-notch detailing services.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [slideSpeed, setSlideSpeed] = useState(3000); // Default 3 seconds

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, slideSpeed);

    return () => clearInterval(interval); 
  }, [slideSpeed, services.length]);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const openModal = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const changeSlideSpeed = (speed: number) => setSlideSpeed(speed);

  return (
    <section id="service" className="servicesSection">
      <h2 className="subheading">Exceptional Services for Your Car Needs</h2>
      <h3 className="heading">Our Automotive Services</h3>
      <div className="sliderControls">
        <button className="prevButton" onClick={handlePrevSlide}>‹</button>
        <button className="nextButton" onClick={handleNextSlide}>›</button>
      </div>

      <div className="servicesSlider">
        {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="iconCircle">
              <span className="icon">{service.icon}</span>
            </div>
            <h4 className="title">{service.title}</h4>
            <p className="description">{service.description}</p>
            <button className="readMore" onClick={() => openModal(service)}>Learn More</button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedService && (
        <div className="modal">
          <div className="modalContent">
            <h4>{selectedService.title}</h4>
            <p>{selectedService.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <div className="speedControl">
        <label>Slide Speed:</label>
        <button onClick={() => changeSlideSpeed(2000)}>Fast</button>
        <button onClick={() => changeSlideSpeed(3000)}>Normal</button>
        <button onClick={() => changeSlideSpeed(5000)}>Slow</button>
      </div>
    </section>
  );
}

export default Service;
