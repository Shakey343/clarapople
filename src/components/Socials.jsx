import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    link: "https://www.instagram.com/clarapoplemusic/",
    icon: faInstagram,
  },
  {
    link: "https://www.facebook.com/ClaraPopleMusic",
    icon: faFacebookF,
  },
  {
    link: "https://open.spotify.com/artist/5Gg5vuh1ZYCT7fkuiVGnC1?si=yuzgZYgyTwKoKp07GHvDxg",
    icon: faSpotify,
  },
  {
    link: "https://www.youtube.com/@clarapople9601/videos",
    icon: faYoutube,
  },
];

const Socials = () => {
  return (
    <div className="fixed sm:right-10 bottom-0 sm:top-28 w-full flex justify-evenly sm:justify-center z-10 bg-claraOrange sm:w-0 sm:flex-col sm:items-center sm:bg-transparent">
      {links.map((link, i) => (
        <a href={link.link} target="_blank" rel="noreferrer" key={i}>
          <FontAwesomeIcon
            icon={link.icon}
            size="2xl"
            className="my-3 text-white hover:text-white/80"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
