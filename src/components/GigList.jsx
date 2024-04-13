import GigListItem from "./GigListItem";
import gigList from "./gigs.json"

const GigList = () => {
  console.log(gigList)

  const mappedGigList = gigList.map((gig, i) => {
      return (
        <GigListItem key={i} gig={gig} />
      );
  });

  return (
    <div className="w-full sm:w-[600px] text-slate-50 drop-shadow-lg">
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

export default GigList;
