const Letra = ({ letra, actionOnClick }) => {
  return (
    <li className="letter">
      <a
        href={letra}
        onClick={() => {
          actionOnClick(letra);
        }}
      >
        {letra}
      </a>
    </li>
  );
};

export default Letra;
