import Scoresvalue from './fetchInput.js';

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = 'hiwi25/';
const addScore = async (data) => {
  await fetch(`${api}${id}scores/`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => response.json());
};
Scoresvalue();
export default addScore;