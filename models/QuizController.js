const Database = reqiure('better-sqlite3');

const db = new Database('OBCDatabase.db', {fileMustExist: true});

function getQuestions() {
    let arr = [];
    const stmt = db.prepare('SELECT id, text, choice1, choice2, choice3, choice 4 FROM questions WHERE id = ?');
    for (let i = 1; stmt.get(i); i++) 
        arr.push(stmt.get(i));
    return arr;
}

function addQuestion(info) {

}

function getScores() {

}

function checkAnswer(answer) {

}

function addScore(data) {
    
}