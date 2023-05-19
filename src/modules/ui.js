import Scoresvalue from './fetchInput.js';

const scores = document.querySelector('.scoreslist');
let scoresArr = [];

const displayScorevalue = () => {
  Scoresvalue().then((res) => {
    if (typeof res === 'object') {
      scoresArr = Array.from(res);
      scores.innerHTML = '';
      if (scoresArr.length > 0) {
        scoresArr.forEach((score) => {
          const scoresTemp = `<li><p>${score.user}: ${score.score}</p></li>`;
          scores.innerHTML += scoresTemp;
        });
      }
    }
  });
};
export default displayScorevalue;
