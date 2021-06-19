const quiz = [
  {
    question: '私はアレラジョンソンです。どことどこのハーフでしょうか',
    answers: [ '日本とフィリピン', '日本とアメリカ', '日本と日本', '地球人と宇宙人'],
    correct: '日本とフィリピン'
  }, {
    question: 'プログラミング歴は独学で以下の通りです。',
    answers: [ '6ヶ月', '6ヶ月', '6ヶ月', '6ヶ月'],
    correct: '6ヶ月'
  }, {
    question: '現在html,css,javascript,sqlとpythonを学習中です',
    answers: [ 'bonus', 'bonus','bonus', 'bonus'],
    correct: 'bonus'
  },  {
    question: '現在彼女は',
    answers: [ 'いない', '画面越しに1人', 'リアルに１人', '画面とリアルに1人ずつ'],
    correct: 'いない'
  },  {
    question: '主な学習方法はprogateとyoutubeで気になったコード作成のマネとちょっとしたカスタマです。',
    answers: [ 'よろしくお願いします', 'よろしくお願いします', 'よろしくお願いします', 'よろしくお願いします'],
    correct: 'よろしくお願いします'
  },  {
    question: '最後になりますがいいねと高評価のボタンを押してくれたら幸いです。',
    answers: [ 'いいね！高評価！', 'いいね！高評価！', 'いいね！高評価！', 'いいね！高評価！'],
    correct: 'いいね！高評価！'
  }
];


const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {

    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
   } else {
   $window.alert('不正解!');
   }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
