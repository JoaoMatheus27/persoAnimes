import personagensData from '../data/personagens.json';

export const getPersonagens = (req: any, res: any) => {
  res.json(personagensData);
};
