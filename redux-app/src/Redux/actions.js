import {
  GET_UNICORNS_FULFILLED,
  DELETE_UNICORN_FULFILLED,
  ADD_UNICORN_FULFILLED,
  UPDATE_UNICORN_FULFILLED,
  REJECTED,
  PENDING,
} from "./unicornReducer";

export const addUnicornFulfilled = (payload) => ({
  type: ADD_UNICORN_FULFILLED,
  payload,
});

export const rejeted = (payload) => ({
  type: REJECTED,
  payload,
});

export const deleteUnicornFulfilled = (id) => ({
  type: DELETE_UNICORN_FULFILLED,
  id,
});

export const updateUnicornFulfilled = (payload, id) => ({
  type: UPDATE_UNICORN_FULFILLED,
  payload: { ...payload, _id: id },
  id,
});

export const getUnicornsFulfilled = (res) => ({
  type: GET_UNICORNS_FULFILLED,
  payload: res,
});

export const pending = () => ({
  type: PENDING,
});
