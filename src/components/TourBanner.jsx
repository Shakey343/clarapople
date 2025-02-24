const TourBanner = () => {
    return (
      <a href="/#dates" rel="noreferrer">
        <div className="w-screen py-3 px-5 sm:px-0 top-20 sticky flex justify-center z-20 mb-5 shadow-lg text-claraUKTour bg-claraUKTourBg">
          <div className="flex justify-evenly items-center w-full text-[40px] h-[70px] uk-tour-banner">
            <div className="flex justify-center">
              UK Tour
            </div>
            <span>-</span>
            <div>
              MARCH 11<sup>th</sup> - 24<sup>th</sup>
            </div>
          </div>
        </div>
      </a>
    );
}

export default TourBanner;
