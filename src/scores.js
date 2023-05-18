const scorevalue = [
  {
    Name: 'John',
    Score: 100,
  },
  {
    Name: 'John',
    Score: 100,
  },
  {
    Name: 'Peter',
    Score: 20,
  },
  {
    Name: 'Hope',
    Score: 50,
  },
  {
    Name: 'Faith',
    Score: 78,
  },
];

const viewScores = () => {
  const scoreBoardContainer = document.querySelector('#scoreslist');
  scoreBoardContainer.innerHTML = '';
  scorevalue.forEach((score) => {
    scoreBoardContainer.innerHTML += `<li>
    <p>${score.Name}:${score.Score}</p>
    </li>`;
  });
};

exports.viewScores = viewScores;