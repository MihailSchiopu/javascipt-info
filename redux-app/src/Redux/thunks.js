import {
  addUnicornFulfilled,
  deleteUnicornFulfilled,
  updateUnicornFulfilled,
  getUnicornsFulfilled,
  addUnicornRejected,
  deleteUnicornRejected,
  updateUnicornRejected,
  getUnicornsRejected,
  pending,
} from "./actions";

export const addUnicorn = (payload) => (dispatch, getState, service) => {
  dispatch(pending());
  return service
    .addUnicorn(payload)
    .then(() => dispatch(addUnicornFulfilled(payload)))
    .catch((err) => dispatch(addUnicornRejected(err.message)));
};

export const deleteUnicorn = (id) => (dispatch, getState, service) => {
  dispatch(pending());
  return service
    .deleteUnicorn(id)
    .then(() => dispatch(deleteUnicornFulfilled(id)))
    .catch((err) => {
      dispatch(deleteUnicornRejected(err.message));
    });
};

export const updateUnicorn = (payload, id) => (dispatch, getState, service) => {
  dispatch(pending());
  return service
    .updateUnicorn(id, payload)
    .then(() => dispatch(updateUnicornFulfilled(payload, id)))
    .catch((err) => dispatch(updateUnicornRejected(err.message)));
};

export const getUnicorns = (dispatch, getState, service) => {
  dispatch(pending());
  return service
    .getUnicorns()
    .then((res) => dispatch(getUnicornsFulfilled(res)))
    .catch((err) => dispatch(getUnicornsRejected(err.message)));
};
