import { useEffect, useState } from "react";

const useSearchCharacter = (name, species, gender, status, page) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const searchCharacters = async () => {
      try {
        const searhData = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`
        );
        const json = await searhData.json();
        setData(json.results);
      } catch (error) {
        setError(true);
        console.error(`Error status: ${error}`);
      }
    };

    searchCharacters();
  }, [name, species, gender, status, page]);

  return { data, error };
};

export default useSearchCharacter;
