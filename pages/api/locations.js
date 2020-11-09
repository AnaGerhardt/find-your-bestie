const db = require("../../lib/db").instance;

export default async (req, res) => {
  const data = await db.any("SELECT * FROM locations");

  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify({ message: "success", data }));
};
