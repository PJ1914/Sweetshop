import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const showSlide = (index) => {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, idx) => {
      slide.style.opacity = idx === index ? '1' : '0';
      slide.classList.toggle('active', idx === index);
    });
  };

  const nextSlide = () => {
    showSlide((currentSlide + 1) % 4);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
  };

  const prevSlide = () => {
    showSlide((currentSlide - 1 + 4) % 4);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
  };

  const handleLeftBoxHover = (hover) => {
    const leftSweets = document.querySelector('.left-box-sweets');
    leftSweets.style.opacity = hover ? '1' : '0';
  };

  const handleRightBoxHover = (hover) => {
    const rightSweets = document.querySelector('.right-box-sweets');
    rightSweets.style.opacity = hover ? '1' : '0';
  };

  return (
    <div>
      <nav>
        <div id="navbar">
          <div className="logo">
            <img src="assets/Vinayak-removebg-preview (1) 1.png" alt="" />
          </div>
          <div className="options">
            <input type="text" placeholder="Search...." id="search" />
            <a href="#">About us</a>
            <a href="#">Shop</a>
            <a href="#">
              <img src="assets/prefix__D_Header_Profile_Icon_3.png" alt="" />
            </a>
            <a href="#">
              <img src="assets/prefix__g4906.png" alt="" />
            </a>
            <a href="#">
              <img src="assets/prefix__D_Header_Cart_Icon_4.png" alt="" />
            </a>
          </div>
        </div>
      </nav>

      <div className="carousel">
        <div className="carousel-inner">
          <div className="carousel-item" style={{ opacity: currentSlide === 0 ? '1' : '0' }}>
            <img src="assets/image 3.png" alt="Image 1" />
          </div>
          <div className="carousel-item" style={{ opacity: currentSlide === 1 ? '1' : '0' }}>
            <img src="assets/image 4.png" alt="Image 2" />
          </div>
          <div className="carousel-item" style={{ opacity: currentSlide === 2 ? '1' : '0' }}>
            <img src="assets/image 3.png" alt="Image 3" />
          </div>
          <div className="carousel-item" style={{ opacity: currentSlide === 3 ? '1' : '0' }}>
            <img src="assets/image 4.png" alt="Image 4" />
          </div>
        </div>
      </div>

      <div className="border">
        <img src="assets/Rectangle 32.png" alt="Border Image" />
        <div
          className="inner-border left-box"
          onMouseEnter={() => handleLeftBoxHover(true)}
          onMouseLeave={() => handleLeftBoxHover(false)}
        >
          <img src="assets/Component 22.png" alt="Sweet 1" className="sweet-image" />
          <div className="left-box-sweets sweets hidden">
            <img src="assets/Property 1=Component 21.png" alt="Left Box Sweet 1" className="sweet" />
          </div>
        </div>
        <div
          className="inner-border right-box"
          onMouseEnter={() => handleRightBoxHover(true)}
          onMouseLeave={() => handleRightBoxHover(false)}
        >
          <img src="assets/Component 26.png" alt="Sweet 2" className="sweet-image" />
          <div className="right-box-sweets sweets hidden">
            <img src="assets/Property 1=Component 25.png" alt="Right Box Sweet 2" className="sweet" />
          </div>
        </div>
      </div>

      <div className="Foot">
        <img src="assets/Our Other Avenues.png" alt="Foot text" />
        <div className="inner-Foot">
          <a href="/">
            <img src="assets/Rectangle 63.png" alt="Avenue 1" className="Avenue-image 1" />
          </a>
          <a href="/">
            <img src="assets/Rectangle 62.png" alt="Avenue 2" className="Avenue-image 2" />
          </a>
          <a href="/">
            <img src="assets/Rectangle 64.png" alt="Avenue 3" className="Avenue-image 3" />
          </a>
        </div>
        <div className="detail-Foot">
          <img src="assets/Rectangle 59.png" alt="The border" className="detail-image" />
          <ul className="quick-links">
            <li>
              <a href="#">QUICK LINKS</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Store Locator</a>
            </li>
          </ul>
          <img src="assets/Group 3231.png" alt="Grouplogo" className="group-logo" />
          <ul className="address-img">
            <li>
              <a href="#">CONTACT INFORMATION</a>
            </li>
            <li>
              <a href="#">Address</a>
            </li>
            <li>
              <a href="#">Liberty Road, Opp TTD Temple</a>
            </li>
            <li>
              <a href="#">Himayatnagar</a>
            </li>
            <li>
              <a href="#">Hyderabad</a>
            </li>
            <li>
              <a href="#">Call : 9959334007</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
