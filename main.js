const quizData = [{
        question: '"Kızıl Gezegen" genellikle hangisi için yapılan bir benzetme olur?',
        a: 'Kripton',
        b: 'Cyberton',
        c: 'Mars',
        d: 'Vulcan',
        e: 'Merkür',
        correct: 'c',
    },
    {
        question: 'Atlas Dağlarını gezmekte olan biri hangi ülkede olabilir?',
        a: 'Arjantin',
        b: 'Fas',
        c: 'Arnavutluk',
        d: 'Japonya',
        e: 'Türkiye',
        correct: 'b',
    },
    {
        question: 'Kimlere "karıncaezmez" denir?',
        a: 'Çok esprili kişilere',
        b: 'Çok merhametli kişilere',
        c: 'Çok gösterişli kişilere',
        d: 'Çok çalışkan kişilere',
        e: 'Çok ağırbaşlı kişilere',
        correct: 'b',
    },
    {
        question: 'Bugüne kadar düzenlenen FIFA Dünya Kupası turnuvalarında en çok gol atan kimdir?',
        a: 'Pele',
        b: 'Maradona',
        c: 'Messi',
        d: 'Cristiano Ronaldo',
        e: 'Miroslav Klose',
        correct: 'e',
    },
    {
        question: 'Hangisi, Iron Man adlı çizgi roman kahramanını beyaz perdede canlandırmıştır?',
        a: 'Jake Gyllenhall',
        b: 'Robert Downey Jr.',
        c: 'Benedict Cumberbatch',
        d: 'Chris Hemsworth',
        e: 'Jason Statham',
        correct: 'b',
    },
    {
        question: "'Cahit Sıtkı Tarancı'nın 'Otuz Beş Yaş'adlı şiirinde geçen 'Dante gibi ortasındayız ömrün' dizesinde adı geçen Dante Alighieri kaç yaşında ölmüştür ?",
        a: '35',
        b: '46',
        c: '56',
        d: '65',
        e: '70',
        correct: 'c',
    },
    {
        question: '"Guinness Dünya Rekorlarına göre Sri Lanka"da bulunan ve insan eliyle dikilmiş bilinen en eski ağaç olan "Sri Maha Bodhiya" adlı ağaç hangi tarihte dikilmiştir ?',
        a: 'MÖ 1288',
        b: 'MÖ 288',
        c: 'MS 288',
        d: 'MS 1288',
        e: 'MÖ 1288',
        correct: 'b',
    },
    {
        question: 'Hangisi 1991 de İngiltere milli futbol takımında beş defa forma giymiş bir futbolcunun soyadıdır ? ',
        a: 'Salako',
        b: 'Davaro',
        c: 'Feyzo',
        d: 'Maho',
        e: 'Miço',
        correct: 'a',
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    deselectedAnswer()

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function deselectedAnswer() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getselected() {
    let answer

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getselected()

    //console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>Test tamamlandı, ${score * 12.5} puan aldınız 🥳 </h2>
            <button class = "submit" onClick = "location.reload()"> Tekrar Dene🌀 </button>
            `
        }
    }
})