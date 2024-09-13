import "./Card.css";
import Proptypes from "prop-types";

const Card = ({ searchData, error }) => {
  return (
    <>
      {error && (
        <p className="error">
          Ops houve algum erro, por favor, tente novamente!
        </p>
      )}

      {searchData &&
        searchData.map((character) => (
          <div className="card" key={character.id}>
            <div className="card-content">
              <div className="card-img">
                <img src={character.image} alt={character.name} />
              </div>

              <div className="card-texts">
                <h2>{character.name}</h2>
                <span>{character.species}</span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;

Card.propTypes = {
  searchData: Proptypes.array,
  error: Proptypes.func,
};
