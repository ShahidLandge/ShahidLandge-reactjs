const addItem = [];

const ProductReducer = (state = addItem, action) => {
  // console.log(action)
  switch (action.type) {
    case "ADD_ITEM":
      // console.log(action.payload);
      return [...state, action.payload];
      break;

    case "DEL_ITEM":
      let newState = state.filter((ele) => {
        console.log("element is");
        console.log(ele._id);
        console.log(action.payload._id);
        return ele._id !== action.payload._id;
      });
      console.log("newStateis");
      console.log(newState);
      return newState;
      break;

    default:
      return state;
      break;
  }
};
export default ProductReducer;
