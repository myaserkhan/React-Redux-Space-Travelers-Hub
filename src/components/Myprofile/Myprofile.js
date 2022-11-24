import '../stylesheets/MyProfile.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  unjoinMission,
  selectAllmissions,
} from '../../redux/missions/MissionsSlice';

function Myprofile() {
  const dispatch = useDispatch();

  const reservation = useSelector(selectAllmissions);
  const missiondat = reservation.filter((item) => item.missionjoin === true);

  const cancelmissionHandler = (e) => {
    const misiondata = e.target.id;
    dispatch(unjoinMission(misiondata));
  };

  return (
    <section className="tableContainer">
      <div className="missions">
        <h1>My Missions</h1>
        <div className="itemsList">
          {!missiondat.length ? <li>There are no missions joined.</li> : null}
          {missiondat
            && missiondat.map((el) => (
              <div className="listBox" key={el.missionid}>
                <h2 className="listName">{el.missionName}</h2>
                <button className="readMore" type="button">
                  <a href={el.missionweblink}>Read More</a>
                </button>
                <button
                  className="remBtn"
                  type="button"
                  id={el.missionid}
                  onClick={cancelmissionHandler}
                >
                  Cancel
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
      </div>
    </section>
  );
}

export default Myprofile;
