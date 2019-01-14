import React from 'react';
import { Link } from 'react-router-dom';

function ListItem({item, onDeleteCar}){
  return(
    <form>
        Autó: {item.get('auto')} { item.get('rendszam') && <span> - Rendszám: {item.get('rendszam')}</span> }
          <span>
            <Link to={"/todo/" + item.get('id')}>Edit</Link>
            <button type="submit" onClick={onDeleteCar}>Del</button>
          </span>
    </form>
  );
}

export default ListItem;