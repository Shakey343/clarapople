import { useEffect } from "react";
import Container from "./Container";
import Socials from "./Socials";
// import AlbumBanner from "./AlbumBanner";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-about-page bg-no-repeat bg-center min-h-[1600px] bg-cover sm:bg-center xl:bg-right-top text-white">
      <Socials />
      {/* <AlbumBanner /> */}
      <Container className="relative">
        <div className="absolute top-[15vh] sm:right-20 sm:top-[10vh] w-full h-[1000px] sm:w-[80vw] md:w-[48vw] lg:w-[35vw]">
          <div className="sticky top-64 sm:top-48 drop-shadow-2xl px-4 bg-black/60 lg:bg-transparent">
            {/* <h2 className="text-4xl">About</h2> */}
            <div className="py-5">
              <p>
                Clara Pople is the electronic folk trip/pop singer whose music
                fuses worlds — ancient and urban, ethereal and raw. A
                classically trained vocalist with Scottish roots and Cumbrian
                beginnings, she blends ghostly Celtic folk melodies with the
                shadowy pulse of trip-hop. Think stormy coastlines tangled with
                city sirens.
              </p>
              <br />
              <p>
                Despite remaining fully independent, Clara Pople has built
                significant momentum over the past three years. She has
                performed at Glastonbury, completed multiple UK headline tours,
                sold out shows across London, Edinburgh, Leeds, Cumbria and
                North Wales, and earned continued support from BBC Radio 1
                Introducing, BBC Introducing and BBC 6 Music. Her music has been
                championed by CLASH, Earmilk, NME, CLOT and When The Horn Blows,
                while also receiving editorial playlist support from Apple
                Music. Across her catalogue, Clara has amassed over 200,000
                streams, with The Lark selected as BBC Introducing Track of the
                Month before being nominated for Song of the Year. Every
                milestone has been achieved independently, driven by a
                distinctive artistic vision, a growing live audience and
                consistent industry support.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
