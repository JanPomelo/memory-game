import { Driver } from "./types";
import { v4 } from "uuid";

export async function getDriverDetails(name: { firstName: string, lastName: string } ) {
  const url: string = "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=" + name.firstName + '%' + name.lastName;
  try {
    const response = await fetch(url, {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error("HTTP Status Code: " + response.status);
    }
    const data = await response.json();
    const driver = data.player[0] as Driver;
    driver.id = v4();
    return driver;
  } catch (err) {
    console.log("Can't get the data." + err);
  }
}
