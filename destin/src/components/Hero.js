import Navbar from "./Navbar";
import Button from "./Button";

import bg from "../assets/img/bg.jpg";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="px-4 hero-overlay bg-opacity-60">
          <Navbar />
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <h1 className="font-poppins mb-5 text-2xl lg:text-5xl font-bold animate__animated animate__fadeIn animate__slower">
              SELECT YOUR DESTINATION
            </h1>
            <p className="font-poppins mb-10 text-sm lg:text-2xl font-thin animate__animated animate__fadeIn animate__slower">
              choose the place you want to visit!
            </p>
            <Button
              className="font-poppins rounded-full normal-case animate__animated animate__fadeIn animate__slower"
              variant="outline-white"
              link="#"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
