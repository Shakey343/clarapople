import { useEffect, useState } from "react";

const GigListItem = ({gig}) => {
  const [old, setOld] = useState(false)

  let today = new Date();
  let date = new Date(gig.date)
  let time = date.toLocaleString("en-US", { hour: "numeric", hour12: true });

  useEffect(() => {
    if (date < today) {
      // Strikethrough old dates
      setOld(true)
      console.log("old date");
    }
  }, [])


  return (
    <tr
      className={`border-y border-white/40 bg-black/30 hover:bg-black/60 cursor-pointer ease-in-out duration-100 ${old && 'line-through'}`}
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
