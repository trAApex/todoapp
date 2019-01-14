import { fromJS } from 'immutable';
import { DEL_CAR, ADD_CAR, UPDATE_CAR, ADD_WAY, DEL_WAY, UPDATE_WAY } from '../actions/index';

export function reducer(state = fromJS({ 
    1: { 
      id: 1, 
      auto: 'Mercedes', 
      rendszam: 'GJK-874',
      honnan: 'Budapest',
      hova: 'Sopron',
      kilometer: undefined,
      date: undefined
    }}), action) {

  if(action.type === DEL_CAR) {
    //return state.set('cars', state.get('cars').remove('' + action.id));
    return state.remove('' + action.id);
  }

  if(action.type === ADD_CAR) {
    let id = Math.random();
    
    return state.set('' + id, fromJS({
      id: id,
      auto: action.newCars,
      rendszam: action.rendszam,
    }));
  }

  if(action.type === UPDATE_CAR) {
    return state.set('' + action.car.get('id'), action.car);
  }

  if(action.type === ADD_WAY) {
    let id = Math.random();

    return state.set('' + id, fromJS({
      honnan: action.honnan,
      id: id,
      hova: action.hova,
      auto: action.auto
    }))
  }

  if(action.type === DEL_WAY) {
    //return state.set('cars', state.get('cars').remove('' + action.id));
    return state.remove('' + action.id);
  }

  if(action.type === UPDATE_WAY) {
    return state.set('' + action.auto.get('id'), action.auto);
  }

  return state;
}