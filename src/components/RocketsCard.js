/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function RocketsCard({ rocket }) {
  const {
    rocketId, rocketName, rocketDesc, rocketImg,
  } = rocket;

  const clickHandler = (e) => {
    console.log(e.target.id);
  };

  return (
    <section>
      <img src={rocketImg} alt="" />
      <div>
        <h1>{rocketName}</h1>
        <p>{rocketDesc}</p>
        <button type="button" onClick={clickHandler} id={rocketId}>
          Reserve Rocket
        </button>
      </div>
    </section>
  );
}
RocketsCard.propTypes = {
  rocket: PropTypes.shape({
    rocketId: PropTypes.string,
    rocketName: PropTypes.string,
    rocketDesc: PropTypes.string,
    rocketImg: PropTypes.string,
  }).isRequired,
};
export default RocketsCard;
