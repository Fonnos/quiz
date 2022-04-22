let questionsFederalStates = [
    {
        "question": "Wie viele Bundesländer hat Deutscchland?",
        "answer_1": "12",
        "answer_2": "14",
        "answer_3": "16",
        "answer_4": "18",
        "right_answer": "3",
    },
    {
        "question": "Welches Bundesland ist nach Fläche das größte?",
        "answer_1": "Baden-Württemberg",
        "answer_2": "Bayern",
        "answer_3": "Niedersachsen",
        "answer_4": "Nordrhein-Westfalen",
        "right_answer": "2",
    },
    {
        "question": "Welches Bundesland zählt die größte Bevölkerung?",
        "answer_1": "Nordrhein-Westfalen",
        "answer_2": "Niedersachsen",
        "answer_3": "Bayern",
        "answer_4": "Baden-Württemberg",
        "right_answer": "1",
    },
    {
        "question": "Welches Bundesland hat die höchste Arbeitslosenquote?",
        "answer_1": "Berlin",
        "answer_2": "Bremen",
        "answer_3": "Mecklenburg-Vorpommern",
        "answer_4": "Nordrhein-Westfalen",
        "right_answer ":"2",
    },
    {
        "question": "Welches ist das jüngste der alten Bundesländern?",
        "answer_1": "Schleswig-Holstein",
        "answer_2": "Hessen",
        "answer_3": "Brandenburg",
        "answer_4": "Saarland",
        "right_answer ":"4",
    },
];

let i = 0;


function nextQuestion() {
    i++;
    renderFederalStates();
}



function renderGeographie() {
    let image = document.getElementById("mainImg")
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
    <button onclick="renderFederalStates()" type="button" class="m-16 btn btn-secondary btn-lg">Bundesländer</button>
    `;
}

function renderFederalStates() {
    let image = document.getElementById("mainImg")
    let title = document.getElementById("title");
    let quest = document.getElementById("question");
    let content = document.getElementById("mainContent");
    let footer = document.getElementById("cardFooter");
    let maxQuest = questionsFederalStates.length;
    let question = questionsFederalStates[i];
    let currentQuest = i + 1;
    

    image.src = `
    img/federalStates.png
    `;

    title.innerHTML = `
    Bundesländer
    `;

    quest.innerHTML = `
    ${question['question']}
    `;
    
    content.innerHTML = `
    <div class="card">
        <div class="card-body">
            ${question['answer_1']}
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            ${question['answer_2']}
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            ${question['answer_3']}
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            ${question['answer_4']}
        </div>
    </div>
    `;

    footer.innerHTML = `
    <div>
        <b>${currentQuest}</b> von <b>${maxQuest}</b> Fragen
    </div>
    <button onclick="nextQuestion()" type="button" class="btn btn-secondary">nächste Frage</button>
    `;

    
}