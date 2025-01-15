import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [category, setCategory] = useState(0);
  const AllFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Siga os bons e aprenda com eles.",
        "O bom-senso vale mais do que muito conhecimento.",
        "O riso é a menor distância entre duas pessoas.",
        "Deixe de lado as preocupações e seja feliz.",
        "Realize o óbvio, pense no improvável e conquiste o impossível.",
        "Acredite em milagres, mas não dependa deles.",
        "A maior barreira para o sucesso é o medo do fracasso.",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!",
        "A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!",
        "Escreva em seu coração: todo dia é o melhor dia do ano.",
        "Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.",
      ],
    },
  ];
  function gerarFrase() {
    let fraseAleatoria = Math.floor(
      Math.random() * AllFrases[category].frases.length
    );
    setTextoFrase(`" ${AllFrases[category].frases[fraseAleatoria]} "`);
  }

  return (
    <div className="container">
      <img src={logo} alt="Logo Frases" className="logo" />

      <h1 className="title">Categorias</h1>
      <section className="category-area">
        {AllFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth: item.nome === AllFrases[category].nome ? 3 : 0,
              borderColor: "#1fa4db",
            }}
            onClick={() => setCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>
      <button className="button-frase" onClick={gerarFrase}>
        Gerar Frase
      </button>
      {textoFrase !== "" && <p className="texto-frase">{textoFrase}</p>}
    </div>
  );
}

export default App;
