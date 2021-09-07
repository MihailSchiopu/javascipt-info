import {
  GET_UNICORNS_FULFILLED,
  DELETE_UNICORN_FULFILLED,
  ADD_UNICORN_FULFILLED,
  UPDATE_UNICORN_FULFILLED,
  REJECTED,
  PENDING,
} from "./unicornReducer";

export const AddUnicornFulfilledAC = (payload) => ({
  type: ADD_UNICORN_FULFILLED,
  payload,
});

export const RejetedAC = (payload) => ({
  type: REJECTED,
  payload,
});

export const DeleteUnicornFulfilledAC = (id) => ({
  type: DELETE_UNICORN_FULFILLED,
  id,
});

export const UpdateUnicornFulfilledAC = (payload, id) => ({
  type: UPDATE_UNICORN_FULFILLED,
  payload: { ...payload, _id: id },
  id,
});

export const GetUnicornsFulfilledAC = (res) => ({
  type: GET_UNICORNS_FULFILLED,
  payload: res,
});

export const PendingAC = () => ({
  type: PENDING,
});
