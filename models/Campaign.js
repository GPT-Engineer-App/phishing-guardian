const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  template: { type: String, required: true },
  startDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  status: { type: String, default: 'Scheduled' },
  sentEmails: { type: Number, default: 0 },
  clickRate: { type: String, default: '0%' }
});

module.exports = mongoose.model('Campaign', CampaignSchema);
