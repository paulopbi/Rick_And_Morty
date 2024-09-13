import { useEffect, useState } from "react";

const useSearchCharacter = (name) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const searchCharacters = async () => {
      const searhData = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      const json = await searhData.json();
      setData(json.results);
    };

    searchCharacters();
  }, [name]);

  return { data };
};

export default useSearchCharacter;
