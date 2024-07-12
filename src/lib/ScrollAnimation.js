import React, { useState, useEffect } from "react";

function ScrollAnimation(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 768); // set a minimum width for desktop screens
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // set initial value on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktop && (
        <div
          className="container_scroll"
          style={{
            position: "absolute",
            width: "100%",
            // height: "50vh",
            zIndex: "-1",
            overflow: "hidden",
            // right: "-300px",
            // top: "70%",
          }}
        >
          <div
            className="text"
            style={{
              transform: `translateX(${-scrollPosition}px)`,
              backgroundColor: "none",
              fontSize: "200px",
              // fontFamily: "-moz-initial",
              fontFamily: "Handjet",

              right: "-400px",
              zIndex: "-1",
              //   top: "60%",
              //   float: "right",
              textAlign: "right",
              //   fontWeight: "700",
              opacity: "0.3",
            }}
          >
            {props.name}
          </div>
        </div>
      )}
    </>
  );
}

export default ScrollAnimation;
