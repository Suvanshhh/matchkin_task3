import React from "react";

export default function MatchResults({ results }) {
  if (!results || results.length === 0) return <div>No matches found.</div>;
  return (
    <div>
      <h3>Top Matches:</h3>
      <ul>
        {results.map((res, idx) => (
          <li key={idx}>
            <strong>Consultant:</strong> {res.consultant.name || "N/A"}<br />
            <strong>Score:</strong> {res.score}<br />
            <strong>Explanation:</strong> {res.explanation}
          </li>
        ))}
      </ul>
    </div>
  );
}
