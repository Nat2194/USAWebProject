const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const Service = require("./service.js");

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

app.get("/players", Service.getPlayers);
app.get("/players/id=:id", Service.getPlayerById);
app.get("/players/lastname=:lastname", Service.getPlayerByLastName);
app.get("/players/firstname=:firstname", Service.getPlayerByFirstName);
app.get("/players/number=:number", Service.getPlayerByNumber);
app.post("/players", Service.createPlayer);
app.put("/players/:id", Service.updatePlayer);
app.delete("/players/:id", Service.deletePlayer);

app.get("/api/ping", (req, res) => {
  res.send({
    message: "test".repeat(req.query.value),
    value: req.query.value,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
