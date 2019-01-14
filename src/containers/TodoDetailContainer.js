import { connect } from 'react-redux';
import TodoDetail from '../components/TodoDetail';
import { updateCar } from '../actions/todos';

function mapStateToProps(state, props){
  return{
    item: state.cars.get('' + props.match.params.id)
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onCarChange: (auto) => dispatch(updateCar(auto))
  };
}

const TodoDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetail);

export default TodoDetailContainer;