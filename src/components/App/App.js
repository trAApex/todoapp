import React, { Component, createRef } from 'react';
import ListItemContainer from '../../containers/ListItemContainer';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.inputRef = createRef();
  }

  render() {
    return(
      <div className="main">
      <h1 className="element">Céges autók listázása</h1>
        <div className="secondmain">
          <h2 className="allcar">Összes autó</h2>
          <div>
            {this.props.cars.map((data) => {
              return (
                <ListItemContainer
                  key={data}
                  id={data}
                />
              )
            })}
          </div>
            <h4 className="newcar">Új autó hozzáadása:</h4>
            <input type="text" ref={this.inputRef} placeholder="auto fajtaja" className="carinput"/>
            <button
              onClick={e => this.props.addhozza(this.inputRef.current.value)} className="addcar">Add
            </button>
        </div>
      </div>
    );
  }
}

export default App;