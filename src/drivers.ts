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
  {
    strNumber: "16",
    strPlayer: "Charles Leclerc",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/f8o8ki1662886556.png",
    id: v4(),
  },
  {
    strNumber: "55",
    strPlayer: "Carlos Sainz Jr",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/gy6irj1679828162.png",
    id: v4(),
  },
  {
    strNumber: "81",
    strPlayer: "Oscar Piastri",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/tohxj41679834601.png",
    id: v4(),
  },
  {
    strNumber: "4",
    strPlayer: "Lando Norris",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/y8klca1679834536.png",
    id: v4(),
  },
  {
    strNumber: "14",
    strPlayer: "Fernando Alonso",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/rmczq21677931848.png",
    id: v4(),
  },
  {
    strNumber: "18",
    strPlayer: "Lance Stroll",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/25otva1679827137.png",
    id: v4(),
  },
  {
    strNumber: "10",
    strPlayer: "Pierre Gasly",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/da0kzg1679828862.png",
    id: v4(),
  },
  {
    strNumber: "31",
    strPlayer: "Esteban Ocon",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/4b668x1679828997.png",
    id: v4(),
  },
  {
    strNumber: "22",
    strPlayer: "Yuki Tsunoda",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/87jwjm1679834116.png",
    id: v4(),
  },
  {
    strNumber: "3",
    strPlayer: "Daniel Ricciardo",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/uouwkj1587471981.png",
    id: v4(),
  },
  {
    strNumber: "77",
    strPlayer: "Valtteri Bottas",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/hr020f1679829429.png",
    id: v4(),
  },
  {
    strNumber: "24",
    strPlayer: "Guanyu Zhou",
    strCutout: "https://www.thesportsdb.com/images/media/player/cutout/jjwp9y1679829494.png",
    id: v4(),
  },
];

export { drivers, fakeDrivers };
