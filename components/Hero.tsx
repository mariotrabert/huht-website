import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://www.huht.wachtelhunde.net/photo_gallery/2014/Meine-drei-500.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-1 text-5xl font-bold">Von der Huht</h1>
            <h2 className="mb-5 text-3xl font-bold">
              Deutscher Wachtelhund-Zwinger
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
