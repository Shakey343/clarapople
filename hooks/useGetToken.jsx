import { useEffect, useState } from "react";

const useGetToken = () => {
  const [token, setToken] = useState("");

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

  return token;
};

export default useGetToken;
