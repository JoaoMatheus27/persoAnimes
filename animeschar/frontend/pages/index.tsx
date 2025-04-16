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
    return (
      <div>
        <h1>Personagens</h1>
        <ul>
          {personagens.map((personagem) => (
            <li key={personagem.id}>
              <img src={personagem.imagem} alt={personagem.nome} width={200} />
              <h3>{personagem.nome}</h3>
              <p>Poder: {personagem.poder}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  