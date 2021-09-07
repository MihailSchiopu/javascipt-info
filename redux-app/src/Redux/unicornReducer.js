export const ADD_UNICORN_FULFILLED = "ADD_UNICORN_FULFILLED";
export const DELETE_UNICORN_FULFILLED = "DELETE_UNICORN_FULFILLED";
export const UPDATE_UNICORN_FULFILLED = "UPDATE_UNICORN_FULFILLED";
export const GET_UNICORNS_FULFILLED = "GET_UNICORNS_FULFILLED";
export const REJECTED = "REJECTED";
export const PENDING = "PENDING";

const initialState = {
  unicorns: [
    { name: "Grisa", age: "15", colour: "red", _id: 1 },
    { name: "Vasea", age: "20", colour: "yellow", _id: 2 },
    { name: "Peter", age: "25", colour: "blue", _id: 3 },
  ],
  loading: false,
  error: null,
};

const unicornReducer = (state = initialState, action) => {
  const { unicorns } = state;

  switch (action.type) {
    case ADD_UNICORN_FULFILLED:
      return {
        ...state,
        unicorns: [...unicorns, action.payload],
        loading: false,
      };

    case REJECTED:
      return {
        ...state,
        unicorns: unicorns,
        loading: false,
        error: action.payload,
      };

    case DELETE_UNICORN_FULFILLED:
      return {
        ...state,
        unicorns: unicorns.filter((el) => el._id !== action.id),
        loading: false,
      };
    case UPDATE_UNICORN_FULFILLED:
      return {
        ...state,
        unicorns: unicorns.map((el) => {
          if (el._id === action.id) {
            return action.payload;
          }
          return el;
        }),
        loading: false,
      };
    case GET_UNICORNS_FULFILLED:
      return { ...state, unicorns: action.payload, loading: false };
    case PENDING:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export const selectUnicorns = (state) => state.unicorns;
export const selectLoading = (state) => state.loading;
export const seletError = (state) => state.error;

export default unicornReducer;
