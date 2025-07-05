const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
  owner :{
    type : Schema.Types.ObjectId,
    ref : "User",
    required: true
    },
},{
  timestamps: true
});

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry
