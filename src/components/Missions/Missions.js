import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsApi } from '../../redux/missions/MissionsSlice';
import MissionCard from './MissionCard';
import '../stylesheets/MissionCard.css';

const Missionlist = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMissionsApi());
  }, [dispatch]);
  return (
    <div>
      <div className="heading">
        <div className="left">Mission</div>
        <div className="center">Description</div>
        <div className="right">Status</div>
      </div>
      {mission.map((item) => (
        <MissionCard
          key={item.missionid}
          missionname={item.missionName}
          description={item.missionDesc}
          id={item.missionid}
          missionjoin={item.missionjoin}
        />
      ))}
    </div>
  );
};

export default Missionlist;
