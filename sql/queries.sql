\! echo "all the players with a PPG higher than 30"
SELECT name_player, name_team, position_player FROM stats, players, contracts, teams
WHERE stats.points_average >= 30
AND players.id_player = stats.id_player
AND contracts.id_player = players.id_player
AND contracts.id_team = teams.id_team;