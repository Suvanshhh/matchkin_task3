const mongoose = require('mongoose');

const consultantProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  skills: [String],
  domains: [String],
  experience: Number,
  availability: Date
});

module.exports = mongoose.model('ConsultantProfile', consultantProfileSchema);
