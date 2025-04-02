const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemIndex = state.findIndex(
        (item) => item.name === action.foodItem.name
      );

      if (itemIndex !== -1) {
        // Item exists, create a new array with updated quantity
        return state.map((item, index) =>
          index === itemIndex
            ? {
                ...item,
                numberPicked: item.numberPicked + action.foodItem.numberPicked,
              }
            : item
        );
      } else {
        // Item does not exist, add it to cart
        return [...state, action.foodItem];
      }

    case "INCREASE":
      const increaseIndex = state.findIndex(
        (item) => item.name === action.name
      );
      let newState = state.map((item, index) =>
        index === increaseIndex
          ? {
              ...item,
              numberPicked: item.numberPicked + 1,
            }
          : item
      );
      return newState
    case "DECREASE":
      const decreaseIndex = state.findIndex(
        (item) => item.name === action.name
      );
      let newState2 = state.map((item, index) =>
        index === decreaseIndex
          ? {
              ...item,
              numberPicked: item.numberPicked - 1,
            }
          : item
      );
      return newState2.filter((item) => item.numberPicked !== 0);
    default:
      return [];
  }
};

export default cartReducer;
