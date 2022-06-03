import express from 'express';
import {getScores, addScore} from "./../models/QuizController.js";

const scoresRouter = express.Router();

scoresRouter.get('/', (req, res) => {
    res.status(200).json(getScores());
});

// Might need to modify this method
scoresRouter.post('/', (req, res) => {
    addScore(req.body);
    next();
});

export default scoresRouter;