import React, { Component, createRef } from 'react';
import ListItemContainer from '../containers/ListItemContainer';

class App extends Component{
  constructor(props){
    super(props);
    this.inputRef = createRef();
  }

  render() {
    return(
      <div>
      <h1>Céges autók listázása</h1>
        <div>
          <h2>Összes autó</h2>
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
          <h4>Új autó hozzáadása:</h4>
          <input type="text" ref={this.inputRef} placeholder="auto fajtaja" />
          <button
            onClick={e => this.props.addhozza(this.inputRef.current.value)}>Add
          </button>
        </div>
      </div>
    );
  }
}

export default App;