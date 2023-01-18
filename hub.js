const { startDriver } = require("./src/driver/handler");
const { startVendor } = require("./src/vendor/handler");

startDriver();
startVendor();

console.log("Everything is started!");