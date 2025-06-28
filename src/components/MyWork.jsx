import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image6.png",
];

const MyWork = () => {
  return (
    <div
      id="my-work"
      style={{
        minHeight: "100vh",
        backgroundColor: "#e0f2ff",
        padding: "4rem 1rem",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        ✨ My Work
        //Testing
      
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
        A Messaging App-“Talk. Type. Tap. Swipe.”
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: "2rem",
          overflowX: "auto",
          padding: "1rem 0",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {images.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`Work ${idx + 1}`}
            initial={{ y: 0 }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: idx * 0.3,
            }}
            style={{
              width: "220px",
              height: "370px",
              objectFit: "contain",
              borderRadius: "16px",
              backgroundColor: "#fff",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              padding: "1rem",
              flexShrink: 0, // 💡 prevents image from shrinking in nowrap
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
