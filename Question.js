class Question {
  text;
  correctAnswer;
  points;
  category;
  options;
  content=[];
  constructor(text, correctAnswer, points, category, options) {
    this.text = text;
    this.correctAnswer = correctAnswer;
    this.points = points;
    this.category = category;
    this.options = options;
  }

  creationOptions() {
    let content = "";
    this.options.forEach((option) => {
      content += `<div class="option"><p class="option-text"></p></div>`;
    });

    main.innerHTML = content;
  }
}
let questions = [];
let allQuestions = [
  new Question(
    "Koje godine je prvi put objavljen The Godfather?",
    "1972",
    10,
    "movies",
    ["1979", "1983", "1969", "1972"]
  ),
  new Question(
    "Koji je glumac pružio glas za lik Nemo u filmu iz 2003. Pronalazak Nemo?",
    "Alexander Gould",
    10,
    "movies",
    ["Alexander Gould", "Jason Statham", "Mickey Rourke", "Sharlie Sheen"]
  ),
  new Question(
    "Koji je nadimak glavnom glumcu u filmu Lajanje na zvezde?",
    "Filozof",
    10,
    "movies",
    ["Doktor", "Filozof", "Naucnik", "Profesor"]
  ),
  new Question(
    "Iz kog filma je kultna recenica 'Vodi je u mrak da ti sija'?",
    "Kad porastem bicu kengur",
    10,
    "movies",
    ["Munje", "Kad porastem bicu kengur", "Do koske", "Lepa sela lepo gore"]
  ),
  new Question(
    "Glavnu ulogu u filmu Umri Muški glumi…?",
    "Brus Vilis",
    10,
    "movies",
    ["Brus Vilis", "Klint Istvud", "Arnold Švarceneger", "Silvester Stalone"]
  ),
  new Question("Žabe spadaju u…?", "Vodozemce", 10, "biology", [
    "Sisare",
    "Vodozemce",
    "Ribe",
    "Gmizavce",
  ]),
  new Question(
    "Rezervni oblik secera kod biljaka je?",
    "Skrob",
    10,
    "biology",
    ["Skrob", "Celuloza", "hitin", "glikogen"]
  ),
  new Question(
    "Enzimi su po svojoj hemijskoj prirodi..?",
    "Belancevine",
    10,
    "biology",
    ["Belancevine", "Seceri", "Masti", "Nukleinske kiseline"]
  ),
  new Question(
    "Ulogu kontrole rasta i deobe celije ima..?",
    "Jedro",
    10,
    "biology",
    ["Jedro", "Celijska membrana", "Celuloza", "Goldzi aparat"]
  ),
  new Question("Prvi Svetski rat je počeo…?", "1914", 10, "history", [
    "1914",
    "1918",
    "1916",
    "1912",
  ]),
  new Question(
    "Kako se zvao faraon, ujedinitelj Egipta?",
    "Menes",
    10,
    "history",
    ["Menes", "Ramzes", "Tutankamon", "Keops"]
  ),
  new Question("Kada je rodjen Stefan Nemanja?", "1113", 10, "history", [
    "1113",
    "1215",
    "1131",
    "1165",
  ]),
  new Question("Kada se desila bitka na Ceru?", "1914", 10, "history", [
    "1914",
    "1916",
    "1915",
    "1918",
  ]),
];
