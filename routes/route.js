const express = require('express');
const router = express.Router();

const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const Question = require('../models/question');

const port = 27017;

const db = 'mongodb://localhost:27017/questions';

mongoose.connect(db, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    else {
        console.log(`Mongodb connected succesfuly at ${port}`);
    }
}, { useNewUrlParser: true });


router.get('/questions', (req, res) => {
    Question.find((err, questions) => {
        if (err) {
            console.log(err);
            throw err;
        } else {
            res.json(questions);
        }
    });
});

router.post('/addquestion', (req, res) => {
    const newQuestion = new Question();
    newQuestion.category = req.body.category;
    newQuestion.type = req.body.type;
    newQuestion.difficulty = req.body.difficulty;
    newQuestion.question = req.body.question;
    newQuestion.correct_answer = req.body.correct_answer;
    newQuestion.incorrect_answer = req.body.incorrect_answer;
    newQuestion.options = req.body.options;
    newQuestion.save((err, Question) => {
        if (err) {
            throw err;
        }
        else {
            res.json(Question);
        }
    });
});

router.post('/validate', (req, res) => {
    User.findOne({ correct_answer: req.body.correct_answer, SelectedOption: req.body.incorrect_answers }, (err, data) => {
        if (err) {
            console.log(err)
            throw err;
        }
        else {
            if (data === SelectedOption) {
                res.json({ Check: true });
            }
            else {
                res.json({ Check: false });
            }
        }
    });
});

router.post('/option', (req, res) => {
    const newSelectedOption = new Option();
    newSelectedOption.option = req.body.option;
    newUser.save((err, SelectedOption) => {
        if (err) {
            throw err;
        }
        else {
            res.json(SelectedOption);
        }
    });
});

router.delete('/delquestion/:id', (req, res, next) => {
    Question.remove({ _id: req.params.id }, (err, result) => {
        if (err)
            res.json("unable to delete the question " + err);
        else
            res.json("question deleted successfully " + result);
    });
});

module.exports = router;