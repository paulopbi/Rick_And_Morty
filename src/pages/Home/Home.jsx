import { useState } from "react";
import Card from "../../components/Card/Card";
import useSearchCharacter from "../../hooks/useSearchCharacter";

import "./Home.css";
const Home = () => {
  const [search, setSearch] = useState("");
  const { data: searchData } = useSearchCharacter(search);

  return (
    <main className="main container">
      <div className="main-logo-picture">
        <img src="/logo.png" alt="Logo" />
      </div>

      <form className="form-filters">
        <input
          type="search"
          placeholder="Filter by name"
          value={search}
          onChange={({ target }) => {
            setSearch(target.value);
          }}
        />

        <select>
          <option value="species">Species</option>
          <option value="animal">Animal</option>
          <option value="alien">Alien</option>
          <option value="disease">Doença</option>
          <option value="unknown">Desconhecido</option>
          <option value="human">Humano</option>
          <option value="humanoid">Humanoide</option>
          <option value="mythological">Mitologico</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="robot">Robo</option>
        </select>

        <select>
          <option value="gender">Gender</option>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="genderless">Sem Genero</option>
          <option value="unknown">Desconhecido</option>
        </select>

        <select>
          <option value="status">Status</option>
          <option value="alive">Vivo</option>
          <option value="dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
      </form>

      <section className="card-area">
        <Card searchData={searchData} />
      </section>

      <div className="btn-area">
        <button className="loading__btn">Carregar</button>
      </div>
    </main>
  );
};

export default Home;
