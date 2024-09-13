import { useEffect, useState } from "react";

const useSearchCharacter = (name, species, gender, status, page) => {
  //json response data
  const [apiData, setApiData] = useState([]);
  //handle error state
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const apiRequest = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`
        );
        const response = await apiRequest.json();
        setApiData(response.results);
      } catch (e) {
        setErrorStatus(true);
        console.error(`Error status: ${e}`);
      }
    };
    getData();
  }, [name, species, gender, status, page]);

  //return a object
  return { apiData, errorStatus };
};

export default useSearchCharacter;
