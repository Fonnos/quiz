

let questionsfederalStates = [
    {
        "title": "Bundesländer",
        "image": "img/federalStates.png",
        "question": "Wie viele Bundesländer hat Deutscchland?",
        "answer_1": "12",
        "answer_2": "14",
        "answer_3": "16",
        "answer_4": "18",
        "right_answer": "3",
    },
    {
        "title": "Bundesländer",
        "image": "img/federalStates.png",
        "question": "Welches Bundesland ist nach Fläche das größte?",
        "answer_1": "Baden-Württemberg",
        "answer_2": "Bayern",
        "answer_3": "Niedersachsen",
        "answer_4": "Nordrhein-Westfalen",
        "right_answer": "2",
    },
    {
        "title": "Bundesländer",
        "image": "img/federalStates.png",
        "question": "Welches Bundesland zählt die größte Bevölkerung?",
        "answer_1": "Nordrhein-Westfalen",
        "answer_2": "Niedersachsen",
        "answer_3": "Bayern",
        "answer_4": "Baden-Württemberg",
        "right_answer": "1",
    },
    {
        "title": "Bundesländer",
        "image": "img/federalStates.png",
        "question": "Welches Bundesland hat die höchste Arbeitslosenquote?",
        "answer_1": "Berlin",
        "answer_2": "Bremen",
        "answer_3": "Mecklenburg-Vorpommern",
        "answer_4": "Nordrhein-Westfalen",
        "right_answer": "2",
    },
    {
        "title": "Bundesländer",
        "image": "img/federalStates.png",
        "question": "Welches ist das jüngste der alten Bundesländern?",
        "answer_1": "Schleswig-Holstein",
        "answer_2": "Hessen",
        "answer_3": "Brandenburg",
        "answer_4": "Saarland",
        "right_answer": "4",
    },
];

currentQuestions = [];
currentArray = 0;
currentQuest = 1;







function renderGeographie() {
    let image = document.getElementById("mainImg");
    let content = document.getElementById("mainContent");
    image.classList.add(`p-16`);
    image.src = `
    img/geographie.png
    `;
    title.innerHTML = `
    Wähle ein Thema aus!
    `;
    content.innerHTML = `
    <button onclick="renderCurrentQuestions(questionsfederalStates)" type="button" class="m-16 btn btn-secondary btn-lg">Bundesländer</button>
    <button onclick="renderQuestions(questionstest)" type="button" class="m-16 btn btn-secondary btn-lg">test</button>
    `;
}

function renderCurrentQuestions(array) {
    currentQuestions = array;
    renderQuestions();
}

function nextQuestion() {
    currentArray++;
    currentQuest++;
    renderQuestions();
}

function checkAnswer(o) {
    console.log(o);
}

function renderQuestions() {
    let title = document.getElementById("title");
    let image = document.getElementById("mainImg");
    let quest = document.getElementById("question");
    let content = document.getElementById("mainContent");
    let footer = document.getElementById("cardFooter");
    
    let maxQuest = currentQuestions.length;
    let question = currentQuestions[currentArray];
    image.src = `
        ${question['image']}
    `;
    title.innerHTML = `
        ${question['title']}
    `;
    quest.innerHTML = `
        ${question['question']}
    `;
    content.innerHTML = `
        <div class="card answer" onclick="checkAnswer(1)">
            <div class="card-body">
                ${question['answer_1']}
            </div>
        </div>
        <div class="card answer" onclick="checkAnswer(2)">
            <div class="card-body">
                ${question['answer_2']}
            </div>
        </div>
        <div class="card answer" onclick="checkAnswer(3)">
            <div class="card-body">
                ${question['answer_3']}
            </div>
        </div>
        <div class="card answer" onclick="checkAnswer(4)">
            <div class="card-body">
                ${question['answer_4']}
            </div>
        </div>
    `;
    footer.innerHTML = `
        <div>
            <b>${currentQuest}</b> von <b>${maxQuest}</b> Fragen
        </div>
        <button onclick="nextQuestion()" class="btn btn-secondary">nächste Frage</button>
    `;
}

