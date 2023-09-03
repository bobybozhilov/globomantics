import HouseRow from "./houserRow";

const houses = [
  {
    id: 1,
    address: "Plovdiv, Pobeda 31",
    country: "Bulgaria",
    price: 1000000
  },
  {
    id: 2,
    address: "Plovdiv, Geo Milev 25",
    country: "Bulgaria",
    price: 2000000
  }
];

const HouseList = () => {
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houser currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map(h => <HouseRow key={h.id} house={h} />)}
        </tbody>
      </table>
    </>
  )
}

export default HouseList;