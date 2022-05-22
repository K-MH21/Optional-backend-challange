/* find the elements  ref: page 8*/

/* start button*/
const startBtn = document.querySelector("#start");
/* the element that hve the question-card class*/
const cardEle = document.querySelector(".question-card");

/* the question title*/
const qTitleEle = document.querySelector("#question");
/* the element with id of answers*/
const choicesEle = document.querySelector("#answers");
/* the next button*/
const nextBtn = document.querySelector("#next");

let currentQuestion, qIndex, score = 0, points = 10, maxPoints;

/* function called when clicking on the start button*/
function start() {
    /* show the questions card cardEle*/
    cardEle.style.display = "block";
    /* hide the start button*/
    startBtn.style.display = "none";
    /* set the maximum points a user can get for solving all the questions*/
    maxPoints = questions.length * points;
    console.log('start function called');
    createQuestion();
}

function createQuestion() {
    console.log('Creating question');
    /* randomly select a question from the questions array*/
    /* qIndex is the index of the question in the array*/
    qIndex = Math.floor(Math.random() * questions.length);

    currentQuestion = questions[qIndex]

    qTitleEle.innerHTML = currentQuestion.text;  /* fill the question title ref: slide 14*/

    /* remove the div that wraps all the answer buttons*/
    choicesEle.removeChild(choicesEle.firstElementChild); /*ref: slide 15 and 23*/

    /* create a new div to wrap the choices*/
    let wrapper = document.createElement("div");
    /* add all the choices to this wrapper*/
    currentQuestion.choices.forEach(choice => {
        wrapper.appendChild(createChoice(choice))
    });
    /* add the wrapper to the choicesEle*/
    choicesEle.appendChild(wrapper);
    /* remove the selected question from the questions array so that it will not be shown again*/

    for (let i = questions.length + 1; i != 0; i--) {
        if (qIndex-- != 0) 
            questions.push(questions[0]);
        questions.shift();
    }
}

/* function to create a button for each choice*/
function createChoice(choice) {
    console.log('creating choice', choice);
    /* create a button element*/
    let element = document.createElement("button");
    element.classList.add("btn")
    element.innerText = choice.choice;
    /* create a data-correct attribute for the correct answer button*/
    if (choice.correct) {
        element.dataset["correct"] = true
    }
    /* add click event handler.*/
    element.addEventListener('click', answer)
    return element;
}
/* function to handle the click on an answer button*/
function answer(source) {
    const src = source.srcElement
    console.log('user choose ', src);
    if (src.dataset["correct"]) {
        /* add the 'correct' css class to both the button and the cardEle*/
        src.classList.add("correct");
        cardEle.classList.add("correct");
        /* update the user score*/
        score += points;
    } else {
        /* add the 'incorrect' css class to both the button and the cardEle*/

        src.classList.add('incorrect');
        cardEle.classList.add('incorrect');
    }
    proceed();
}
/* function called after the click of an answer button*/
function proceed() {
    /* disable the buttons so the user can't change his answer*/
    disableChoices();
    /* then show the next button to move to next question*/
    setTimeout(showNext, 1000);
}

/* function to disable the choices buttons*/
function disableChoices() {
    console.log('disabling the choices');
    /* find all choices buttons*/
    const choicesBtns = document.querySelectorAll("button:not(.hide)");
    choicesBtns.forEach(btn => {
        /* remove the click event handler so the button does nothing when clicked*/
        btn.removeEventListener('click', answer);
    });
}

/* function to show the next button*/
function showNext() {
    console.log('Show next button');
    /* remove the 'correct' and the 'incorrect' classes from the cardEle*/
    cardEle.classList.remove('correct');
    cardEle.classList.remove('incorrect');
    if (questions.length > 0) {
        /* remove the hide class from the nextBtn*/
        nextBtn.classList.remove('hide');
    }
    else {
        /* show the score*/
        qTitleEle.innerHTML = `Done! your score is ${score} / ${maxPoints}`
        // He didn't specifiy what to change, so I changed the title

        // Below code is added by me to remove the buttons when the game finishes
        choicesEle.removeChild(choicesEle.firstElementChild);
    }
}

/* function called when clicking on next button*/
function goNext() {
    /* hide the next button*/
    nextBtn.classList.add("hide")
    /* create a new question*/
    createQuestion();
}
const questions = [
    {
        text: "What is 2 + 2",
        choices: [
            {
                choice: 4, correct: true
            },
            {
                choice: 3
            },
            {
                choice: 0
            },

        ]
    },
    {
        text: "What is 2 x 2",
        choices: [
            {
                choice: 4, correct: true
            },

            {
                choice: 6
            },
            {
                choice: 3
            },
            {
                choice: 0
            },

        ]
    },
    {
        text: "What is 2 - 2",
        choices: [
            {
                choice: 0, correct: true
            },

            {
                choice: 6
            },
            {
                choice: 3
            },
            {
                choice: 4
            },

        ]
    },
]
