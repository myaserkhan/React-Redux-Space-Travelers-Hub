import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRectketApi } from '../redux/rockets/RocketsSlice';
import RocketsCard from './RocketsCard';

function RocketsList() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) dispatch(fetchRectketApi());
  }, [dispatch]);

  return (
    <>
      {rockets.map((rocket) => (
        <RocketsCard key={rocket.rocketId} rocket={rocket} />
      ))}
    </>
  );
}

export default RocketsList;
