import fs from "fs";

export interface IConfig {
    environmentName: string,
    port: number,
}

const environment = process.env.NODE_ENV || "development";
const fileName = `${environment}${environment == "" ? "" : "-"}config.json`;

export const config = JSON.parse(fs.readFileSync(`${__dirname}/${fileName}`, "utf-8")) as IConfig;
