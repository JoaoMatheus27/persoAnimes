import React from 'react';

interface Personagem {
  id: number;
  nome: string;
  poder: string;
  imagem: string;
}

interface HomeProps {
  personagens: Personagem[];
}

const Home: React.FC<HomeProps> = ({ personagens }) => {
  if (!personagens || personagens.length === 0) {
    return <p>No characters found.</p>;
  }

  return (
    <div>
      <h1>Personagens</h1>
      <ul>
        {personagens.map((personagem) => (
          <li key={personagem.id}>
            <img
              src={personagem.imagem}
              alt={personagem.nome}
              width={200}
              style={{ borderRadius: '8px' }} // Optional: a bit of styling
            />
            <h3>{personagem.nome}</h3>
            <p>Poder: {personagem.poder}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
