import { connect } from 'react-redux';
import App from '../components/App';
import { addCar } from '../actions/todos';

function mapStateToProps(state, props){
  return{
    cars: state.cars.keySeq()
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    addhozza: (txt) => dispatch(addCar(txt))
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;