import { useEffect, useState } from "react";
import Container from "./Container";
import GigList from "./GigList";
import Socials from "./Socials";
import { isMobile } from "react-device-detect";
import Banner from "./Banner";

const HomePage = () => {
  const [atPageOne, setAtPageOne] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      // console.log(e);
      if (isMobile) {
        scrolled >= 250 ? setAtPageOne(true) : setAtPageOne(false);
      } else {
        scrolled >= 350 ? setAtPageOne(true) : setAtPageOne(false);
      }
    });
  }, []);

  return (
    <div className="bg-home-page bg-no-repeat sm:bg-bottom bg-cover pt-20 font-mono">
      <Socials />
      <Banner />
      <Container className="relative">
        <div className="flex justify-center">
          <div className="w-[800px] h-[250px] sm:h-[580px] flex justify-center mt-10 sm:mt-0 sm:relative">
            {!atPageOne && (
              <img
                className="sm:absolute top-0 left-28 w-[200px] h-[160px] sm:w-[400px] sm:h-[300px] sm:top-10 sm:left-20 md:top-20 md:left-20 md:w-[400px] md:h-[300px] lg:-top-10 lg:left-0 lg:w-[600px] lg:h-[468px] drop-shadow-lg"
                src="https://static.wixstatic.com/media/a89751_b1066e0a9f124241854e51196ade123f~mv2.png/v1/fill/w_1200,h_936,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Clara%20only%20Signature%20white.png"
                alt="Clara's first name signature"
              />
            )}
            {!atPageOne && (
              <img
                className="sm:absolute left-60 h-[160px] w-[140px] sm:left-80 sm:top-72 sm:h-[280px] sm:w-[250px] md:top-48 md:left-[400px] lg:top-48 lg:left-[480px] lg:w-[361px] lg:h-[456px] drop-shadow-lg"
                src="https://static.wixstatic.com/media/a89751_486162f29e364c8bb1d3148fe982871d~mv2.png/v1/fill/w_578,h_730,al_c,q_90,enc_auto/Pople%20only%20signature%20white_edited_edited.png"
                alt="Pople last name signature"
              />
            )}
          </div>
        </div>
        <GigList />
      </Container>
    </div>
  );
};

export default HomePage;
