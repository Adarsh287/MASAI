const characterDetail = document.getElementById('character-detail');
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('id');

const fetchCharacter = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
  const data = await res.json();
  displayCharacter(data);
};

const displayCharacter = (character) => {
  characterDetail.innerHTML = `
    <img src="${character.image}" alt="${character.name}" />
    <h3>${character.name}</h3>
    <p>Status: ${character.status}</p>
    <p>Species: ${character.species}</p>
    <p>Gender: ${character.gender}</p>
    <p>Origin: ${character.origin.name}</p>
    <p>Location: ${character.location.name}</p>
    <p>Episode Appearances: ${character.episode.length}</p>
  `;
};

fetchCharacter();
