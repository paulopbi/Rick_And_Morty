import { useState } from "react";
import Card from "../../components/Card/Card";
import useSearchCharacter from "../../hooks/useSearchCharacter";

import "./Home.css";
const Home = () => {
  // filters
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [pages, setPages] = useState(1);
  const { data: searchData, error } = useSearchCharacter(
    search,
    species,
    gender,
    status,
    pages
  );

  const handlePages = () => {
    setPages((prevValue) => (prevValue += 1));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSearch("");
  };

  return (
    <main className="main container">
      <div className="main-logo-picture">
        <img src="/logo.png" alt="Rick and Morty logo" />
      </div>

      <form className="form-filters" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Filter by name"
          value={search}
          onChange={({ target }) => {
            setSearch(target.value);
          }}
        />

        <select onChange={({ target }) => setSpecies(target.value)}>
          <option value="">Espécies</option>
          <option value="animal">Animal</option>
          <option value="alien">Alien</option>
          <option value="disease">Doença</option>
          <option value="unknown">Desconhecido</option>
          <option value="human">Humano</option>
          <option value="humanoid">Humanoide</option>
          <option value="mythological">Mitológico</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="robot">Robô</option>
        </select>

        <select onChange={({ target }) => setGender(target.value)}>
          <option value="">Gênero</option>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="genderless">Sem Genero</option>
          <option value="unknown">Desconhecido</option>
        </select>

        <select onChange={({ target }) => setStatus(target.value)}>
          <option value="">Estado</option>
          <option value="alive">Vivo</option>
          <option value="dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
      </form>

      <section className="card-area">
        <Card searchData={searchData} error={error} />
      </section>

      <div className="btn-area">
        <button className="loading__btn" onClick={() => handlePages()}>
          Atualizar
        </button>
      </div>
    </main>
  );
};

export default Home;
