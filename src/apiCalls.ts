import { Driver } from "./types";

export async function getDriverDetails(name: { firstName: string, lastName: string } ) {
  const url: string = "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=" + name.firstName + '%' + name.lastName;
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error("HTTP Status Code: " + response.status);
    }
    const data = await response.json();
    return data.player[0] as Driver;
  } catch (err) {
    console.log("Can't get the data." + err);
  }
}
