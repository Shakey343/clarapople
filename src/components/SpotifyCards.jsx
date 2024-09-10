import { useEffect, useState } from "react";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetToken from "../../hooks/useGetToken";

const SpotifyCards = () => {
  const token = useGetToken();
  const [albums, setAlbums] = useState([]);

  // console.log(albums);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // console.log({ token });
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
        .then((data) => {
          const allSongs = data.items;
          const wantedSongs = allSongs.filter(
            (song) => song.album_group !== "appears_on"
          );
          setAlbums(wantedSongs);
        });
  }, [token]);

  return (
    <div className="flex justify-center flex-wrap gap-3 min-h-fit">
      {albums.map((album, i) => {
        return (
          <a
            key={i}
            href={album.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            className="group shadow-black hover:ring-4 hover:ring-claraOrange hover:text-claraOrange relative cursor-pointer group font-youtube font-thin sm:w-[30%]"
          >
            <FontAwesomeIcon
              icon={faSpotify}
              size="2xl"
              className="absolute top-3 right-3 group-hover:text-claraOrange text-white/20"
            />
            <div className="absolute hidden group-hover:block text-white z-10 mr-10 p-3">
              {album.name}
              {album.name === "It's The Girl" && " - EP"}
            </div>
            <img src={album.images[1].url} alt={album.name} />
          </a>
        );
      })}
    </div>
  );
};

export default SpotifyCards;
