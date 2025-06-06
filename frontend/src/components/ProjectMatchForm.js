import React, { useState } from "react";
import { matchProject } from "../api";

export default function ProjectMatchForm({ onResults }) {
  const [skills, setSkills] = useState("");
  const [domains, setDomains] = useState("");
  const [timeline, setTimeline] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await matchProject(
        {
          requiredSkills: skills.split(",").map(s => s.trim()),
          domains: domains.split(",").map(d => d.trim()),
          timeline
        },
        token
      );
      onResults(res.data);
    } catch (err) {
      alert("Matching failed or unauthorized.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Required Skills (comma separated)"
        value={skills}
        onChange={e => setSkills(e.target.value)}
      />
      <input
        type="text"
        placeholder="Domains (comma separated)"
        value={domains}
        onChange={e => setDomains(e.target.value)}
      />
      <input
        type="date"
        value={timeline}
        onChange={e => setTimeline(e.target.value)}
      />
      <button type="submit">Find Matches</button>
    </form>
  );
}
