const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/players", db.getPlayers);
app.get("/players/id=:id", db.getPlayerById);
app.get("/players/lastname=:lastname", db.getPlayerByLastName);
app.get("/players/firstname=:firstname", db.getPlayerByFirstName);
app.get("/players/number=:number", db.getPlayerByNumber);
app.post("/players", db.createPlayer);
app.put("/players/:id", db.updatePlayer);
app.delete("/players/:id", db.deletePlayer);

app.get("/api/ping", (req, res) => {
  res.send({
    message: "test".repeat(req.query.value),
    value: req.query.value,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
