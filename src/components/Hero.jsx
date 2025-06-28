import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <style>
        {`
          .hero-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 100vh;
            background-color: #111111;
            color: white;
            font-family: sans-serif;
            padding: 4rem;
            overflow: hidden;
            width: 100%;
            gap: 3rem;
            position: relative;
          }

          .top-buttons {
            position: absolute;
            top: 5rem;
            left: 2rem;
            display: flex;
            gap: 1rem;
            z-index: 10;
          }

          .top-buttons a {
            background: linear-gradient(135deg, #6b5bfc, #8e44ec);
            color: white;
            padding: 0.6rem 1.4rem;
            font-size: 1rem;
            font-weight: 600;
            border: none;
            border-radius: 9999px;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            text-decoration: none;
          }

          .top-buttons a:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(110, 90, 255, 0.4);
          }

          .hero-content {
            flex: 1;
            max-width: 50%;
          }

          .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.2;
          }

          .hero-content h1 span {
            font-size: 1.875rem;
            font-weight: 600;
            display: block;
            margin-top: 0.5rem;
          }

          .hero-content p {
            color: #d1d5db;
            font-size: 1.125rem;
            line-height: 1.6;
            margin-top: 1.5rem;
          }

          .hero-content .highlight {
            color: #f59e0b;
            margin-top: 1.5rem;
            font-size: 1.125rem;
          }

          .hero-image {
            flex: 1;
            max-width: 45%;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: slideFromTop 1.2s ease-out forwards;
            opacity: 0;
            transform: translateY(-100px);
          }

          @keyframes slideFromTop {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-image img {
            width: 90%;
            height: auto;
            max-height: 70vh;
            object-fit: cover;
            clip-path: url(#blobClip);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      {/* SVG Clip Path for Blob Shape */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0 C0.6,0.05,0.95,0.1,1,0.5 C0.95,0.9,0.6,0.95,0.5,1 C0.4,0.95,0.05,0.9,0,0.5 C0.05,0.1,0.4,0.05,0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 🔝 Top Left Buttons */}
      <div className="top-buttons">
        <a href="/pdfs/Prathusha-resumeFinale.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href="#my-work" style={{ scrollBehavior: 'smooth' }}>My Work</a>
      </div>

      {/* 👋 Left Content */}
      <div className="hero-content">
        <h1>
          Hi, I’m Prathusha Pasam
          <span>— A designer at heart with a developer’s mind.</span>
        </h1>

        <p>
          I’m passionate about crafting digital experiences that are not just beautiful, but meaningful.
          My love for UI/UX design comes from a strong belief that thoughtful, user-centered design has
          the power to solve real-world problems, simplify everyday tasks, and create lasting emotional connections.
          <br /><br />
          Previously, I worked as a Mainframe Developer for one year on version-updated projects with strong problem-solving skills.
        </p>

        <p className="highlight">
          💡 Brain + ❤️ Heart = Great UX — yes, trust me on that!
        </p>
      </div>

      {/* 📷 Right Blob Image */}
      <div className="hero-image">
        <img
          src="/images/myprofilepic.jpeg"
          alt="Prathusha"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/500x700";
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
