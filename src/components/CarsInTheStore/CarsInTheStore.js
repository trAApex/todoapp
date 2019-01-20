import React from 'react';

import './CarsInTheStore.css';

function CarsInTheStore({item}){
  return (
    <div className="car">
      <span className="car-list">{item.get('auto')}</span>
    </div>
  )
}

export default CarsInTheStore;