import { useEffect } from "react";
import Socials from "./Socials";

const MusicPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-music-page bg-no-repeat min-h-[250vh] bg-cover bg-center lg:bg-150 lg:bg-right">
      <Socials />
      {/* MUSIC PAGE */}
    </div>
  );
}

export default MusicPage;
