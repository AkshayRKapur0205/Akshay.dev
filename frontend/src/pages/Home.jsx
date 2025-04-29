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



  const images = ["/AkshayAnimeImage.png", "/AkshayKapurPhoto.jpg"];
  const [indexImage, setIndexImage] = useState(0);

  const handleClickImage = () => {
    setIsAnimatingImage(true);

    setTimeout(() =>  {
        setIndexImage((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimatingImage(false);
    }, 600);
    
  };

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
    <div>
        {isMovingCursor && (
            <div 
                className={`circle-cursor ${isHovering ? "hovering" : ""}`}
                style={{ left: `${positionCursor.x}px`, top: `${positionCursor.y}px`, borderColor: cursorColor }}
            />
        )}
        <div style={{marginLeft: "50%"}}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "10%"}}>
                <div>
                    <h1 className="text-4xl font-bold mb-6">Hey, I'm Akshay!</h1>
                    <p className="text-gray-400 mb-6">I build cool things with code.</p>
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
        
    

      

        
      
    </div>
  );
};

export default Home;
