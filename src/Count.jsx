const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export function increaseCount(){
  return {
    type:INCREASE,
  }
}

export function decreaseCount(){
  return {
    type:DECREASE,
  }
}