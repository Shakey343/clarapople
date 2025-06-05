import { useEffect, useState } from "react";
import GigListItem from "./GigListItem";
import { isMobile } from "react-device-detect";
import cn from "../../utils/cn";
import useFetchCSVData from "../../hooks/useFetchCSVData";

const GigList = () => {
  const today = new Date();
  const [calendarDate, setCalendarDate] = useState(today);
  const [upcoming, setUpcoming] = useState(true);
  const [atPageOne, setAtPageOne] = useState(false);
  const { csvData: gigList, loading: loading } = useFetchCSVData();

  // console.log({csvData})

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (isMobile) {
        scrolled >= 250 ? setAtPageOne(true) : setAtPageOne(false);
      }
    });
  }, []);

  useEffect(() => {
    const firstOfMonth = new Date();
    firstOfMonth.setDate(0);
    if (calendarDate <= firstOfMonth) {
      setUpcoming(false);
    } else {
      setUpcoming(true);
    }
  }, [calendarDate]);

  const thisMonth = new Date();
  thisMonth.setDate(1);
  thisMonth.setMonth(calendarDate.getMonth());
  thisMonth.setFullYear(calendarDate.getFullYear());

  let monthYearStr = thisMonth.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });

  if (thisMonth.getMonth() === today.getMonth()) {
    monthYearStr = "UPCOMING";
  }

  const handleAddMonth = () => {
    setCalendarDate((prevDate) => {
      const nextMonth = prevDate.getMonth() + 1;
      const day = 1;
      const year = prevDate.getFullYear();
      return new Date(year, nextMonth, day);
    });
  };
  const handleMinusMonth = () => {
    setCalendarDate((prevDate) => {
      const lastMonth = prevDate.getMonth() - 1;
      const day = 1;
      const year = prevDate.getFullYear();
      return new Date(year, lastMonth, day);
    });
  };

  const groupedGigs = Object.groupBy(gigList, ({ DATE }) => {
    const d = new Date(DATE);
    return JSON.stringify([d.getFullYear(), d.getMonth()]);
  });

  const noGigMessage = (
    <tr
      className={
        "border-y border-white/40 bg-black/30 hover:bg-black/60 cursor-pointer ease-in-out duration-100"
      }
      onClick={() =>
        setCalendarDate(new Date(today.getFullYear(), today.getMonth(), 1))
      }
    >
      <td className="p-4 text-center" colSpan="3">
        {loading ? "loading..." : "No gigs found 🤷"}
        <br />
        {"<-"} Return to{" "}
        {today.toLocaleString("default", { month: "long", year: "2-digit" })}
      </td>
    </tr>
  );

  // console.log({ groupedGigs });
  const thisMonthsGigs = groupedGigs[`[${calendarDate.getFullYear()},${calendarDate.getMonth()}]`];
  const nextMonthsGigs = groupedGigs[`[${calendarDate.getFullYear()},${calendarDate.getMonth() + 1}]`];

  let sortedGigs;

  if (thisMonthsGigs) {
    sortedGigs = thisMonthsGigs.map((gig, i) => {
      return <GigListItem key={i} gig={gig} />;
    })
  } else if (!thisMonthsGigs && nextMonthsGigs) {
    sortedGigs = nextMonthsGigs.map((gig, i) => {
      return <GigListItem key={i} gig={gig} />;
    });
  } else {
    sortedGigs = noGigMessage;
  }

  return (
    <div className="w-full sm:w-[600px] text-slate-50 drop-shadow-lg pb-72 sm:pr-10" id="dates">
      <div
        className={cn(
          "w-full p-3",
          isMobile && "sticky top-[80px]",
          atPageOne && "bg-black/80"
        )}
      >
        <h2 className="text-4xl text-center">
          {upcoming ? "" : "Past"} Gigs
        </h2>
        <div className="flex justify-center w-100 text-2xl sm:text-base sticky">
          <button className="hover:opacity-70" onClick={handleMinusMonth}>
            {"<-"}&nbsp;
          </button>
          <span>{monthYearStr}</span>
          <button className="hover:opacity-70" onClick={handleAddMonth}>
            &nbsp;{"->"}
          </button>
        </div>
      </div>
      <div className="overflow-x-scroll">
        <table className="w-full text-left table-auto">
          <thead className="text-sm text-white/70">
            <tr className="w-full">
              <th className="px-4 py-2 font-normal">DATE</th>
              <th className="px-4 py-2 font-normal">EVENT</th>
              <th className="px-4 py-2 font-normal">LOCATION</th>
            </tr>
          </thead>
          <tbody>{sortedGigs}</tbody>
        </table>
      </div>
    </div>
  );
};

export default GigList;
