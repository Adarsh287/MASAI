const characterGallery = document.getElementById('character-gallery');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentPage = 1;

const fetchCharacters = async (page) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await res.json();
  displayCharacters(data.results);
  updatePagination(data.info);
};

const displayCharacters = (characters) => {
  characterGallery.innerHTML = '';
  characters.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('character-card');
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" />
      <h3>${character.name}</h3>
      <p>${character.species}</p>
      <p>${character.status}</p>
    `;
    card.onclick = () => window.open(`character.html?id=${character.id}`, '_blank');
    characterGallery.appendChild(card);
  });
};

const updatePagination = (info) => {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === info.pages;
};

prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage);
  }
};

nextBtn.onclick = () => {
  if (currentPage < 42) {
    currentPage++;
    fetchCharacters(currentPage);
  }
};

fetchCharacters(currentPage);
