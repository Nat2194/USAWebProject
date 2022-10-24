const knex = require("knex");

class service {
  constructor() {
    this.pg = knex({
      client: "pg",
      connection: {
        host: "localhost",
        port: 5050,
        user: "postgres",
        password: "root",
        database: "playerdb",
        charset: "utf8",
      },
    });
  }

  getPlayers = (req, res) => {
    this.pg("players").then((data) => {
      res.json(data);
    });
  };

  getPlayerById = (req, res) => {
    const id_player = parseInt(req.params.id);
    this.pg("players")
      .where({ id_player })
      .then((data) => {
        res.json(data);
      });
  };

  getPlayerByLastName = (req, res) => {
    const last_name = req.params.lastname;
    this.pg("players")
      .where({ last_name })
      .then((data) => {
        res.json(data);
      });
  };

  getPlayerByFirstName = (req, res) => {
    const first_name = req.params.firstname;
    this.pg("players")
      .where({ first_name })
      .then((data) => {
        res.json(data);
      });
  };

  getPlayerByNumber = (req, res) => {
    const jersey_number = parseInt(req.params.number);
    this.pg("players")
      .where({ jersey_number })
      .then((data) => {
        res.json(data);
      });
  };

  createPlayer = (req, res) => {
    const { last_name, first_name, jersey_number, age, position_player } =
      req.body;
    this.pg("players")
      .insert({ last_name, first_name, jersey_number, age, position_player })
      .then((data) => {
        console.log(data);
        res.json(data);
      });
  };

  updatePlayer = (req, res) => {
    const id_player = parseInt(req.params.id);
    const { last_name, first_name, jersey_number, age, position_player } =
      req.body;
    this.pg("players")
      .where({ id_player })
      .update({ last_name, first_name, jersey_number, age, position_player })
      .then((data) => {
        res.json(data);
      });
  };

  deletePlayer = (req, res) => {
    const id_player = parseInt(req.params.id);
    this.pg("players")
      .where({ id_player })
      .del()
      .then((data) => {
        res.json(data);
      });
  };
}

module.exports = new service();
