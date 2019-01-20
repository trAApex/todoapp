import React from 'react';
import { Link } from 'react-router-dom';

import './ListItem.css';

function ListItem({item, onDeleteCar}){
  return(
    <form className="formone">
      <span className="carone">Autó:</span> 
      <span className="cartwo">{item.get('auto')}</span>
      <span className="vertical-line"></span>
      { 
        item.get('rendszam') && 
        <span className="rendszam"> <span className="rendszam-elso">Rendszám:</span> <span className="rendszam-zero">{item.get('rendszam')}</span></span> 
      }
      <span className="buttons">
        <Link to={"/todo/" + item.get('id')} className="edit">Edit</Link>
        <button type="submit" onClick={onDeleteCar} className="delete">Del</button>
      </span>
    </form>
  );
}

export default ListItem;