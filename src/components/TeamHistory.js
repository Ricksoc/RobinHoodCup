import React from "react";
import { nanoid } from "nanoid";

export default function TeamHistory({ data }) {
  const teamData = data.map((team) => {
    return (
      <table key={nanoid()}>
        <thead>
          <tr>
            <th colSpan={6}>{team.name}</th>
          </tr>
          <tr>
            <th>Season</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
            <th>Regular Rank</th>
            <th>Final Rank</th>
          </tr>
        </thead>
        <tbody>
          {team.seasons
            .slice(0)
            .reverse()
            .map((season) => {
              return (
                <tr key={nanoid()}>
                  <td>{season.season}</td>
                  <td>{season.wins}</td>
                  <td>{season.losses}</td>
                  <td>{season.points}</td>
                  <td>{season.rs}</td>
                  <td>{season.final}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  });

  return teamData;
}
