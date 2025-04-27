import React, { useState, useEffect } from "react";

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
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

    return () => clearInterval(interval);
  }, [charIndex, isDeleting, index]);

  return (
    <div>
        <div style={{marginLeft: "350px"}}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "50px"}}>
                <div>
                    <h1 className="text-4xl font-bold mb-6">Hey, I'm Akshay!</h1>
                    <p className="text-gray-400 mb-6">I build cool things with code.</p>
                    <div>
                        {/* Animated Text Box */}
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
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
                        src="/AkshayAnimeImage.png"
                        alt="Akshay"
                        style={{ width: "512px", height: "750px", marginLeft: "auto" }}
                        />
                </div>
            </div>
        </div>
        
    

      

        
      
    </div>
  );
};

export default Home;
