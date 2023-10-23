import { v4 } from "uuid";

const drivers: { firstName: string; lastName: string }[] = [
  { firstName: "Max", lastName: "Verstappen" },
  { firstName: "Lewis", lastName: "Hamilton" },
  { firstName: "Sergio", lastName: "Perez" },
  { firstName: "George", lastName: "Russell" },
  { firstName: "Charles", lastName: "Leclerc" },
  { firstName: "Carlos", lastName: "Sainz%Jr" },
  { firstName: "Lando", lastName: "Norris" },
  { firstName: "Oscar", lastName: "Piastri" },
  { firstName: "Fernando", lastName: "Alonso" },
  { firstName: "Lance", lastName: "Stroll" },
  { firstName: "Esteban", lastName: "Ocon" },
  { firstName: "Pierre", lastName: "Gasly" },
  { firstName: "Alexander", lastName: "Albon" },
  { firstName: "Logan", lastName: "Sargeant" },
  { firstName: "Valtteri", lastName: "Bottas" },
  { firstName: "Guanyu", lastName: "Zhou" },
  { firstName: "Nico", lastName: "Hülkenberg" },
  { firstName: "Kevin", lastName: "Magnussen" },
  { firstName: "Yuki", lastName: "Tsunoda" },
  { firstName: "Daniel", lastName: "Ricciardo" },
];

const fakeDrivers = [
  {
    strNumber: "23",
    strPlayer: "Alexander Albon",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/2f73pc1679830795.png",
    id: v4(),
  },
  {
    strNumber: "1",
    strPlayer: "Max Verstappen",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/g9ajwx1662294143.png",
    id: v4(),
  },
  {
    strNumber: "11",
    strPlayer: "Sergio Perez",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/tk90eh1662920615.png",
    id: v4(),
  },
  {
    strNumber: "44",
    strPlayer: "Lewis Hamilton",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/h4xxob1679827472.png",
    id: v4(),
  },
  {
    strNumber: "63",
    strPlayer: "George Russell",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/8fv6gy1679827271.png",
    id: v4(),
  },
  {
    strNumber: "27",
    strPlayer: "Nico Hulkenberg",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/7jagwi1679829841.png",
    id: v4(),
  },
  {
    strNumber: "20",
    strPlayer: "Kevin Magnussen",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/49jjnl1679829983.png",
    id: v4(),
  },
  {
    strNumber: "2",
    strPlayer: "Logan Sargeant",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/0c62j51679830992.png",
    id: v4(),
  },
];

export { drivers, fakeDrivers };
