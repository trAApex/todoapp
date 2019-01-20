import { connect } from 'react-redux';
import CarsInTheStore from '../components/CarsInTheStore/CarsInTheStore';

function mapStateToProps(state, props){
  return{
    item: state.cars.get('' + props.id)
  };
}

function mapDispatchToProps(dispatch, props) {
  return {}
}

const CarsInTheStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsInTheStore);

export default CarsInTheStoreContainer;