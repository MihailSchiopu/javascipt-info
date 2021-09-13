import {
  GET_UNICORNS_FULFILLED,
  DELETE_UNICORN_FULFILLED,
  ADD_UNICORN_FULFILLED,
  UPDATE_UNICORN_FULFILLED,
  GET_UNICORNS_REJECTED,
  DELETE_UNICORN_REJECTED,
  ADD_UNICORN_REJECTED,
  UPDATE_UNICORN_REJECTED,
  PENDING,
} from "./unicornReducer";

export const addUnicornFulfilled = (payload) => ({
  type: ADD_UNICORN_FULFILLED,
  payload,
});

export const addUnicornRejected = (payload) => ({
  type: ADD_UNICORN_REJECTED,
  payload,
});

export const deleteUnicornFulfilled = (id) => ({
  type: DELETE_UNICORN_FULFILLED,
  id,
});

export const deleteUnicornRejected = (payload) => ({
  type: DELETE_UNICORN_REJECTED,
  payload,
});

export const updateUnicornFulfilled = (payload, id) => ({
  type: UPDATE_UNICORN_FULFILLED,
  payload: { ...payload, _id: id },
  id,
});

export const updateUnicornRejected = (payload) => ({
  type: UPDATE_UNICORN_REJECTED,
  payload,
});

export const getUnicornsFulfilled = (res) => ({
  type: GET_UNICORNS_FULFILLED,
  payload: res,
});

export const getUnicornsRejected = (payload) => ({
  type: GET_UNICORNS_REJECTED,
  payload,
});

export const pending = () => ({
  type: PENDING,
});
