const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "playerdb",
  password: "root",
  port: 5050,
});
const getPlayers = (request, response) => {
  pool.query(
    "SELECT * FROM players ORDER BY id_player ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getPlayerById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM players WHERE id_player = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getPlayerByLastName = (request, response) => {
  const lastname = request.params.lastname;
  console.log(lastname);
  pool.query(
    "SELECT * FROM players WHERE last_name = $1 ORDER BY id_player ASC",
    [lastname],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getPlayerByFirstName = (request, response) => {
  const firstname = request.params.firstname;
  pool.query(
    "SELECT * FROM players WHERE first_name = $1 ORDER BY id_player ASC",
    [firstname],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const getPlayerByNumber = (request, response) => {
  const number = parseInt(request.params.number);
  pool.query(
    "SELECT * FROM players WHERE jersey_number = $1 ORDER BY id_player ASC",
    [number],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const createPlayer = (request, response) => {
  const { last_name, first_name, jersey_number, age, position_player } =
    request.body;
  console.log(position_player);
  pool.query(
    "INSERT INTO players (last_name, first_name, jersey_number, age, position_player) VALUES ($1, $2,$3,$4, $5)",
    [last_name, first_name, jersey_number, age, position_player],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(results);
    }
  );
};
const updatePlayer = (request, response) => {
  const id = parseInt(request.params.id);
  const { last_name, first_name, jersey_number, age, position_player } =
    request.body;
  pool.query(
    "UPDATE players SET last_name = $1, first_name = $2, jersey_number = $3, age = $4, position_player = $5 WHERE id_player = $6",
    [last_name, first_name, jersey_number, age, position_player, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      var resultUpdate = true;
      if (results.rowCount == 0) {
        resultUpdate = false;
      }
      response.status(200).send({ success: resultUpdate });
    }
  );
};
const deletePlayer = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "DELETE FROM players WHERE id_player = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      var resultDelete = true;
      if (results.rowCount == 0) {
        resultDelete = false;
      }
      response.status(200).send({ success: resultDelete });
    }
  );
};
module.exports = {
  getPlayers,
  getPlayerById,
  getPlayerByLastName,
  getPlayerByFirstName,
  getPlayerByNumber,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
