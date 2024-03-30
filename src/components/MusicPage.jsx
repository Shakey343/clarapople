import { useEffect } from "react";
import Socials from "./Socials";
import { Buffer } from "buffer";

const MusicPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    let client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    let authOptions = {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      body: {
        grant_type: "client_credentials",
      },
    };

    fetch("https://accounts.spotify.com/api/token", authOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    // curl -X POST "https://accounts.spotify.com/api/token" \
    //  -H "Content-Type: application/x-www-form-urlencoded" \
    //  -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"

    // fetch(`https://api.spotify.com/v1/artists/${import.meta.env.VITE_SPOTIFY_ARTIST_ID}`, {
    //   headers: {
    //     "Authorization": `Bearer ${access_token}`
    //   }
    // })
  }, []);

  return (
    <div className="pt-20 bg-music-page bg-no-repeat min-h-[250vh] bg-cover bg-center lg:bg-150 lg:bg-right">
      <Socials />
      <div className="py-5">
        {/* ALBUM ARTWORK */}
        <div className="flex justify-center my-4">
          <iframe
            id="ytplayer"
            type="text/html"
            className="w-[80vw] h-[50vh]"
            src="https://www.youtube.com/embed/mPSvcRDjlfE?si=3BfbPDC0Fdq1igzN"
          ></iframe>
        </div>
        <div className="flex justify-center my-4">
          <iframe
            id="ytplayer"
            type="text/html"
            className="w-[80vw] h-[50vh]"
            src="https://www.youtube.com/embed/LJ2QwLSPbB0?si=S-t5b7S2-ZcvO0Ev"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
