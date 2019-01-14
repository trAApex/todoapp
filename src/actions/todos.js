import { ADD_CAR, DEL_CAR, UPDATE_CAR, ADD_WAY, UPDATE_WAY, DEL_WAY } from './index';

export function addCar(newCars, rendszam) {
  return {
    type: ADD_CAR,
    newCars,
    rendszam
  }
}

export function updateCar(car) {
  return {
    type: UPDATE_CAR,
    car
  }
}

export function delCar(id) {
  return {
    type: DEL_CAR,
    id
  }
}

export function addWay(honnan, hova, auto) {
  return {
    type: ADD_WAY,
    honnan,
    hova,
    auto
  }
}

export function updateWay(auto) {
  return {
    type: UPDATE_WAY,
    auto
  }
}

export function delWay(id) {
  return {
    type: DEL_WAY,
    id
  }
}