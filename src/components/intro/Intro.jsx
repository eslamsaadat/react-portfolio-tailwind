import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdWavingHand } from "react-icons/md";
const Intro = () => {
        const [text] = useTypewriter({
          words: ["Eslam Saadat","a front-end developer"],
          loop: true,
          typeSpeed: 20,
          deleteSpeed: 10,
          delaySpeed: 2000,
        });
  return (
    <section name="Home" className="w-full h-screen bg-primaryColor">
      {/* social media */}
      {/* <Media /> */}
      <div className="flex flex-col h-full justify-center gap-4">
        <h4 className="text-pinkColor flex items-center gap-1 text-lg">
          <span>
            <MdWavingHand className="text-[#FFD600]" />
          </span>
          Hi, my name is
        </h4>
        <h1 className="text-4xl md:text-6xl text-[#ccd6f6] font-semibold capitalize">
            {text}
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h1>
        <p className="max-w-[68rem] text-textColor text-lg mb-3">
          I'm a passionate front-end developer who loves to learn and share my
          knowledge.
        </p>

        <Link to="Work" smooth={true} duration={500}>
          <button className="btn">
            View Work <HiArrowNarrowRight className="ml-1" />{" "}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;