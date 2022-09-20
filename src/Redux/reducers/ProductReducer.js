const addItem = [];

const ProductReducer = (state = addItem, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let newState1 = [...state, action.payload];

      return newState1;

    case "DEL_ITEM":
      let newState = state.filter((ele) => {
        // console.log("element is");
        // console.log(ele._id);
        // console.log(action.payload);
        return ele._id !== action.payload._id;
      });
      // console.log("newStateis");
      // console.log(newState);
      return newState;

    default:
      return state;
  }
};

export default ProductReducer;
