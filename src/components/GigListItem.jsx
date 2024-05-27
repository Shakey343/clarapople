import { useEffect, useState } from "react";
import cn from "../../utils/cn";

const GigListItem = ({ gig }) => {
  const [old, setOld] = useState(false);
  // console.log({gig})
  // console.log({old})

  const date = new Date(gig.DATE);
  const time = date.toLocaleString("en-US", { hour: "numeric", hour12: true });

  useEffect(() => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    const gigDate = new Date(gig.DATE);
    gigDate < yesterday ? setOld(true) : setOld(false);
  }, [gig.DATE]);

  return (
    <tr
      className={cn(
        "border-y border-white/40 bg-black/30 hover:bg-black/60 cursor-pointer ease-in-out duration-100",
        old && "line-through"
      )}
      onClick={() => window.open(gig.LINK, "_blank")}
    >
      <td className="p-4">
        {date.getDate()}/{date.getMonth() + 1}
        {time != "12 AM" && ` @ ${time}`}
      </td>
      <td className="p-4">{gig.EVENT}</td>
      <td className="p-4">{gig.LOCATION}</td>
    </tr>
  );
};

export default GigListItem;
