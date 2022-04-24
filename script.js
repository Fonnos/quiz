

const questionsfederalStates = [
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

let i = 0;


function nextQuestion(z) {
    i++;
    renderQuestions(z);
}



function renderGeographie() {
    let image = document.getElementById("mainImg");
    let title = document.getElementById("title");
    let content = document.getElementById("mainContent");
    image.classList.add(`p-16`);

    image.src = `
    img/geographie.png
    `;

    title.innerHTML = `
    Wähle ein Thema aus!
    `;

    content.innerHTML = `
    <button onclick="renderQuestions(questionsfederalStates)" type="button" class="m-16 btn btn-secondary btn-lg">Bundesländer</button>
    `;
}

function renderQuestions(arrey) {
    let image = document.getElementById("mainImg");
    let title = document.getElementById("title");
    let quest = document.getElementById("question");
    let content = document.getElementById("mainContent");
    let footer = document.getElementById("cardFooter");
    let maxQuest = arrey.length;
    let question = arrey[i];
    let currentQuest = i + 1;


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
    <div class="card answer" onclick="checkAnswer(answer_1)">
        <div class="card-body">
            ${question['answer_1']}
        </div>
    </div>

    <div class="card answer" onclick="checkAnswer(answer_2)">
        <div class="card-body">
            ${question['answer_2']}
        </div>
    </div>

    <div class="card answer" onclick="checkAnswer(answer_3)">
        <div class="card-body">
            ${question['answer_3']}
        </div>
    </div>

    <div class="card answer" onclick="checkAnswer(answer_4)">
        <div class="card-body">
            ${question['answer_4']}
        </div>
    </div>
    `;

    footer.innerHTML = `
    <div>
        <b>${currentQuest}</b> von <b>${maxQuest}</b> Fragen
    </div>
    <button onclick="nextQuestion(${arrey})" type="button" class="btn btn-secondary">nächste Frage</button>
    `;


}