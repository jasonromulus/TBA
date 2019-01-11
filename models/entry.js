const mongoose = require('mongoose');

const Entry = mongoose.model('Entry', {
    title: String,
    date: Date,
    entry: String,
  });
  
module.exports = Entry;