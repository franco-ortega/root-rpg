const Character = ({ character, drives, nature, connections }) => {
  return (
    <li>
      <h2>{character}</h2>
      <section>
        Drives (pick 2): {drives[0].title}, {drives[1].title}, {drives[2].title}
        , {drives[3].title}
      </section>
      <section>
        Nature (pick 1): {nature[0].title}, {nature[1].title}
      </section>
      <section>
        Connections (both): {connections[0].title}, {connections[1].title}
      </section>
    </li>
  );
};

export default Character;
