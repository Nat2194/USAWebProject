-- insert value
INSERT INTO players (first_name, last_name, jersey_number, age, position_player)
VALUES ('LeBron', 'James', 6, 37, 'SF'),
('Stephen', 'Curry', 30, 34, 'PG'),
('Kevin', 'Durant', 7, 34, 'PF'),
('Anthony', 'Edwards', 1, 21, 'SG'),
('Joel', 'Embiid', 21, 28, 'C'),
('Anthony', 'Davis', 3, 29, 'PF');

INSERT INTO teams (city, name_team, conf, place)
VALUES ('Los Angeles', 'Lakers', 'WEST', 12),
('Golden State', 'Warriors', 'WEST', 1),
('Brooklyn','Nets', 'EAST', 7),
('Minnesota', 'Timberwolves', 'WEST', 3),
('Philadelphia', 'Sixers', 'EAST', 5),
('Boston', 'Celtics', 'EAST', 1);

INSERT INTO contracts (id_player, id_team, salary, duration)
VALUES (1, 1, 85655532, 2),
(2, 2, 215353664, 4),
(3, 3, 194219320, 4),
(4, 4, 44271137, 4),
(5, 5, 147710050, 5),
(6, 1, 189903600, 5);

INSERT INTO stats (id_player, year, games_played, points_average, assists_average, rebounds_average, blocks_average, steals_average, minutes_average, turnovers_average)
VALUES (1, '2021-22', 56, 30.3, 6.2, 8.2, 1.1, 1.3, 37.2, 3.5),
(2, '2021-22', 64, 25.5, 6.3, 5.2, 0.4, 1.3, 34.5, 3.2),
(3, '2021-22', 55, 29.9, 6.4, 7.4, 0.9, 0.9, 37.2, 3.5),
(4, '2021-22', 72, 21.3, 3.8, 4.8, 0.6, 1.5, 34.3, 2.6),
(5, '2021-22', 68, 30.6, 4.2, 11.7, 1.5, 1.1, 33.8, 3.1),
(6, '2021-22', 40, 23.2, 3.1, 9.9, 2.3, 1.2, 35.1, 2.1);