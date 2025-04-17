import personagensData from '../data/personagens.json';

export const getPersonagens = (req, res) => {
  res.json(personagensData);
};
