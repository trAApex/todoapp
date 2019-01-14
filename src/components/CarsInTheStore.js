import React from 'react';

function CarsInTheStore({item}){
  return (
    <div>
      {item.get('auto')}
    </div>
  )
}

export default CarsInTheStore;