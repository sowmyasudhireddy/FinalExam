
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionSchema = new Schema({
    "category": String,
    "type": String,
    "difficulty": String,
    "question": String,
    "correct_answer": String,
    "incorrect_answers": Array,
    "options": Array
});

module.exports = mongoose.model('Question', questionSchema, 'Question');