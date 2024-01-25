import { useEffect } from "react";
import Container from "./Container";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-about-page bg-no-repeat min-h-[200vh] bg-cover lg:bg-150 bg-right-top font-mono text-white">
      <Container className="relative">
        <div className="absolute sm:right-10 w-[70vw] h-[1200px] sm:w-[60vw] md:w-[48vw] lg:w-[45vw] top-[20vh]">
          <div className="sticky top-28">
            {/* <h2 className="text-4xl">About</h2> */}
            <div className="py-5">
              <p>
                Clara Pople is a soul/trip hop looper with the lungs of a
                deep-sea diver, the heart of a Barbary Lion and the voice of an
                English choir girl. Using a vocal looper to create densely
                layered harmonic backing and drawing on her choral and gospel
                background, Clara&apos;s singing makes grown men weep.
              </p>
              <br />
              <p>
                Clara&apos;s music is centred around her voice. She discovered
                she could use it as both her instrument and her accompaniment
                creating dark bass lines, syncopated beatboxing rhythms and
                6-part harmonies - all with her voice. The artist manipulates
                classical technique, gospel, and Bristol trip hop music to
                create darkly poetic unique and original songs.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
