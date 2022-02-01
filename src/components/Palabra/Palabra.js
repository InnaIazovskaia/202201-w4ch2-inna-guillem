const Palabra = ({ palabra = "manzana" }) => {
  const letrasArray = Array.from(palabra);
  const letras = letrasArray.map((letra) => {
    return { letra: letra.toLocaleUpperCase(), oculta: true };
  });

  return (
    <ul class="guess-letters">
      {letras.map((letra) => {
        return (
          <li className={`guess-letter${letra.oculta ? " empty" : ""}`}>
            {letra.oculta ? "" : letra.letra}
          </li>
        );
      })}
    </ul>
  );
};

export default Palabra;
