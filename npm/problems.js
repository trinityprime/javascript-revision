//  Q1

import { camelCase } from "lodash-es";

let result = camelCase("T1 will win worlds!");

console.log(result);

import chalk from "chalk";

let oner = "Jungler";
let faker = "Mid";
let guma = "ADC";
let zeus = "Top";
let keria = "Supp";

console.log(chalk.blue.strikethrough(oner));
console.log(chalk.red(faker));
console.log(chalk.underline.bgWhite(zeus));
console.log(chalk.green(keria));

import fs from "fs-extra";

const file = "npm/hello.txt";
fs.outputFileSync(file, "hello, world!");

