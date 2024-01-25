import {  fs } from "fs";
const filePath = "./package.json";

const packageJson = JSON.parse(fs.readFileSync(filePath).toString());
packageJson.buildDateTime = new Date().getTime(); // this will be current Time

fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2));

const jsonData = {
  buildDateTime: packageJson.buildDateTime,
};

const jsonContent = JSON.stringify(jsonData);

fs.writeFile("./public/meta.json", jsonContent, "utf8", function (error) {
  if (error) {
    console.log("An error occured while saving build date and time to meta.json");
    return console.log(error);
  }

  console.log("Latest build date and time updated in meta.json file");
});