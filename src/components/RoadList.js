import React from 'react';
import { Link } from 'react-router-dom';

function RoadList({item, onDeleteWay}){
  return(
    <div>
      {item.get('honnan') && <div>Út adatai:<span>Honnan: {item.get('honnan')} - Hova: {item.get('hova')} - Mivel: {item.get('auto')}
        <Link to={"/newwaydetail/" + item.get('id')}>Edit</Link>
        <button type="submit" onClick={onDeleteWay}>Del</button>
        </span>
        </div>
      }
    </div>
  );
}

export default RoadList;