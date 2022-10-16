const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const getMortyCharacter = () => {
  return fetch(baseUrl + '2').then((res) => res.json());
};
