import React from 'react';
import { Link } from 'react-router-dom';

import './RoadList.css';

function RoadList({item, onDeleteWay}){
  return(
    <div>
      {item.get('honnan') && 
        <div>
          <h4>Út adatai:</h4>
          <span className="honn"><span className="honna">Honnan: </span><span className="honna-two">{item.get('honnan')}</span><span className="vertical-line2"></span></span>
          <span className="ho"><span className="hov">Hova: </span><span className="hov-two">{item.get('hova')}</span><span className="vertical-line2"></span></span>
          <span className="au"><span className="aut">Mivel: </span><span className="aut-two">{item.get('auto')}</span></span>
          <Link className="edit-two" to={"/newwaydetail/" + item.get('id')}>Edit</Link>
          <button className="gomb" type="submit" onClick={onDeleteWay}>Del</button>
        </div>
      }
    </div>
  );
}

export default RoadList;