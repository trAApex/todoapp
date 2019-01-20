import { connect } from 'react-redux';
import RoadList from '../components/RoadList/RoadList';
import { delWay } from '../actions/todos';

function mapStateToProps(state, props){
  return{
    item: state.cars.get('' + props.id)
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onDeleteWay: () => dispatch(delWay(props.id))
  };
}

const RoadListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoadList);

export default RoadListContainer;