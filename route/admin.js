import express from'express';
import {body, validationResult} from 'express-validator';
import {addQuestion} from "./../models/QuizController.js";

const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
    res.status(200).render('admin.njk', {
        message: "ADD A Question",
        getRequest: true
    })
});

adminRouter.post('/',
                body("answerIndex").isInt({ min: 0, max: 4 }),
                body("choice1", "choice2", "choice3", "choice4").notEmpty(),
                (req, res) => {
                    if (!validationResult(req).isEmpty()) {
                        res.status(400).render('admin.njk', {
                            message: "The insertion was done unsuccessfully"
                        });
                    }
                    else {
                        addQuestion(req.body)
                        res.status(200).render('admin.njk', {
                            message: "The insertion was done successfully"
                        })   
                    }
});

export default adminRouter;