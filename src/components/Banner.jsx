import poisonBottleImg from "../assets/poison-bottle-no-bg.png"

const Banner = () => {
  return (
    <a href="https://slinky.to/PoisonCP" target="_blank" rel="noreferrer">
      <div className="w-screen py-3 px-5 sm:px-0 diagonal-split-background sticky top-20 flex justify-center z-20 mb-5 shadow-lg">
        <div className="flex w-full justify-evenly">
          <div className="flex justify-end items-center sm:w-[300px]">
            <span className="text-white text-2xl font-bold">NEW SINGLE</span>
            <span className="text-white text-2xl font-bold hidden sm:block">
              &nbsp;-
            </span>
            <span className="font-voluta text-[60px] text-white px-3 flex pt-2 leading-none">
              Poison
            </span>
          </div>
          <div className="flex items-center justify-center sm:w-[300px]">
            <img
              className="h-[50px] hidden sm:block"
              src={poisonBottleImg}
              alt="poison bottle"
            />
            <p className="bg-claraDarkBlue py-2 px-4 text-white rounded-sm shadow-sm hover:shadow-lg text-center">
              Out Now!
            </p>
            <img
              className="h-[50px] hidden sm:block"
              src={poisonBottleImg}
              alt="poison bottle"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Banner;
