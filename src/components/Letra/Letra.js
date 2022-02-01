const Letra = ({ letra, actionOnClick }) => {
  return (
    <li className="letter">
      <a href={letra} actionOnClick={actionOnClick}>
        {letra}
      </a>
    </li>
  );
};

export default Letra;
