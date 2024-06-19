import { useEffect, useState } from "react";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpotifyCards = () => {
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState([]);

  console.log(albums);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

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
    // console.log({ token });
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
      .then((data) => setAlbums(data.items.reverse()));
  }, [token]);

  return (
    <div className="flex justify-center flex-wrap sm:flex-nowrap">
      {albums.map((album, i) => {
        return (
          <a
            key={i}
            href={album.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            className="mx-0 my-3 sm:m-3 shadow-black hover:ring-4 hover:ring-claraOrange relative cursor-pointer group font-youtube font-thin"
          >
            <FontAwesomeIcon
              icon={faSpotify}
              size="2xl"
              className="absolute top-3 right-3 text-green-500"
            />
            <div className="absolute hidden group-hover:block text-white z-10 mr-10 p-3">
              {album.name}
              {i === 0 && " - EP"}
            </div>
            <img src={album.images[1].url} alt={album.name} />
          </a>
        );
      })}
    </div>
  );
};

export default SpotifyCards;
