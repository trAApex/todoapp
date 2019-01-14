import React, { Component, createRef } from 'react';
import RoadListContainer from '../containers/RoadListContainer';
import { Link } from 'react-router-dom';
import CarsInTheStoreContainer from '../containers/CarsInTheStoreContainer';

class NewRoad extends Component{
  constructor(props){
    super(props);
    this.inputRefhonnan = createRef();
    this.inputRefhova = createRef();
    this.inputRefmivel = createRef();
  }

  render() {
    return(
      <div>
      <h1>Új út megadása</h1>
        <div>
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
          <input type="text" ref={this.inputRefhonnan } placeholder="honnan" /><br/>
          <input type="text" ref={this.inputRefhova} placeholder="hova" /><br/>
          <input type="text" ref={this.inputRefmivel} placeholder="mivel" />
          <button
            onClick={e => 
              this.props.onAddRoad(
                this.inputRefhonnan.current.value, 
                this.inputRefhova.current.value, 
                this.inputRefmivel.current.value)}>Add
          </button>
          <Link to={'/'}>Kezdőképernyő</Link>
        </div>
        <div>
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
      </div>
    );
  }
}

export default NewRoad;