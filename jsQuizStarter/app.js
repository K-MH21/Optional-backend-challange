/* find the elements  ref: page 8*/

/* start button*/
// const startBtn =
/* the element that hve the question-card class*/
// const cardEle =

/* the question title*/
// const qTitleEle =
/* the element with id of answers*/
// const choicesEle =
/* the next button*/
// const nextBtn =

let currentQuestion, qIndex, score = 0, points = 10, maxPoints;

/* function called when clicking on the start button*/
function start() {
    /* show the questions card cardEle*/

    /* hide the start button*/

    /* set the maximum points a user can get for solving all the questions*/
    // maxPoints =
    console.log('start function called');
    createQuestion();
}

function createQuestion() {
    console.log('Creating question');
    /* randomly select a question from the questions array*/
    /* qIndex is the index of the question in the array*/
    // qIndex =
    // currentQuestion = questions[qIndex]

    // qTitleEle  /* fill the question title ref: slide 14*/

    /* remove the div that wraps all the answer buttons*/
    // choicesEle /*ref: slide 15 and 23*/

    /* create a new div to wrap the choices*/
    // let wrapper =
    /* add all the choices to this wrapper*/
    // currentQuestion.choices.forEach(choice => {
    //     wrapper.appendChild(createChoice(choice))
    // });
    /* add the wrapper to the choicesEle*/
    // choicesEle
    /* remove the selected question from the questions array so that it will not be shown again*/
    // questions
}

/* function to create a button for each choice*/
function createChoice(choice) {
    console.log('creating choice', choice);
    /* create a button element*/
    // let element =
    // element.classList.add("btn")
    // element.innerText = choice.choice;
    /* create a data-correct attribute for the correct answer button*/
    // if (choice.correct) {
    //     element.dataset["correct"] = true
    // }
    /* add click event handler.*/
    // element.addEventListener('click', answer)
    // return element;
}
/* function to handle the click on an answer button*/
function answer(source) {
    const src = source.srcElement
    console.log('user choose ', src);
    if (src.dataset["correct"]) {
        /* add the 'correct' css class to both the button and the cardEle*/
        // src
        // cardEle
        /* update the user score*/
        // score
    } else {
        /* add the 'incorrect' css class to both the button and the cardEle*/

        // src
        // cardEle
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
        // btn
    });
}

/* function to show the next button*/
function showNext() {
    console.log('Show next button');
    /* remove the 'correct' and the 'incorrect' classes from the cardEle*/
    // cardEle
    // cardEle
    if (questions.length > 0) {
        /* remove the hide class from the nextBtn*/
        // nextBtn
    }
    else {
        /* show the score*/
        //  = `Done! your score is ${score} / ${maxPoints}`
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
