import fs from "fs"

let environment = process.env.NODE_JS_ENV || "dev";
let fileName = `${environment}${environment == "" ? "" : "-"}config.json`;

export const config = JSON.parse(fs.readFileSync(`${__dirname}/${fileName}`, 'utf-8'));