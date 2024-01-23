import Container from "./Container";
import Upcoming from "./Upcoming";

const HomePage = () => {
  return (
    <div className="bg-home-page bg-no-repeat bg-center min-h-[170vh] pt-20 font-mono">
      <Container className="relative">
        <div className="flex justify-center">
          <div className="w-[800px] h-[750px] relative">
            <img
              className="absolute -top-10 left-0 w-[600px] h-[468px]"
              src="https://static.wixstatic.com/media/a89751_b1066e0a9f124241854e51196ade123f~mv2.png/v1/fill/w_1200,h_936,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Clara%20only%20Signature%20white.png"
              alt=""
            />
            <img
              className="absolute bottom-28 -right-10 w-[361px] h-[456px]"
              src="https://static.wixstatic.com/media/a89751_486162f29e364c8bb1d3148fe982871d~mv2.png/v1/fill/w_578,h_730,al_c,q_90,enc_auto/Pople%20only%20signature%20white_edited_edited.png"
              alt=""
            />
          </div>
        </div>
        <Upcoming className="absolute top-[75vh] w-[40vw] text-white"/>
      </Container>
    </div>
  );
};

export default HomePage;
