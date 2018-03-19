const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  done: { type: Boolean, required: true },
  user: { type: Schema.ObjectId, ref: 'Author', required: true }
});

module.exports = mongoose.model('Todo', TodoSchema);