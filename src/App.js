import "./App.css";
import { useState } from "react";
import Letra from "./components/Letra/Letra";

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

  const letraEscogida = (listaLetras) => {
    setListaLetras(listaLetras.map((letra) => (letra.elegida = true)));
  };

  return (
    <>
      <div class="hangman-container">
        <svg class="hangman" viewBox="0 0 96 96" width="300" height="300">
          <line class="stage11" x1="62" y1="70" x2="56" y2="56"></line>
          <line class="stage10" x1="50" y1="70" x2="56" y2="56"></line>
          <line class="stage9" x1="68" y1="46" x2="56" y2="40"></line>
          <line class="stage8" x1="44" y1="46" x2="56" y2="40"></line>
          <line class="stage7" x1="56" y1="40" x2="56" y2="56"></line>
          <circle class="stage6" cx="56" cy="34" r="6" fill="#bee5eb"></circle>
          <line class="stage5" x1="56" y1="16" x2="56" y2="28"></line>
          <line class="stage4" x1="24" y1="24" x2="32" y2="16"></line>
          <line class="stage3" x1="21" y1="16" x2="60" y2="16"></line>
          <line class="stage2" x1="24" y1="80" x2="24" y2="16"></line>
          <line class="stage1" x1="16" y1="80" x2="32" y2="80"></line>
        </svg>
      </div>
      <ul class="guess-letters">
        <li class="guess-letter empty"></li>
        <li class="guess-letter">A</li>
        <li class="guess-letter empty"></li>
        <li class="guess-letter">A</li>
        <li class="guess-letter empty"></li>
      </ul>
      <section class="used-letters-container">
        <h2>Used letters</h2>
        <ul class="used-letters">
          <li class="used-letter">B,&nbsp;</li>
          <li class="used-letter">B,&nbsp;</li>
          <li class="used-letter">B</li>
        </ul>
      </section>
      <section class="game-result">You're dead!</section>
      <ul class="letters">
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
