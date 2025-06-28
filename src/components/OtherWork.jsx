import React, { useEffect, useState } from "react";

const images = [
  "/images/cake1image.png",
  "/images/cake2image.png",
  "/images/cake3image.png",
];

const OtherWork = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3e8ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        padding: "2rem",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: "#7e22ce",
        }}
      >
        🍰 Online Cake Shop Design
      </h2>

      <div
        style={{
          width: "80%",
          height: "400px",
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Cake ${i + 1}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
              opacity: i === index ? 1 : 0,
              transform: i === index ? "rotate(0deg)" : "rotate(20deg) scale(0.95)",
              zIndex: i === index ? 1 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OtherWork;
