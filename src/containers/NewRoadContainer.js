import { connect } from 'react-redux';
import NewRoad from '../components/NewRoad';
import { addWay } from '../actions/todos';

function mapStateToProps(state, props){
  return{
    cars: state.cars.keySeq()
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    //onAddCars: (txt, rendszam) => dispatch(addCarOnServer(txt, rendszam))
    onAddRoad: (honnan,hova,auto) =>  dispatch(addWay(honnan,hova,auto))
  };
}

const NewWayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRoad);

export default NewWayContainer;