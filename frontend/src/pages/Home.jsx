import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Skillset from "../components/Skillset";

<script src="finisher-header.es5.min.js" type="text/javascript"></script>

 

/* Placeholder texts for chat bot questions */
const placeholderTexts = [
    "What programming languages does Akshay know?",
    "How is Akshay doing in Fantasy Football?",
    "Can Akshay develop AI applications from scratch?",
    "What companies has Akshay worked for?",
    "Where did Akshay study Computer Science?",
    "What motivates Akshay?",
    "Is Akshay building any AI/ML projects right now?",
    "Has Akshay worked with large language models (LLMs)?",
    "How can I get in touch with Akshay?",
    "What projects has Akshay completed using Game Engines?",
    "Does Akshay have experience with cloud platforms like AWS?",
    "Where can I view Akshay’s resume?",
    "How did Akshay integrate Computer Vision in professional projects?",
    "What are Akshay’s long-term career goals?",
    "What AI/ML tools has Akshay worked with?",
];

const slides = [
  {
    title: 'Tromso 2024',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    background: '/slider_images/Tromso_2024.png', 
  },
  {
    title: 'Iceland 2024',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    background: '/slider_images/Iceland_2024.png', 
  },
  {
    title: 'Tromso 2025',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    background: '/slider_images/Tromso_2025.png',
  },
  {
    title: 'PlaceHolder',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    background: '/slider_images/placeholder.png',
  },
  {
    title: 'Tromso 2024',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    background: '/slider_images/Tromso_2024.png', 
  },
  {
    title: 'Iceland 2024',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    background: '/slider_images/Iceland_2024.png', 
  },
  {
    title: 'Tromso 2024',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    background: '/slider_images/Tromso_2024.png', 
  },
  {
    title: 'Iceland 2024',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    background: '/slider_images/Iceland_2024.png', 
  },
  {
    title: 'Tromso 2025',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    background: '/slider_images/Tromso_2025.png',
  },
];



const Home = () => {

  /* This in the placeholder value for the chat bot text (it animates random questions) */
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* For image and flipping it */
  const [isAnimatingImage, setIsAnimatingImage] = useState(false);

  /* For cursor */
  const [positionCursor, setPositionCursor] = useState({ x: 0, y: 0 });
  const [isMovingCursor, setIsMovingCursor] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("white");


  /* For images of the chat bot */ 
  const images = ["/AkshayAnimeImage.png", "/AkshayKapurPhoto.jpg"];
  const [indexImage, setIndexImage] = useState(0);

  /* For the bluf box */
  const headerRef = useRef(null);

  /*For moving line */
  const [lineVisible, setLineVisible] = useState(false);

  /* For chalk images */ 
  const [isVisible, setIsVisible] = useState(false);
  const [isBlufVisible, setIsBlufVisible] = useState(false);

  /* For Carousel */
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef(null);


  const handleClickImage = () => {
    setIsAnimatingImage(true);

    setTimeout(() =>  {
        setIndexImage((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimatingImage(false);
    }, 600);
    
  };

  /*For the image of bluf */
  useEffect(() => {
    if (window.FinisherHeader && headerRef.current) {
      new window.FinisherHeader({
        // IMPORTANT: Tell it where to attach
        element: headerRef.current,

        count: 100,
        size: { min: 2, max: 8, pulse: 0 },
        speed: {
          x: { min: 0, max: 0.4 },
          y: { min: 0, max: 0.6 }
        },
        colors: {
          background: "#191919",
          particles: ["#fbfcca", "#d7f3fe", "#242420"]
        },
        blending: "overlay",
        opacity: { center: .5, edge: 0 },
        skew: 0,
        shapes: ["c"]
      });
    }
  }, []);
  

  /* For the animated line */ 
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = 300;
      if (window.scrollY > triggerHeight && !lineVisible) {
        setLineVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lineVisible]); 

  /* For the new stuff visibility label */ 
  useEffect(() => {
    // Show on load
    setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY <= 15) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (window.scrollY >= 1000) {
        setIsBlufVisible(true);
      } else {
        setIsBlufVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Color of cursor change */
  useEffect(() => {
    const handleMouseMove = (e) => {
        const hoveredElement = e.target;
        const isInteractive = ["A", "BUTTON", "INPUT", "SWIPER-SLIDE"].includes(hoveredElement.tagName);
        
        const bgColor = e.backgroundColor;

    // Convert white backgrounds to black cursor
    setCursorColor(bgColor === "rgba(255, 255, 255, 0.87)" ? "black" : "white");
      
      setIsHovering(isInteractive); // True if hovering an interactive element
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /* For moving the mouse */
  useEffect(() => {
    const moveCursor = (e) => {
      setPositionCursor({ x: e.clientX, y: e.clientY });
      setIsMovingCursor(true);
    };
  
    window.addEventListener("mousemove", moveCursor);
    
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  /*For the placeholder text to update */
  useEffect(() => {
    const interval = setInterval(() => {
      let currentText = placeholderTexts[index];

      if (!isDeleting) {
        setPlaceholder(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setPlaceholder(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
        }
      }
    }, 100);

    return () => {
        clearInterval(interval);
    };
  }, [charIndex, isDeleting, index]);

  

  /* Carsousel stuff */
const [directionImageSlide, setDirectionImageSlide] = useState('');
const [isAnimatingImageSlider, setIsAnimatingSlider] = useState(false);

const slideDuration = 300; 

const goNextImage = () => {
    if (isAnimatingImageSlider) return;
    setDirectionImageSlide('right');
    setIsAnimatingImage(true);
    setCurrentIndexImageSlider((prevIndexImageSlider) => (prevIndexImageSlider + 1) % totalImageSlider);
    setTimeout(() => setIsAnimatingImageSlider(false), slideDuration);
};

const goPrevImage = () => {
    if (isAnimatingImageSlider) return;
    setDirectionImageSlide('left');
    setIsAnimatingImage(true);
    setCurrentIndexImageSlider((prevIndexImageSlider) => (prevIndexImageSlider - 1 + totalImageSlider) % totalImageSlider);
    setTimeout(() => setIsAnimatingImageSlider(false), slideDuration);
};

  return (
    
    <div style={{display: "flex", flexDirection: "column"}}>
      {/* adding custom cursor */ }
        {isMovingCursor && (
            <div 
                className={`circle-cursor ${isHovering ? "hovering" : ""}`}
                style={{ left: `${positionCursor.x}px`, top: `${positionCursor.y}px` }}
            />
        )}

        {/* the new stuff picture */ }
        <div>
          <img
            src="/new_stuff_arrow.png"
            alt="newStuff"
            className={`fade-in ${isVisible ? "visible" : ""}`}
            style={{ width: "5%", height: "5%", marginTop: "4%", marginLeft: "16%"}}
            />
        </div>
        {/*Chat bot center*/}
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "3%"}}>
                <div>
                    <h1>Hey, I'm Akshay!</h1>
                    <p>I build cool things with code.</p>
                    <div>
                      {/* Animated Text Box */}
                      <input
                          type="text"
                          placeholder={placeholder}
                          value={inputValue}
                          onChange={
                                  (e) => {
                                      setInputValue(e.target.value);
                                      setIsMovingCursor(false);
                                  }
                              }
                          style={{
                              width: "600px",
                              height: "30px",
                              borderRadius: "15px",
                              fontSize: "18px",
                              padding: "12px",
                              border: "2px solid gray",
                              backgroundColor: "#242424",
                              }}
                      />
                  </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "7%" }}>
                  <img
                    src="/scroll_to_explore.png"
                    alt="newStuff"
                    className={`fade-in ${isVisible ? "visible" : ""}`}
                    style={{ width: "150px", height: "120px"}}
                    />
                </div>
                </div>



                {/* Right Side - Image */}
                <div className="akshay-image-container flex-shrink-0">
                        <img
                        src={images[indexImage]}
                        alt="Akshay"
                        className={isAnimatingImage ? "spin-transition" : ""}
                        onClick={handleClickImage}
                        style={{ width: "33rem", height: "47rem", marginLeft: "auto"}}
                        />
                </div>
                
            </div>
        </div>

        <svg viewBox="0 0 1440 320" style={{ display: 'block' }}>
          <path
            fill="#191919"
            d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,170.7C672,171,768,181,864,176C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        
        {/* This is the bluf box */}
        <div className="aboutDiv">
          <div className={`fade-in ${isBlufVisible ? "visible" : ""}`} style= {{display: "flex", justifyContent: "center"}}>
            <div className="bluf-box">
              <div ref={headerRef} className= "finisher-header">
                <div style={{justifyItems: "flex-start"}}>
                  <h1 className="tech-font">Hello World</h1>
                  <div className="animated-line-container">
                    <div className={`animated-line ${lineVisible ? "visible" : ""}`} />
                  </div>
                    <p>I'm a software engineer with hands-on experience in computer vision, AR/VR backend development, and game development, passionate about building immersive, meaningful technologies that push boundaries. I'm also deeply interested in AI/ML, natural language processing, and the evolving world of large language models. I’m driven by a love for learning and a strong desire to excel in everything I pursue, always seeking out opportunities to grow, create, and make a positive impact through innovative tech. Whether it's enhancing real-world interaction through virtual environments or unlocking new intelligence from data, I aim to be at the forefront of change. Outside the code, I enjoy growing plants, playing sports, and exploring the world—constantly inspired by new experiences and perspectives.</p>
                </div>          
                  
              </div>
            </div>

          
          </div>

          {/* Slider Carousel */}
          <div className={`fade-in ${isBlufVisible ? "visible" : ""}`} style={{marginTop: "2rem", display:"flex", justifyContent: "center", width: "100%"}}>
              <div style={{display:"flex", justifyContent: "center", width: "60%"}}>
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  effect={'coverflow'}
                  grabCursor={false}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  spaceBetween={30}
                  loop={true}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    
                  }}
                  initialSlide={1}
                  allowTouchMove={false}
                  coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  
                
                {slides.map((info, index) => (
                  
                    <SwiperSlide
                      onClick={goNextImage} 
                      onMouseEnter={() => {
                        if (activeIndex === index) {
                          setIsHovered(true);
                          console.log("Hovering over the slide");
                        }
                        
                      }}
                      onMouseLeave={() => {
                        if (activeIndex === index) {
                          setIsHovered(false);
                          console.log("Left the slide");
                        }
                      }}
                      className="custom_slide" 
                      style={{
                        backgroundImage: `url(${info.background})`,
                        width: '15rem',
                        height: '15rem',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'visible',
                        zIndex: 1,
                        }}
                        key={index}>
                      <span className="slide-title">{info.title}</span>
                    </SwiperSlide>
                
                  
                ))}
                </Swiper>
              </div>    
          </div>
          <div className={`fade-in ${isBlufVisible ? "visible" : ""}`} style={{display: "flex", justifyContent: "center", width: "100%"}}>
                  <button className="button_slider" onClick={() => swiperRef.current?.slidePrev()}>↢</button>
                  <button className="button_slider" onClick={() => swiperRef.current?.slideNext()}>↣</button>
          </div>



        </div>
        <svg viewBox="0 0 1440 320" style={{ display: 'block', transform: 'rotateY(180deg)' }}>
            <path
              fill="#191919"
              d="M0,32L48,53.3C96,75,192,117,288,133.3C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        

        

  

      
        <Skillset/>
      
    </div>


  );
};

export default Home;
