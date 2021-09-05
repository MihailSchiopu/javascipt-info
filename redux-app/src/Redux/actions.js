import UnicornService from "./../UnicornService";

const service = new UnicornService();

export const toggleLoading = () => {
  return { type: "TOGGLE_LOADING" };
};

export const addUnicorn = (payload) => (dispatch) => {
  dispatch(toggleLoading());
  service.addUnicorn(payload).then(() => {
    dispatch({
      type: "ADD_UNICORN",
      payload,
    });
    dispatch(toggleLoading());
  });
};

export const deleteUnicorn = (id) => (dispatch) => {
  dispatch(toggleLoading());
  service.deleteUnicorn(id).then(() => {
    dispatch({
      type: "DELETE_UNICORN",
      id,
    });
    dispatch(toggleLoading());
  });
};

export const updateUnicorn = (payload, id) => (dispatch) => {
  dispatch(toggleLoading());
  delete payload._id;
  service.updateUnicorn(id, payload).then(() => {
    dispatch({
      type: "UPDATE_UNICORN",
      payload: { ...payload, _id: id },
      id,
    });
    dispatch(toggleLoading());
  });
};

export const loadingUnicorns = (dispatch) => {
  service.getUnicorns().then((res) => {
    dispatch({ type: "LOADED_UNICORNS", payload: res });
    dispatch(toggleLoading());
  });
};
