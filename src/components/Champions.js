import React from "react";
import { nanoid } from "nanoid";

export default function Champions({ data }) {
  // Extract winning team for each year and sort array by inverse years
  const winners = [];

  data.forEach((team) => {
    team.seasons.forEach((season) => {
      if (season.final === 1) {
        winners.push({ year: season.season, winner: team.name });
      }
    });
  });

  winners.sort((a, b) => {
    if (a.year > b.year) {
      return -1;
    } else {
      return 1;
    }
  });

  const tableRows = winners.map((season) => {
    return (
      <tr key={nanoid()}>
        <td>{season.year}</td>
        <td>{season.winner}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr className="title">
          <th>League Champions</th>
        </tr>
        <tr className="sub-title">
          <th>Season</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
