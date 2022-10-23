CREATE DATABASE playerdb;

\c playerdb;

CREATE TYPE conference as ENUM  ('EAST', 'WEST');
CREATE TYPE position_role as ENUM  ('PG', 'SG', 'SF', 'PF', 'C');

-- create a table
CREATE TABLE teams (
    id_team SERIAL PRIMARY KEY,
    city varchar(50) NOT NULL,
    name_team varchar(50) NOT NULL,
    conf conference NOT NULL,
    place INTEGER NOT NULL
);

CREATE TABLE players (
  id_player SERIAL PRIMARY KEY,
  last_name varchar(50) NOT NULL,
  first_name varchar(50) NOT NULL,
  jersey_number INTEGER,
  age INTEGER NOT NULL,
  position_player position_role NOT NULL
);

CREATE TABLE contracts (
    id_contract SERIAL PRIMARY KEY,
    id_player INTEGER NOT NULL,
    id_team INTEGER NOT NULL,
    salary float NOT NULL,
    duration INTEGER NOT NULL,

    constraint fk_player
      FOREIGN KEY(id_player) 
	  references players (id_player),

    constraint fk_team
      FOREIGN KEY (id_team) 
	  references teams (id_team)
);

CREATE TABLE stats (
    id_stats SERIAL PRIMARY KEY,
    id_player INTEGER NOT NULL,
    year varchar(50) NOT NULL,
    games_played INTEGER,
    points_average float,
    assists_average float,
    rebounds_average float,
    blocks_average float,
    steals_average float,
    minutes_average float,
    turnovers_average float,

    constraint fk_player
      FOREIGN KEY(id_player) 
	  references players (id_player)
);
