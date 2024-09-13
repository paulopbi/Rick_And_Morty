import PropTypes from "prop-types";
//css
import "./Card.css";

const Card = ({ apiData, errorStatus }) => {
  return (
    <>
      {errorStatus && (
        <p className="error">
          Ops houve algum erro, por favor, tente novamente!
        </p>
      )}

      {apiData &&
        apiData.map((character) => (
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

Card.propTypes = {
  apiData: PropTypes.array,
  errorStatus: PropTypes.bool,
};

export default Card;
