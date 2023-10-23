//import { getDriverDetails } from "../apiCalls";
import { fakeDrivers } from "../drivers";
import MemoryCard from "./MemoryCard";

/*
async function getAllDetails(driverArr: { firstName: string; lastName: string }[]) {
  const allDriverDetails: Driver[] = [];
  for (let i = 0; i < driverArr.length; i++) {
    //const driverInfos = await getDriverDetails({ firstName: driverArr[i].firstName, lastName: driverArr[i].lastName });
    //driverInfos.id = uuidv4();
    //allDriverDetails.push(driverInfos!);
    allDriverDetails.push(albon);
  }
  //allDriverDetails.push(albon);
  return allDriverDetails;
}
*/

const allDetails = fakeDrivers;

const GameField = () => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-5 justify-around">
      {allDetails.map((driver) => {
        return (
          <MemoryCard
            driverNumber={driver.strNumber}
            driverName={driver.strPlayer}
            imageSrc={driver.strCutout}
            key={driver.id}
          ></MemoryCard>
        );
      })}
    </div>
  );
};

export default GameField;
