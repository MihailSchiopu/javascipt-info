import {
  addUnicornFulfilled,
  deleteUnicornFulfilled,
  updateUnicornFulfilled,
  getUnicornsFulfilled,
  rejeted,
  pending,
} from "./actions";

export const addUnicorn = (payload) => (dispatch, getState, configs) => {
  dispatch(pending());
  return configs.service
    .addUnicorn(payload)
    .then(() => dispatch(addUnicornFulfilled(payload)))
    .catch(() => dispatch(rejeted(configs.error.description("ADD"))));
};

export const deleteUnicorn = (id) => (dispatch, getState, configs) => {
  dispatch(pending());
  return configs.service
    .deleteUnicorn(id)
    .then(() => dispatch(deleteUnicornFulfilled(id)))
    .catch(() => {
      dispatch(rejeted(configs.error.description("DELETE")));
    });
};

export const updateUnicorn = (payload, id) => (dispatch, getState, configs) => {
  dispatch(pending());
  return configs.service
    .updateUnicorn(id, payload)
    .then(() => dispatch(updateUnicornFulfilled(payload, id)))
    .catch(() => dispatch(rejeted(configs.error.description("UPDATE"))));
};

export const getUnicorns = (dispatch, getState, configs) => {
  dispatch(pending());
  return configs.service
    .getUnicorns()
    .then((res) => dispatch(getUnicornsFulfilled(res)))
    .catch(() => dispatch(rejeted(configs.error.description("GET"))));
};
