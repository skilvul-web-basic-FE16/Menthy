// Soal Test
const dbQuiz = [
    // 1
    {
        question: "Bagaimana perasaanmu saat ini?",
        answer: ["Sedih", "Kesepian", "Resah/Khawatir", "Senang/Gembira"]
    },
    // 2
    {
        question: "Bagaimana pendapat temanmu tentang dirimu?",
        answer: ["Judes/Galak", "Bersikap dingin", "Suka canggung", "Menyenangkan"]
    },
    // 3
    {
        question: "Bagaimana sikapmu di dalam keluarga?",
        answer: ["Tidah tahu", "Pendiam", "Biasa saja", "Suka bercanda"]
    },
    // 4
    {
        question: "Apa kamu senang nongkrong bareng?",
        answer: ["Tidak suka", "Lebih tenang sendiri", "Hanya sama teman", "Ya, saya suka keramaian"]
    },
    // 5
    {
        question: "Kutipan mana yang kamu pilih?",
        answer: ["Teman sejati selalu ada di masa sulit", "Hidup itu membosankan", "Hidup itu seperti permen karet", "Hidup itu indah"]
    },
    // 6
    {
        question: "Apa kamu bisa mengendalikan emosimu akhir-akhir ini?",
        answer: ["Tergantung situasi", "Entahlah", "Tidak bisa", "Tentu saja bisa"]
    },
    // 7
    {
        question: "Apa yang biasa kamu lakukan di waktu luang?",
        answer: ["Mendengarkan musik", "Menonton film", "Berpikir banyak hal", "Nongkrong/ngobrol"]
    },
    // 8
    {
        question: "Mana yang menjadi pilihanmu?",
        answer: ["Bersenang-senang", "Jadi lebih baik", "Bisa berhenti khawatir", "Hidup bahagia"]
    },
    // 9
    {
        question: "Bagaimana kamu menjalani kehidupan sehari-hari",
        answer: ["Mengalir seperti air", "Tidak peduli", "Penuh tekanan", "Penuh kegembiraan"]
    },
    // 10
    {
        question: "Warna apa yang kamu sukai?",
        answer: ["Hijau/Biru", "Hitam/Abu-abu", "Putih/warna lainnya", "Merah/Kuning"]
    },
]

// Value jawaban
const nilai4 = 0
const nilai3 = 1
const nilai2 = 2
const nilai1 = 3

function startTest() {
    document.getElementById("opening-test").style.display = "none"
    document.getElementById("test").style.display = "block"
}

let currentQuestion = 0
let saved_answer = []
let totalScore = 0

// Setup pertanyaan
document.addEventListener("DOMContentLoaded", function (event) {
    setupQuestion()
})

// setupQuestion() berfungsi untuk mengambil pertanyaan
function setupQuestion() {
    document.getElementById('question').innerText = dbQuiz[currentQuestion]['question']
    document.getElementById('choiceText0').innerText = dbQuiz[currentQuestion]['answer'][0]
    document.getElementById('choiceText1').innerText = dbQuiz[currentQuestion]['answer'][1]
    document.getElementById('choiceText2').innerText = dbQuiz[currentQuestion]['answer'][2]
    document.getElementById('choiceText3').innerText = dbQuiz[currentQuestion]['answer'][3]
}

// next question
function nextQuestion() {
    // agar pertanyaan bertambah
    currentQuestion++

    // menyimpan jawaban
    saveAnswer()

    // pembatas jika soal sudah maksimal dikerjakan
    if (currentQuestion > dbQuiz.length - 1) {
        stopQuiz()
    }

    // menghapus pilihan di pertanyaan berikutnya
    resetState()

    // memanggil pertanyaan lain
    setupQuestion()
}

// resetState()
function resetState() {
    document.querySelector('input[name="choices"]:checked').checked = false
}

// saveAnswer()
function saveAnswer() {
    const answer = document.querySelector('input[name="choices"]:checked');
    if (answer != null) {
        saved_answer.push(parseInt(answer.getAttribute('data-id')))
    }
}

// checkScore()
function checkScore() {
    for (i = 0; i < saved_answer.length; i++) {
        if (saved_answer[i] == nilai1) {
            totalScore += 1
        } if (saved_answer[i] == nilai2) {
            totalScore += 2
        } if (saved_answer[i] == nilai3) {
            totalScore += 3
        } if (saved_answer[i] == nilai4) {
            totalScore += 4
        }
    }
}

// stopQuiz()
function stopQuiz() {
    checkScore()
    document.getElementById('test').style.display = 'none'
    document.getElementById('closing-test').style.display = 'block'
    document.getElementById('keteranganHasilTest').innerHTML =
        `Skor test kesehatan mentalmu adalah : <span>${totalScore}</span>. <br>
    Yuk lihat keterangan dari kesehatan mentalmu.`
    return
}

function tingkatKesehatanMental() {
    document.getElementById('closing-test').style.display = 'none'
    document.getElementById('tingkatKesehatanMental').style.display = 'block'
}