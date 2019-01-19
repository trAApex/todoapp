import React, { Component, createRef } from 'react';
import RoadListContainer from '../containers/RoadListContainer';
import { Link } from 'react-router-dom';
import CarsInTheStoreContainer from '../containers/CarsInTheStoreContainer';

import './NewRoad.css';

class NewRoad extends Component{
  constructor(props){
    super(props);
    this.inputRefhonnan = createRef();
    this.inputRefhova = createRef();
    this.inputRefmivel = createRef();
  }

  render() {
    return(
      <div className="main-road">
      <h1 className="new-way">Új út megadása</h1>
        <div>
          <div className="cars">
            <h3>Autók a rendszerben:</h3>
            {this.props.cars.map((data) => {
              return (
                <CarsInTheStoreContainer
                  key={data}
                  id={data}
                />
              )
            })}
          </div>
          <div className="all-way">
            <h2>Összes út</h2>
            <div>
              {this.props.cars.map((e) => {
                return (
                  <RoadListContainer
                    key={e}
                    id={e}
                  />
                )
              })}
            </div>
            <h4>Új út hozzáadása:</h4>
            <input className="honnan" type="text" ref={this.inputRefhonnan } placeholder="honnan" />
            <input className="hova" type="text" ref={this.inputRefhova} placeholder="hova" />
            <input className="mivel" type="text" ref={this.inputRefmivel} placeholder="mivel" />
            <button className="button"
              onClick={e => 
                this.props.onAddRoad(
                  this.inputRefhonnan.current.value, 
                  this.inputRefhova.current.value, 
                  this.inputRefmivel.current.value)}>Add
            </button>
          </div>
          <div className="starter"><Link to={'/'} className="starter-screen">Kezdőképernyő</Link></div>
        </div>
      </div>
    );
  }
}

export default NewRoad;