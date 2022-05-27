import Database from 'better-sqlite3';

const db = new Database('OBCDatabase.db', {fileMustExist: true});

function getQuestions() {
    return db.prepare('SELECT id, text, choice1, choice2, choice3, choice4 FROM questions').all();
}

function addQuestion(info) {
    const stmt = db.prepare('INSERT INTO questions(text, choice1, choice2, choice3, choice4, answer_index) VALUES (?, ?, ?, ?, ? ,?)')
    stmt.run(info.text, info.choice1, info.choice2, info.choice3, info.choice4, info.answerIndex);
}

function getScores() {
    return db.prepare('SELECT * FROM scores').all();
}

function checkAnswer(answer) {
    let answerIndex = db.prepare('SELECT answer_index FROM questions WHERE id = ?').pluck().get(answer.id);
    return answer.answer == db.prepare(`SELECT choice${answerIndex} FROM questions WHERE id = ?`).pluck().get(answer.id);
}

function addScore(data) {
    const stmt = db.prepare('INSERT INTO scores(user, score) VALUES (?, ?)');
    stmt.run(data.user, data.score);
}

export {getQuestions, addQuestion, getScores, checkAnswer, addScore}