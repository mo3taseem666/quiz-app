const contForToggle = document.querySelector(".contForToggle");
const toggleBtn = document.querySelector(".toggleBtn");
const contPage1 = document.querySelector(".contPage1");
const lamp1 = document.querySelector(".lamp1");
const lamp2 = document.querySelector(".lamp2");
const leftShit = document.querySelector(".leftShit");
const rightShit = document.querySelector(".rightShit");
const music = document.querySelector(".music");
const musicIcon = document.querySelector(".musicIcon");
const gage1 = document.querySelector(".gage1");
const gageMusic = document.querySelector(".gageMusic");
const answers2 = document.querySelector(".answers1");
const relationships = document.querySelector(".relationships");
const personal = document.querySelector(".personal");
const randomss = document.querySelector(".randomss");



const answers1 = [
  answers2.children[0],
  answers2.children[1],
  answers2.children[2],
  answers2.children[3],
];
const subAnswer = document.querySelector(".subAnswer");
const pAlert = document.querySelector(".pAlert");
const qNumber = document.querySelector(".qNumber");
const bar = document.querySelector(".bar");
const q1 = document.querySelector(".q1");
const qMain = document.querySelector(".qMain");
const ans1 = document.querySelector(".ans1");
const ans2 = document.querySelector(".ans2");
const ans3 = document.querySelector(".ans3");
const ans4 = document.querySelector(".ans4");
const forResult = document.querySelector(".forResult");
const resultDiv = document.querySelector(".resultDiv");
const musicBar = document.querySelector(".musicBar");
const score = document.querySelector(".score");
const colorMe = document.querySelector(".colorMe");


const iconsArr = document.querySelectorAll('.icon1')
console.log(iconsArr);

let wins = 0;
let alertt = false;


music.addEventListener('click' , function() {
  gage1.classList.add('hidden')
  gageMusic.classList.remove('hidden')
  forResult.classList.remove('hidden')
})

relationships.addEventListener('click', function() {
  gage1.classList.add('hidden')
  gageMusic.classList.remove('hidden')
  forResult.classList.remove('hidden')
})

randomss.addEventListener('click' , function() {
  gage1.classList.add('hidden')
  gageMusic.classList.remove('hidden')
  forResult.classList.remove('hidden')
})

personal.addEventListener('click', function() {
  gage1.classList.add('hidden')
  gageMusic.classList.remove('hidden')
  forResult.classList.remove('hidden')
})



toggleBtn.addEventListener('click' , function() {
  if (!toggleBtn.classList.contains('left-7')) {
    toggleBtn.classList.toggle('left-7')
    lamp2.classList.add('text-white')
    lamp1.classList.add('text-white')
    document.body.classList.replace('from-slate-100','from-slate-800')
    gage1.classList.replace('text-slate-900' , 'text-slate-200')
    document.body.classList.replace('to-slate-400' , 'to-slate-950')
    document.body.classList.replace('sm:from-slate-400' , 'sm:from-slate-950')
    document.body.classList.replace('sm:to-slate-100' , 'sm:to-slate-800')
    rightShit.children[0].classList.replace('bg-slate-400','bg-slate-700')
    rightShit.children[1].classList.replace('bg-slate-400','bg-slate-700')
    rightShit.children[2].classList.replace('bg-slate-400','bg-slate-700')
    rightShit.children[3].classList.replace('bg-slate-400','bg-slate-700')
    colorMe.classList.replace('bg-slate-400' ,'bg-slate-700')
    for (let i=0 ; i<4 ; i++) {
      iconsArr[i].classList.replace('bg-slate-300' , 'bg-slate-800')
    }
    gageMusic.classList.add('text-slate-200')
    for (let i=0 ; i<4 ; i++) {
      answers1[i].classList.add('bg-slate-700')
    }
    for (let i=0 ; i<4 ; i++) {
      answers1[i].firstElementChild.classList.replace('bg-slate-300' , 'bg-slate-800')
    }
  } else {
    toggleBtn.classList.toggle('left-7')
    lamp2.classList.remove('text-white')
    lamp1.classList.remove('text-white')
    document.body.classList.replace('from-slate-800','from-slate-100')
    gage1.classList.replace('text-slate-200' , 'text-slate-900')
    document.body.classList.replace('to-slate-950' , 'to-slate-400')
    document.body.classList.replace('sm:from-slate-950' , 'sm:from-slate-400')
    document.body.classList.replace('sm:to-slate-800' , 'sm:to-slate-100')
    rightShit.children[0].classList.replace('bg-slate-700','bg-slate-400')
    rightShit.children[1].classList.replace('bg-slate-700','bg-slate-400')
    rightShit.children[2].classList.replace('bg-slate-700','bg-slate-400')
    rightShit.children[3].classList.replace('bg-slate-700','bg-slate-400')
    colorMe.classList.replace('bg-slate-700' ,'bg-slate-400')
    for (let i=0 ; i<4 ; i++) {
      iconsArr[i].classList.replace('bg-slate-800' , 'bg-slate-300')
    }
    gageMusic.classList.remove('text-slate-200')
    for (let i=0 ; i<4 ; i++) {
      answers1[i].classList.remove('bg-slate-700')
    }
    for (let i=0 ; i<4 ; i++) {
      answers1[i].firstElementChild.classList.replace('bg-slate-800' , 'bg-slate-300')
    }
  }
})




const barChange = function(x,y) {
  bar.classList.replace(x,y)
}


const chekRightAnswer = function (x) {
  if (answers1[x].classList.contains('righttt')&&answers1[x].classList.contains('selectedAnswer')) {
    wins = wins + 1;
  }
};

const increseQNumber = function () {
  qNumber.textContent = `${Number(qNumber.textContent) + 1}`;
};

const changeQ = function (txt) {
  q1.textContent = `${txt}`;
};

const removingPurple = function () {
  for (let i = 0; i < 4; i++) {
    answers1[i].classList.remove("selectedAnswer");
    answers1[i].removeAttribute('style')
  }
};

const assignNewRight = function (x) {
  for (let i = 0; i < 4; i++) {
    answers1[i].classList.remove("righttt");
  }
  answers1[x].classList.add("righttt");
};

const funTry = function (x) {
  x.classList.remove("selectedAnswer");
  x.removeAttribute('style')
};
const choosing = function () {
  for (let i = 0; i < 4; i++) {
    answers1[i].addEventListener("click", function () {
      alertt = false;
      pAlert.classList.add("hidden");
      answers1.forEach(funTry);
      answers1[i].classList.add("selectedAnswer");
      answers1[i].setAttribute('style','background-color: #4F46E5;')
    });
  }
};

const checkingForAlert = function () {
  let fails = 0;
  for (let i = 0; i < 4; i++) {
    if (!answers2.children[i].classList.contains("selectedAnswer")) {
      fails++;
    }
    if (fails === 4) {
      pAlert.classList.remove("hidden");
      alertt = true;
    }
  }
};

const changeAnswers = function (a, b, c, d) {
  ans1.textContent = a;
  ans2.textContent = b;
  ans3.textContent = c;
  ans4.textContent = d;
};

subAnswer.addEventListener("click", function () {
  checkingForAlert();
  if (subAnswer.classList.contains("step111")) {
    if (!alertt) {
      barChange('w-[10%]','w-[20%]')
      chekRightAnswer(3);
      removingPurple();
      changeAnswers("All good", "Another love", "Hello", "Superman");
      assignNewRight(1);
      increseQNumber();
      changeQ("Which song of those do I love most ?");
      subAnswer.classList.replace("step111", "step222");
    }
  } else if (subAnswer.classList.contains("step222")) {
    if (!alertt) {
      barChange('w-[20%]','w-[30%]')
    chekRightAnswer(1);
    removingPurple();
    changeAnswers("Nemshy mn hena", "Wa7ed Wa7ed", "300 Mara", "Salma");
    assignNewRight(0);
    increseQNumber();
    changeQ("What about those ? which of them would I prefer ?");
    subAnswer.classList.replace("step222", "step333");
    }
  } else if (subAnswer.classList.contains("step333")) {
    if (!alertt) {
      barChange('w-[30%]','w-[40%]')
    chekRightAnswer(0);
    removingPurple();
    changeAnswers("0", "1", "2", "3");
    assignNewRight(0);
    increseQNumber();
    changeQ("How many concerts have I attended in my life ?");
    subAnswer.classList.replace("step333", "step444");
    }
  } else if (subAnswer.classList.contains("step444")) {
    if (!alertt) {
      barChange('w-[40%]','w-[50%]')
    chekRightAnswer(0);
    removingPurple();
    changeAnswers("YouTube", "Spotify", "I download them", "Anghami");
    assignNewRight(1);
    increseQNumber();
    changeQ("how do I listen to music mostly");
    subAnswer.classList.replace("step444", "step555");
    }
  } else if (subAnswer.classList.contains("step555")) {
    if (!alertt) {
      barChange('w-[50%]','w-[60%]')
    chekRightAnswer(1);
    removingPurple();
    changeAnswers("Arabic songs", "English songs", "Indian songs", "All of them");
    assignNewRight(1);
    increseQNumber();
    changeQ("Which ones do I listen mostly ?");
    subAnswer.classList.replace("step555", "step666");
    }
  } else if (subAnswer.classList.contains("step666")) {
    if (!alertt) {
      barChange('w-[60%]','w-[70%]')
    chekRightAnswer(1);
    removingPurple();
    changeAnswers("Love and hate", "I found", "UnHoly", "Heal");
    assignNewRight(0);
    increseQNumber();
    changeQ("Which one do I love most ?");
    subAnswer.classList.replace("step666", "step777");
    }
  } else if (subAnswer.classList.contains("step777")) {
    if (!alertt) {
      barChange('w-[70%]','w-[80%]')
    chekRightAnswer(0);
    removingPurple();
    changeAnswers("Amr Diab", "Muslim", "El Joker", "Abyusif");
    assignNewRight(2);
    increseQNumber();
    changeQ("Who do I love more ?");
    subAnswer.classList.replace("step777", "step888");
    }
  } else if (subAnswer.classList.contains("step888")) {
    if (!alertt) {
      barChange('w-[80%]','w-[90%]')
    chekRightAnswer(2);
    removingPurple();
    changeAnswers("NF", "Cardi B", "Yeat", "Two Feet");
    assignNewRight(0);
    increseQNumber();
    changeQ("Who do I love more ?");
    subAnswer.classList.replace("step888", "step999");
    }
  } else if (subAnswer.classList.contains("step999")) {
    if (!alertt) {
      barChange('w-[90%]','w-[100%]')
    chekRightAnswer(0);
    removingPurple();
    changeAnswers("every day", "When I'm going out", "Four days a week", "Three days a week");
    assignNewRight(0);
    chekRightAnswer(0);
    increseQNumber();
    changeQ("How often do I listen to music ?");
    subAnswer.classList.replace("step999", "step100");
    }
  } 
  else if (subAnswer.classList.contains("step100")) {
    if (!alertt) {
    chekRightAnswer(0);
    forResult.classList.add('hidden')
    resultDiv.classList.remove('hidden')
    musicBar.classList.add('hidden')
    score.textContent=wins
    }
  } 
});

choosing();
