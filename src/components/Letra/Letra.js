const Letra = ({ letra }) => {
  return (
    <li className="letter">
      <a href={letra}>{letra}</a>
    </li>
  );
};

export default Letra;
