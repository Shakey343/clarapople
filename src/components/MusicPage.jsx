import { useEffect, useState } from "react";
import Socials from "./Socials";
import Container from "./Container";

const MusicPage = () => {
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState();

  console.log(albums);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    let client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        client_id +
        "&client_secret=" +
        client_secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => setToken(data));
  }, []);

  useEffect(() => {
    console.log({ token });
    token &&
      fetch(
        `https://api.spotify.com/v1/artists/${
          import.meta.env.VITE_SPOTIFY_ARTIST_ID
        }/albums`,
        {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setAlbums(data));
  }, [token]);

  return (
    <div className="pt-20 bg-music-page bg-no-repeat min-h-[250vh] bg-cover bg-center lg:bg-150 lg:bg-right">
      <Socials />
      <Container>
        <div className="py-5 mt-[200px]">
          <div className="flex justify-end mx-3">
            {albums &&
              albums.items.map((album, i) => {
                return (
                  <a
                    key={i}
                    href={album.external_urls.spotify}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-3 shadow-black hover:ring-4 hover:ring-claraRed relative"
                  >
                    <div className="absolute hidden z-10">{album.name}</div>
                    <img src={album.images[1].url} alt={album.name} />
                  </a>
                );
              })}
          </div>
          <div className="flex justify-end m-6">
            <iframe
              id="ytplayer"
              type="text/html"
              className="w-[55vw] h-[50vh]"
              src="https://www.youtube.com/embed/mPSvcRDjlfE?si=3BfbPDC0Fdq1igzN"
            ></iframe>
          </div>
          <div className="flex justify-end m-6">
            <iframe
              id="ytplayer"
              type="text/html"
              className="w-[55vw] h-[50vh]"
              src="https://www.youtube.com/embed/LJ2QwLSPbB0?si=S-t5b7S2-ZcvO0Ev"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MusicPage;
