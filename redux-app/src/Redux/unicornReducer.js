export const ADD_UNICORN_FULFILLED = "ADD_UNICORN_FULFILLED";
export const DELETE_UNICORN_FULFILLED = "DELETE_UNICORN_FULFILLED";
export const UPDATE_UNICORN_FULFILLED = "UPDATE_UNICORN_FULFILLED";
export const GET_UNICORNS_FULFILLED = "GET_UNICORNS_FULFILLED";

export const GET_UNICORNS_REJECTED = "GET_UNICORNS_REJECTED";
export const ADD_UNICORN_REJECTED = "ADD_UNICORN_REJECTED";
export const UPDATE_UNICORN_REJECTED = "UPDATE_UNICORN_REJECTED";
export const DELETE_UNICORN_REJECTED = "DELETE_UNICORN_REJECTED";
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

    case ADD_UNICORN_REJECTED:
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
    case DELETE_UNICORN_REJECTED:
      return {
        ...state,
        unicorns: unicorns,
        loading: false,
        error: action.payload,
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

    case UPDATE_UNICORN_REJECTED:
      return {
        ...state,
        unicorns: unicorns,
        loading: false,
        error: action.payload,
      };

    case GET_UNICORNS_FULFILLED:
      return { ...state, unicorns: action.payload, loading: false };

    case GET_UNICORNS_REJECTED:
      return {
        ...state,
        unicorns: unicorns,
        loading: false,
        error: action.payload,
      };
    case PENDING:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export const getUnicornState = (state) => state.unicorns;
export const getLoadingStatus = (state) => state.loading;
export const getError = (state) => state.error;

export default unicornReducer;
