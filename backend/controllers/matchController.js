const ConsultantProfile = require('../models/ConsultantProfile');

exports.matchConsultants = async (req, res) => {
  const { requiredSkills, domains, timeline } = req.body;
  const consultants = await ConsultantProfile.find({});
  const scored = consultants.map(c => {
    const skillOverlap = c.skills.filter(s => requiredSkills.includes(s)).length;
    const domainOverlap = c.domains.filter(d => domains.includes(d)).length;
    const score = skillOverlap * 2 + domainOverlap;
    const explanation = `Skill overlap: ${skillOverlap}, Domain overlap: ${domainOverlap}`;
    return { consultant: c, score, explanation };
  }).sort((a, b) => b.score - a.score);
  res.json(scored.slice(0, 3));
};
