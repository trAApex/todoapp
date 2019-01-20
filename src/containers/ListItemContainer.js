import { connect } from 'react-redux';
import ListItem from '../components/ListItem/ListItem';
import { delCar } from '../actions/todos';

function mapStateToProps(state, props){
  return{
    item: state.cars.get('' + props.id)
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onDeleteCar: () => dispatch(delCar(props.id))
  };
}

const ListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);

export default ListItemContainer;