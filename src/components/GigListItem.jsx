import { useEffect, useState } from "react";
import cn from "../../utils/cn";

const GigListItem = ({ gig }) => {
  const [old, setOld] = useState(false);

  let today = new Date();
  let date = new Date(gig.date);
  let time = date.toLocaleString("en-US", { hour: "numeric", hour12: true });

  useEffect(() => {
    if (date < today) {
      setOld(true);
      // 1. Connect to google drive api to create array of gigs
      // 2. Sort the full list of gigs into chronilogical order
      // 3. Only show gigs from today onwards (month by month)
      // 4. Create way to cycle through pages of gigs (past & future)
      // links at bottom should say: <- Jan 24 ->
    }
  }, []);

  return (
    <tr
      className={cn(
        "border-y border-white/40 bg-black/30 hover:bg-black/60 cursor-pointer ease-in-out duration-100",
        old && "line-through"
      )}
      onClick={() => window.open(gig.link, "_blank")}
    >
      <td className="p-4">
        {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
        {time != "12 AM" && ` @ ${time}`}
      </td>
      <td className="p-4">{gig.event}</td>
      <td className="p-4">{gig.location}</td>
    </tr>
  );
};

export default GigListItem;
