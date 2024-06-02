import { NavLink, useLocation } from "react-router-dom";
import Container from "./Container";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const Navbar = () => {
  const location = useLocation();
  const [atPageOne, setAtPageOne] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      // console.log(e);
      if (isMobile) {
        scrolled >= 250 ? setAtPageOne(true) : setAtPageOne(false);
      } else {
        scrolled >= 450 ? setAtPageOne(true) : setAtPageOne(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    console.log("to the top!");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`h-20 fixed inset-x-0 top-0 z-10 ${
        atPageOne && "bg-black/80"
      }`}
      id="navbar"
    >
      <Container className="h-20 flex justify-between items-center px-5">
        <NavLink to="/music">
          <img
            src="https://static.wixstatic.com/media/a89751_94c4c2f6b12043fb99a8aad1a0059792~mv2.png/v1/fill/w_272,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Music%20white.png"
            alt="Music Page Link"
            className="h-12"
          />
        </NavLink>
        {location.pathname == "/" ? (
          atPageOne && (
            <button onClick={scrollToTop}>
              <img
                src="https://static.wixstatic.com/media/a89751_b1066e0a9f124241854e51196ade123f~mv2.png/v1/fill/w_242,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Clara%20only%20Signature%20white.png"
                alt="Home Page Link"
                className="h-20"
              />
            </button>
          )
        ) : (
          <NavLink to="/">
            <img
              src="https://static.wixstatic.com/media/a89751_b1066e0a9f124241854e51196ade123f~mv2.png/v1/fill/w_242,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Clara%20only%20Signature%20white.png"
              alt="Home Page Link"
              className="h-20"
            />
          </NavLink>
        )}
        <NavLink to="/about">
          <img
            src="https://static.wixstatic.com/media/a89751_71e60a1875ee42a58876e165775b95c0~mv2.png/v1/fill/w_232,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/about.png"
            alt="About Page Link"
            className="h-12"
          />
        </NavLink>
      </Container>
      {/* comment */}
    </div>
  );
};

export default Navbar;
