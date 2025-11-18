import Socials from "./Socials";
import Container from "./Container";
// import AlbumBanner from "./AlbumBanner";
import SpotifyCards from "./SpotifyCards";

const MusicPage = () => {
  return (
    <div className="bg-music-page bg-no-repeat pt-20 pb-60 md:pb-40 lg:pb-32 bg-cover bg-center lg:bg-150 lg:bg-right-bottom h-full">
      <Socials />
      {/* <AlbumBanner /> */}
      <Container className="h-fit">
        <div className="py-5 w-full lg:w-[55vw] float-right mt-10 md:mt-[50px] sm:pr-12 px-0 h-full relative">
          <SpotifyCards />
          <div className="my-6 mx-3">
            <iframe
              id="ytplayer1"
              loading="lazy"
              allowFullScreen
              className="w-full h-[50vh]"
              src="https://www.youtube.com/embed/MySX5NyWCAg?si=vWiQYdobuaGTkm70"
            ></iframe>
          </div>
          <div className="my-6 mx-3 sm:m-0">
            <iframe
              id="ytplayer2"
              loading="lazy"
              allowFullScreen
              className="w-full h-[50vh]"
              src="https://www.youtube.com/embed/rKwoA3zcDqg?si=VG3uYWV6mjc6yueT"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MusicPage;
