import { useState } from "react";
//components
import Card from "../../components/Card/Card";
//hooks
import useSearchCharacter from "../../hooks/useSearchCharacter";
//css
import "./Home.css";

const Home = () => {
  // filters
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSearch("");
  };

  // pagination
  const [pages, setPages] = useState(1);

  const handlePages = () => {
    setPages((prevValue) => (prevValue += 1));
  };

  //custom hook
  const { apiData, errorStatus } = useSearchCharacter(
    search,
    species,
    gender,
    status,
    pages
  );

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

        {/* species area */}
        <select onChange={({ target }) => setSpecies(target.value)}>
          <option value="">Espécies</option>
          <option value="animal">Animal</option>
          <option value="alien">Alienígena</option>
          <option value="disease">Doença</option>
          <option value="unknown">Desconhecido</option>
          <option value="human">Humano</option>
          <option value="humanoid">Humanoide</option>
          <option value="mythological">Mitológico</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="robot">Robô</option>
        </select>

        {/* gender area */}
        <select onChange={({ target }) => setGender(target.value)}>
          <option value="">Gênero</option>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="genderless">Sem Gênero</option>
          <option value="unknown">Desconhecido</option>
        </select>

        {/* status area */}
        <select onChange={({ target }) => setStatus(target.value)}>
          <option value="">Estado</option>
          <option value="alive">Vivo</option>
          <option value="dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
      </form>

      <section className="card-area">
        <Card apiData={apiData} errorStatus={errorStatus} />
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
