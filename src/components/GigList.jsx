import { useEffect, useState } from "react";
import GigListItem from "./GigListItem";

const GigList = () => {
  const today = new Date();
  const [calendarDate, setCalendarDate] = useState(today);
  const [upcoming, setUpcoming] = useState(true);
  const [gigList, setGigList] = useState([]);

  console.log({calendarDate})

  useEffect(() => {
    const url = "https://sheet.best/api/sheets/5ce0540f-d93f-4590-a3f9-14c3b3c63a69";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGigList(data.sort((a, b) => new Date(a.DATE) - new Date(b.DATE))))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const thisMonth = new Date();
  thisMonth.setDate(1);
  thisMonth.setMonth(calendarDate.getMonth());
  thisMonth.setFullYear(calendarDate.getFullYear());

  const monthYearStr = thisMonth.toLocaleString("default", {
    month: "short",
    year: "2-digit",
  });

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
      onClick={() => setCalendarDate(new Date(today.getFullYear(),today.getMonth(),1))}
    >
      <td className="p-4 text-center" colSpan="3">
        No gigs found 🤷
        <br />
        {"<-"} Return to{" "}
        {today.toLocaleString("default", { month: "long", year: "2-digit" })}
      </td>
    </tr>
  );

  const sortedGigs = groupedGigs[`[${calendarDate.getFullYear()},${calendarDate.getMonth()}]`]
    ? groupedGigs[`[${calendarDate.getFullYear()},${calendarDate.getMonth()}]`]
        .map((gig, i) => {
          return <GigListItem key={i} gig={gig} />;
        })
    : noGigMessage;

  return (
    <div className="w-full sm:w-[600px] text-slate-50 drop-shadow-lg">
      <h2 className="text-4xl mb-5">{upcoming ? "Upcoming" : "Past"} Gigs</h2>
      <div className="flex justify-center w-100">
        <button className="hover:opacity-70" onClick={handleMinusMonth}>
          {"<-"}&nbsp;
        </button>
        <span>{monthYearStr}</span>
        <button className="hover:opacity-70" onClick={handleAddMonth}>
          &nbsp;{"->"}
        </button>
      </div>
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
  );
};

export default GigList;
