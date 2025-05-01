import React, { useState, useEffect } from "react";
 

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

  /*For moving line */
  const [lineVisible, setLineVisible] = useState(false);

  /* For chalk images */ 
  const [isVisible, setIsVisible] = useState(false);

  const handleClickImage = () => {
    setIsAnimatingImage(true);

    setTimeout(() =>  {
        setIndexImage((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimatingImage(false);
    }, 600);
    
  };

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
      if (window.scrollY <= 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Color of cursor change */
  useEffect(() => {
    const handleMouseMove = (e) => {
        const hoveredElement = e.target;
        const isInteractive = ["A", "BUTTON", "INPUT"].includes(hoveredElement.tagName);
        
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
            style={{ width: "5%", height: "5%", marginTop: "5%", marginLeft: "11%"}}
            />
        </div>
        <div style={{}}>
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
                    style={{ width: "100px", height: "80px"}}
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
                        style={{ width: "512px", height: "750px", marginLeft: "auto"}}
                        />
                </div>
                
            </div>
        </div>
        
        {/* This is the bluf box */}
        <div style= {{display: "flex", justifyContent: "center"}}>
          <div className="bluf-box">
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


  );
};

export default Home;
