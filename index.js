const express = require("express");
const PORT = 5002;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => console.log(`Server at ${PORT}`));
