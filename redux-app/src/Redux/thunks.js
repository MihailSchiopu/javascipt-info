import {
  AddUnicornFulfilledAC,
  DeleteUnicornFulfilledAC,
  UpdateUnicornFulfilledAC,
  GetUnicornsFulfilledAC,
  RejetedAC,
  PendingAC,
} from "./actions";

export const AddUnicorn = (payload) => (dispatch, getState, service) => {
  dispatch(PendingAC());
  return service
    .addUnicorn(payload)
    .then(() => dispatch(AddUnicornFulfilledAC(payload)))
    .catch((err) =>
      dispatch(
        RejetedAC(
          `${err}: can not ADD unicorn, some problems with "POST" request`
        )
      )
    );
};

export const DeleteUnicorn = (id) => (dispatch, getState, service) => {
  dispatch(PendingAC());
  return service
    .deleteUnicorn(id)
    .then(() => dispatch(DeleteUnicornFulfilledAC(id)))
    .catch((err) =>
      dispatch(
        RejetedAC(
          `${err}: can not DELETE unicorn, some problems with "DELETE" request`
        )
      )
    );
};

export const UpdateUnicorn = (payload, id) => (dispatch, getState, service) => {
  dispatch(PendingAC());
  return service
    .updateUnicorn(id, payload)
    .then(() => dispatch(UpdateUnicornFulfilledAC(payload, id)))
    .catch((err) =>
      dispatch(
        RejetedAC(
          `${err}: can not UPDATE unicorn, some problems with "PUT" request`
        )
      )
    );
};

export const GetUnicorns = (dispatch, getState, service) => {
  dispatch(PendingAC());
  return service
    .getUnicorns()
    .then((res) => dispatch(GetUnicornsFulfilledAC(res)))
    .catch((err) =>
      dispatch(
        RejetedAC(
          `${err}: can not GET unicorns, some problems with "GET" request`
        )
      )
    );
};
