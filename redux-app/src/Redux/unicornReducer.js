const initialState = {
  unicorns: [
    { name: "Grisa", age: "15", colour: "red", _id: 1 },
    { name: "Vasea", age: "20", colour: "yellow", _id: 2 },
    { name: "Peter", age: "25", colour: "blue", _id: 3 },
  ],
  loading: true,
};

const unicornReducer = (state = initialState, action) => {
  const { unicorns } = state;

  switch (action.type) {
    case "ADD_UNICORN":
      return { ...state, unicorns: [...unicorns, action.payload] };
    case "DELETE_UNICORN":
      return {
        ...state,
        unicorns: unicorns.filter((el) => el._id !== action.id),
      };
    case "UPDATE_UNICORN":
      return {
        ...state,
        unicorns: unicorns.map((el) => {
          if (el._id === action.id) {
            return (el = action.payload);
          }
          return el;
        }),
      };
    case "LOADED_UNICORNS":
      return { ...state, unicorns: action.payload };
    case "TOGGLE_LOADING":
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default unicornReducer;
