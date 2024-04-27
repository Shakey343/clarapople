import { useEffect, useState } from "react";
import GigListItem from "./GigListItem";
import gigListJson from "./gigs.json";

const GigList = () => {
  const today = new Date();
  const [monthNo, setMonthNo] = useState(today.getMonth());
  const [upcoming, setUpcoming] = useState(true);
  const [gigList, setGigList] = useState(gigListJson)

  useEffect(() => {
    fetch('YOUR_ENDPOINT_URL') // Replace with your actual endpoint URL
      .then(response => response.json())
      .then(data => setGigList(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const date = new Date();
  date.setMonth(monthNo);
  // const monthString = date.toLocaleString("default", {
  //   month: "long",
  //   year: "2-digit",
  // });
  const monthStr = date.toLocaleString("default", {
    month: "short",
    year: "2-digit",
  });

  const handleAddMonth = () => {
    setMonthNo((prevNo) => prevNo + 1);
  };
  const handleMinusMonth = () => {
    setMonthNo((prevNo) => prevNo - 1);
  };

  const groupedGigs = Object.groupBy(gigList, ({ date }) => {
    const d = new Date(date);
    return d.getMonth();
  });

  const noGigMessage = (
    <tr
      className={
        "border-y border-white/40 bg-black/30 hover:bg-black/60 cursor-pointer ease-in-out duration-100"
      }
      onClick={() => setMonthNo(today.getMonth())}
    >
      <td className="p-4 text-center" colSpan="3">
        No gigs found 🤷
        <br />
        {"<-"} Return to{" "}
        {today.toLocaleString("default", { month: "long", year: "2-digit" })}
      </td>
    </tr>
  );

  const mappedGigList = groupedGigs[monthNo]
    ? groupedGigs[monthNo].sort((a, b) => new Date(a.date) - new Date(b.date)).map((gig, i) => {
        return <GigListItem key={i} gig={gig} />;
      })
    : noGigMessage;

  return (
    <div className="w-full sm:w-[600px] text-slate-50 drop-shadow-lg">
      <h2 className="text-4xl mb-5">{upcoming ? 'Upcoming' : 'Past'} Gigs</h2>
      <div className="flex justify-center w-100">
        <button className="hover:opacity-70" onClick={handleMinusMonth}>{"<-"}&nbsp;</button>
        <span>{monthStr}</span>
        <button className="hover:opacity-70" onClick={handleAddMonth}>&nbsp;{"->"}</button>
      </div>
      <table className="w-full text-left table-auto">
        <thead className="text-sm text-white/70">
          <tr className="w-full">
            <th className="px-4 py-2 font-normal">DATE</th>
            <th className="px-4 py-2 font-normal">EVENT</th>
            <th className="px-4 py-2 font-normal">LOCATION</th>
          </tr>
        </thead>
        <tbody>{mappedGigList}</tbody>
      </table>
    </div>
  );
};

export default GigList;
