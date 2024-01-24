const Upcoming = ({ className }) => {
  const gigList = [
    {
      date: (new Date("01/26/2024")),
      event: "BOAT GIG",
      location: "London, GB",
    },
    {
      date: (new Date("02/02/2024 15:15:00")),
      event: "Live Music Now",
      location: "Southgate Beaumont Carehome",
    },
    {
      date: (new Date("02/02/2024 21:00:00")),
      event: "Livestream",
      location: "Instagram",
      link: "https://www.google.com",
    },
    {
      date: (new Date("02/09/2024")),
      event: "Breaking Sound",
      location: "Canal Bar",
      link: "https://tixr.com/e/92914",
    },
    {
      date: (new Date("02/19/2024")),
      event: "BOAT GIG",
      location: "",
      link: "https://www.google.com",
    },
    {
      date: (new Date("02/20/2024")),
      event: "BOAT GIG",
      location: "",
      link: "https://www.google.com",
    },
    {
      date: (new Date("02/24/2024")),
      event: "BOAT GIG",
      location: "",
      link: "https://www.google.com",
    },
    {
      date: (new Date("03/09/2024")),
      event: "BOAT GIG",
      location: "",
      link: "https://www.google.com",
    },
    {
      date: (new Date("03/22/2024")),
      event: "BOAT GIG",
      location: "",
      link: "https://www.google.com",
    },
  ];

  const mappedGigList = gigList.map((gig, i) => {
    let today = new Date();
    let time = gig.date.toLocaleString("en-US", { hour: "numeric", hour12: true });

    if (gig.date < today) {
      // Strikethrough old dates
      console.log("old date");
    }

      return (
        <tr
          key={i}
          className="border-y border-white/40 hover:bg-black/30 cursor-pointer ease-in-out duration-100"
          onClick={() => window.open(gig.link, "_blank")}
        >
          <td className="p-4">
            {gig.date.getDate()}-{gig.date.getMonth() + 1}-{gig.date.getFullYear()}
            {time != "12 AM" &&  ` @ ${time}`}
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
