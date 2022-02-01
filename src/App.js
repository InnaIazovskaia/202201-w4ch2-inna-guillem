import "./App.css";
import Palabra from "./components/Palabra/Palabra";
import { useState } from "react";
import Letra from "./components/Letra/Letra";
import Dibujo from "./components/Dibujo/Dibujo";

const abecedario = [
  { letra: "A", id: 1, elegida: false },
  { letra: "B", id: 2, elegida: false },
  { letra: "C", id: 3, elegida: false },
  { letra: "D", id: 4, elegida: false },
  { letra: "E", id: 5, elegida: false },
  { letra: "F", id: 6, elegida: false },
  { letra: "G", id: 7, elegida: false },
  { letra: "H", id: 8, elegida: false },
  { letra: "I", id: 9, elegida: false },
  { letra: "J", id: 10, elegida: false },
  { letra: "K", id: 11, elegida: false },
  { letra: "L", id: 12, elegida: false },
  { letra: "M", id: 13, elegida: false },
  { letra: "N", id: 14, elegida: false },
  { letra: "O", id: 15, elegida: false },
  { letra: "P", id: 16, elegida: false },
  { letra: "Q", id: 17, elegida: false },
  { letra: "R", id: 18, elegida: false },
  { letra: "S", id: 19, elegida: false },
  { letra: "T", id: 20, elegida: false },
  { letra: "U", id: 21, elegida: false },
  { letra: "V", id: 22, elegida: false },
  { letra: "W", id: 23, elegida: false },
  { letra: "X", id: 24, elegida: false },
  { letra: "Y", id: 25, elegida: false },
  { letra: "Z", id: 26, elegida: false },
];

function App() {
  const [listaLetras, setListaLetras] = useState(abecedario);

  const letraEscogida = (letter) => {
    const letraEliminada = listaLetras.filter(
      (letra) => letra.letra !== letter.letra
    );
    setListaLetras(letraEliminada);
  };

  return (
    <>
      <Dibujo errores={11} />
      <ul className="guess-letters">
        <Palabra palabra={"gitignore"}></Palabra>
      </ul>
      <section className="used-letters-container">
        <h2>Used letters</h2>
        <ul className="used-letters">
          <li className="used-letter">B,&nbsp;</li>
          <li className="used-letter">B,&nbsp;</li>
          <li className="used-letter">B</li>
        </ul>
      </section>
      <section className="game-result">You're dead!</section>
      <ul className="letters">
        {listaLetras.map((letra) => {
          return (
            <Letra
              key={letra.id}
              letra={letra.letra}
              state={letra.elegida}
              actionOnClick={letraEscogida}
            />
          );
        })}
        ;
      </ul>
    </>
  );
}

export default App;
