import { useEffect, useState } from "react";
import Container from "./Container";
import Upcoming from "./Upcoming";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  const [atPageOne, setAtPageOne] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      console.log(e);
      if (scrolled >= 450) {
        setAtPageOne(true);
      } else {
        setAtPageOne(false);
      }
    });
  }, []);

  return (
    <div className="bg-home-page bg-no-repeat bg-center h-[1280px] pt-20 font-mono">
      <div className="sm:fixed w-full sm:w-0 flex justify-evenly sm:flex-col sm:items-center right-10 top-0 sm:top-[36vh] z-10">
        <a
          href="https://www.instagram.com/clarapoplemusic/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            inverse
            className="my-3"
          />
        </a>
        <a
          href="https://www.facebook.com/ClaraPopleMusic"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            size="2xl"
            inverse
            className="my-3"
          />
        </a>
        <a
          href="https://open.spotify.com/artist/5Gg5vuh1ZYCT7fkuiVGnC1?si=yuzgZYgyTwKoKp07GHvDxg"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faSpotify}
            size="2xl"
            inverse
            className="my-3"
          />
        </a>
        <a
          href="https://www.youtube.com/@clarapople9601/videos"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            size="2xl"
            inverse
            className="my-3"
          />
        </a>
      </div>
      <Container className="relative">
        <div className="flex justify-center">
          <div className="w-[800px] h-[750px] flex justify-center mt-10 sm:mt-0 sm:relative">
            {!atPageOne && (
              <img
                className="sm:absolute top-0 left-28 w-[200px] h-[160px] sm:w-[400px] sm:h-[300px] sm:top-10 sm:left-20 md:top-20 md:left-20 md:w-[400px] md:h-[300px] lg:-top-10 lg:left-0 lg:w-[600px] lg:h-[468px] drop-shadow-lg"
                src="https://static.wixstatic.com/media/a89751_b1066e0a9f124241854e51196ade123f~mv2.png/v1/fill/w_1200,h_936,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Clara%20only%20Signature%20white.png"
                alt=""
              />
            )}
            {!atPageOne && (
              <img
                className="sm:absolute left-60 h-[160px] w-[140px] sm:left-80 sm:bottom-48 sm:h-[280px] sm:w-[250px] md:bottom-48 md:left-[400px] lg:bottom-28 lg:left-[480px] lg:w-[361px] lg:h-[456px] drop-shadow-lg"
                src="https://static.wixstatic.com/media/a89751_486162f29e364c8bb1d3148fe982871d~mv2.png/v1/fill/w_578,h_730,al_c,q_90,enc_auto/Pople%20only%20signature%20white_edited_edited.png"
                alt=""
              />
            )}
          </div>
        </div>
        <Upcoming className="absolute top-60 sm:top-[75vh] w-full sm:w-[600px] text-slate-50 drop-shadow-lg" />
      </Container>
    </div>
  );
};

export default HomePage;
