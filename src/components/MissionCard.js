/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { unjoinMission, joinMission } from '../redux/missions/MissionsSlice';
import './stylesheets/MissionCard.css';

const MissionCard = ({
  missionname, description, id, missionjoin,
}) => {
  const dispatch = useDispatch();
  const missionSwitchHandler = (e) => {
    dispatch(joinMission(e.target.id));
  };

  const unjoinswitchhandler = (e) => {
    dispatch(unjoinMission(e.target.id));
  };
  return (
    <div className="mission-card">
      <div className="mission">
        <div className="tbody">
          <div className="left">{missionname}</div>
          <div className="center">
            {description}
          </div>
          <div className="right">
            {missionjoin === false ? (<span className="badge2">NOT A MEMBER</span>) : (<span className="badge">Active Member</span>)}
            {missionjoin === false ? (<button className="join" type="submit" id={id} onClick={missionSwitchHandler}>Join Mision</button>) : (<button className="join-btn" type="submit" id={id} onClick={unjoinswitchhandler}>Leave Mission</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
