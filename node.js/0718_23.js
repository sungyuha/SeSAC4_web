const os = require("os");

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());

const path = require("path");

console.log(path.sep);
const string = __filename;
console.log( path.extname(string));

console.log(path.parse(__filename));