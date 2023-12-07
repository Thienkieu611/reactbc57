//rxslice

export const numberReducer = (state = 1, action) => {
  if (action.type === "CHANGE_NUMBER_ACTION") {
    state = action.payload;
    return state;
  }
  return state;
};
