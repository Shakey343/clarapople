import { Link, useLocation } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  const location = useLocation();

  return (
    <Container className="h-20 flex justify-between items-center px-5 fixed inset-x-0 top-0 z-10">
      <Link to="/music">
        <img
          src="https://static.wixstatic.com/media/a89751_94c4c2f6b12043fb99a8aad1a0059792~mv2.png/v1/fill/w_272,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Music%20white.png"
          alt="Music Page Link"
          className="h-12"
        />
      </Link>
      {location.pathname != "/" && (
        <Link to="/">
          <img
            src="https://static.wixstatic.com/media/a89751_b1066e0a9f124241854e51196ade123f~mv2.png/v1/fill/w_242,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Clara%20only%20Signature%20white.png"
            alt="Home Page Link"
            className="h-20"
          />
        </Link>
      )}
      <Link to="/about">
        <img
          src="https://static.wixstatic.com/media/a89751_71e60a1875ee42a58876e165775b95c0~mv2.png/v1/fill/w_232,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/about.png"
          alt="About Page Link"
          className="h-12"
        />
      </Link>
    </Container>
  );
};

export default Navbar;
