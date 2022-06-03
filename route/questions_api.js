import express from 'express';
import {checkAnswer, getQuestions} from "./../models/QuizController.js";

const questionsRouter = express.Router();

questionsRouter.post('/', (req, res) => {
    res.status(200).json(JSON.parse({isTrue: checkAnswer(req.body)}));
});

questionsRouter.get('/', (req, res) => {
    res.status(200).json(getQuestions());
});

export default questionsRouter