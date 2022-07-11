import React from "react";
import { nanoid } from "nanoid";

export default function Performance({ data }) {
  const teamData = [];

  // Use raw data to create team summaries

  data.forEach((team) => {
    let wins = 0;
    let games = 0;
    let points = 0;
    let regRank = 0;
    let finRank = 0;
    let title = 0;

    team.seasons.forEach((season) => {
      wins += season.wins;
      games += season.wins + season.losses + season.ties;
      points += season.points;
      regRank += season.rs;
      finRank += season.final;
      if (season.final === 1) {
        title += 1;
      }
    });
    let winLoss = (wins / games).toFixed(2);
    let avgRegRank = (regRank / team.seasons.length).toFixed(2);
    let avgFinRank = (finRank / team.seasons.length).toFixed(2);

    teamData.push({
      team: team.name,
      winRatio: winLoss,
      totalPoints: points,
      regRank: avgRegRank,
      finRank: avgFinRank,
      titles: title,
    });
  });

  teamData.sort((a, b) => {
    if (a.titles > b.titles) {
      return -2;
    } else if (a.titles === b.titles && a.winRatio > b.winRatio) {
      return -1;
    } else {
      return 1;
    }
  });

  console.log(teamData);

  const tableRows = teamData.map((team) => {
    return (
      <tr key={nanoid()}>
        <td>{team.team}</td>
        <td>{team.winRatio}</td>
        <td>{team.totalPoints}</td>
        <td>{team.regRank}</td>
        <td>{team.finRank}</td>
        <td>{team.titles}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr className="title">
          <th>Team Performance</th>
        </tr>
        <tr className="sub-title">
          <th>Team</th>
          <th>Win Ratio</th>
          <th>Total Points</th>
          <th>Avg Regular Rank</th>
          <th>Avg Final Rank</th>
          <th>Titles</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
