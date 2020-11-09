const pgp = require("pg-promise")();

// Use a symbol to store a global instance of a connection, and to access it from the singleton.
const DB_KEY = Symbol.for("MyApp.db");
const globalSymbols = Object.getOwnPropertySymbols(global);
const hasDb = globalSymbols.indexOf(DB_KEY) > -1;
if (!hasDb) {
  global[DB_KEY] = pgp(process.env.DATABASE_API_URL);
}

// Create and freeze the singleton object so that it has an instance property.
const singleton = {};
Object.defineProperty(singleton, "instance", {
  get: function () {
    return global[DB_KEY];
  },
});
Object.freeze(singleton);

module.exports = singleton;
