const Upcoming = ({ className }) => {
  let date = new Date();
  date.setDate(date.getDate() - 1);

  const gigList = [
    {
      date: date,
      event: "Boat Gig",
      location: "South Dock Marina",
      link: "https://www.google.com",
    },
    {
      date: date,
      event: "Boat Gig",
      location: "South Dock Marina",
      link: "https://www.google.com",
    },
    {
      date: date,
      event: "Boat Gig",
      location: "South Dock Marina",
      link: "https://www.google.com",
    },
    {
      date: date,
      event: "Boat Gig",
      location: "South Dock Marina",
      link: "https://www.google.com",
    },
    {
      date: date,
      event: "Boat Gig",
      location: "South Dock Marina",
      link: "https://www.google.com",
    },
    {
      date: date,
      event: "Boat Gig",
      location: "South Dock Marina",
      link: "https://www.google.com",
    },
    {
      date: date,
      event: "Boat Gig",
      location: "South Dock Marina",
      link: "https://www.google.com",
    },
  ];

  const mappedGigList = gigList.map((gig, i) => {
    let today = new Date();
    if (gig.date < today) {
      console.log("old date");
    }
      return (
        <tr
          key={i}
          className="border-y border-white/40 hover:bg-black/30 cursor-pointer ease-in-out duration-100"
          onClick={() => window.open(gig.link, "_blank")}
        >
          <td className="p-4">
            {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()} @{" "}
            {date.toLocaleString("en-US", { hour: "numeric", hour12: true })}
          </td>
          <td className="p-4">{gig.event}</td>
          <td className="p-4">{gig.location}</td>
        </tr>
      );
  });

  return (
    <div className={className}>
      <h2 className="text-4xl">Upcoming Gigs</h2>
      <table className="w-full text-left mt-5 table-auto">
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

export default Upcoming;