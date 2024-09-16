import hotMoonIcon from "../assets/hot_moon_no_bg.png";

const Banner = () => {
  const banner = {
    name: "Hot Moon",
    alt: "Hot Moon album artwork",
    releaseDate: "9/19/24",
  };

  const today = new Date();
  const release = new Date(banner.releaseDate);
  let btnText = today < release ? "Pre-Save" : "Out Now";

  return (
    <a href="https://slinky.to/HOTMOON" target="_blank" rel="noreferrer">
      <div className="w-screen py-3 px-5 sm:px-0 hot-moon-gradient sticky top-20 flex justify-center z-20 mb-5 shadow-lg">
        <div className="flex w-full justify-evenly">
          <div className="flex justify-center items-center sm:w-[300px]">
            <span className="font-druk text-[30px] text-wrap w-[100px] text-claraRed leading-none">
              {banner.name}
            </span>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-[70px]" src={hotMoonIcon} alt={banner.alt} />
          </div>
          <div className="flex items-center justify-center sm:w-[300px]">
            <p className="bg-claraRed hover:opacity-80 py-2 px-4 text-white rounded-sm shadow-sm hover:shadow-lg text-center">
              {btnText}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Banner;
