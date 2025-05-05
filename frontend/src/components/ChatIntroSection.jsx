import React from "react";

const ChatIntroSection = ({
  placeholder,
  inputValue,
  setInputValue,
  isVisible,
  images,
  indexImage,
  handleClickImage,
  isAnimatingImage,
  isMovingCursor,
  positionCursor,
  isHovering,
}) => {
  return (
    <>
      {/* Custom cursor */}
      {isMovingCursor && (
        <div
          className={`circle-cursor ${isHovering ? "hovering" : ""}`}
          style={{ left: `${positionCursor.x}px`, top: `${positionCursor.y}px` }}
        />
      )}

      {/* New stuff arrow */}
      <div>
        <img
          src="/new_stuff_arrow.png"
          alt="newStuff"
          className={`fade-in ${isVisible ? "visible" : ""}`}
          style={{ width: "5%", height: "5%", marginTop: "4%", marginLeft: "16%" }}
        />
      </div>

      {/* Chat center */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "3%",
          }}
        >
          <div>
            <h1>Hey, I'm Akshay!</h1>
            <p>I build cool things with code.</p>
            <div>
              <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
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
                alt="scroll"
                className={`fade-in ${isVisible ? "visible" : ""}`}
                style={{ width: "150px", height: "120px" }}
              />
            </div>
          </div>

          {/* Right side image */}
          <div className="akshay-image-container flex-shrink-0">
            <img
              src={images[indexImage]}
              alt="Akshay"
              className={isAnimatingImage ? "spin-transition" : ""}
              onClick={handleClickImage}
              style={{ width: "512px", height: "750px", marginLeft: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatIntroSection;
