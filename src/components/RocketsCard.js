/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function RocketsCard({ rocket }) {
  const {
    rocketId, rocketName, rocketDesc, rocketImg, rocketReserved,
  } = rocket;

  const clickHandler = (e) => {
    console.log(e.target.id);
  };

  return (
    <section className="rocketCard">
      <img src={rocketImg} alt="" className="rocketImg" />
      <div className="rocketDesc">
        <h1 className="titleDesc">{rocketName}</h1>
        <p className="paraDesc">
          {rocketReserved === true && (
            <span className="rocketReserved">Reserved</span>
          )}
          {' '}
          {rocketDesc}
        </p>
        { rocketReserved === true
          ? (
            <button className="cancelBtn" type="button" id={rocketId} onClick={clickHandler}>
              Cancel Reservation
            </button>
          )
          : (
            <button className="reserveBtn" type="button" id={rocketId} onClick={clickHandler}>
              Reserve Rocket
            </button>
          )}
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
    rocketReserved: PropTypes.bool,
  }).isRequired,
};
export default RocketsCard;
