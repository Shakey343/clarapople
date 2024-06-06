const Banner = () => {
  return (
    <>
      <a href="https://slinky.to/PoisonCP" target="_blank" rel="noreferrer">
        <div className="w-screen py-3 diagonal-split-background sticky top-[136px] sm:top-20 flex justify-center z-10 mb-5 shadow-lg">
          <div className="flex w-full justify-evenly">
            <div className="flex justify-end items-center sm:w-[300px]">
              <span className="text-white text-2xl font-bold">NEW SINGLE</span>
              <span className="text-white text-2xl font-bold hidden sm:block">&nbsp;-</span>
              <span className="font-voluta text-[60px] text-white px-3 flex pt-2 leading-none">Poison</span>
            </div>
            <div className="flex items-center justify-center sm:w-[300px]">
              <img
                className="h-[50px] hidden sm:block"
                src="/images/poison-bottle-no-bg.png"
                alt="poison bottle"
                />
              <p className="bg-claraDarkBlue py-2 px-4 text-white rounded-sm shadow-sm hover:shadow-lg">
                Pre-Save
              </p>
              <img
                className="h-[50px] hidden sm:block"
                src="/images/poison-bottle-no-bg.png"
                alt="poison bottle"
                />
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Banner;
