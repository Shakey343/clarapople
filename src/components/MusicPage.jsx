import Socials from "./Socials";
import Container from "./Container";
import Banner from "./Banner";
import SpotifyCards from "./SpotifyCards";

const MusicPage = () => {
  return (
    <div className="bg-music-page bg-no-repeat pt-20 pb-100 bg-cover bg-center lg:bg-150 lg:bg-right min-h-[3480px] md:min-h-[2100px] sm:min-h-[2010px]">
      <Socials />
      <Banner />
      <Container>
        <div className="py-5 w-full lg:w-[55vw] float-right mt-10 md:mt-[50px] sm:pr-12 px-0">
          <SpotifyCards />
          <div className="my-6 mx-3">
            <iframe
              id="ytplayer"
              type="text/html"
              className="w-full h-[50vh]"
              src="https://www.youtube.com/embed/mPSvcRDjlfE?si=3BfbPDC0Fdq1igzN"
            ></iframe>
          </div>
          <div className="my-6 mx-3 sm:m-0">
            <iframe
              id="ytplayer"
              type="text/html"
              className="w-full h-[50vh]"
              src="https://www.youtube.com/embed/LJ2QwLSPbB0?si=S-t5b7S2-ZcvO0Ev"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MusicPage;
