const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = 'hiwi25/';

const Scoresvalue = async () => {
  const response = await fetch(`${api}${id}scores/`)
    .then((res) => res.json())
    .then((data) => data.result)
    .catch(() => 'error');
  return response;
};
export default Scoresvalue;