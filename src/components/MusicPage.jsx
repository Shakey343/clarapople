import { useEffect } from "react";

const MusicPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-music-page bg-no-repeat min-h-[250vh] bg-150 bg-right">
      {/* MUSIC PAGE */}
    </div>
  );
}

export default MusicPage;
