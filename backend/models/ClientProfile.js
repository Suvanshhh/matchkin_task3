const mongoose = require('mongoose');

const clientProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  company: String
});

module.exports = mongoose.model('ClientProfile', clientProfileSchema);
