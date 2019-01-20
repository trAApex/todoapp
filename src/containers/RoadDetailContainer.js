import { connect } from 'react-redux';
import RoadDetail from '../components/RoadDetail/RoadDetail';
import { updateWay } from '../actions/todos';

function mapStateToProps(state, props){
  return{
    item: state.cars.get('' + props.match.params.id)
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onWayChange: (auto) => dispatch(updateWay(auto))
  };
}

const RoadDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoadDetail);

export default RoadDetailContainer;