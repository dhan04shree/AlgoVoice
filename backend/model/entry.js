const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  // solutionText: {
  //   type: String,
  // },
  queUrl:{
    type:String,
    default:''
  },
  voiceUrl: {
    type: String,
    default: '',
  },
  tags: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

// Auto-update updatedAt on save
entrySchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry
