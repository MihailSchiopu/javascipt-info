import React, { useEffect } from "react";
import Header from "../Header";
import Body from "../Body";
import AddUnicorn from "../AddUnicorn";
import Unicorns from "../Unicorns";
import Error from "./../Errors";
import { useDispatch, useSelector } from "react-redux";
import { getUnicorns } from "../../Redux/thunks";
import {
  getError,
  getUnicornState,
  getLoadingStatus,
} from "../../Redux/unicornReducer";

const App = () => {
  const unicornState = useSelector(getUnicornState);
  const loadingStatus = useSelector(getLoadingStatus);
  const errorStatus = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnicorns);
  }, []);

  const elements = unicornState.map((el) => (
    <Unicorns item={el} key={el._id} />
  ));

  if (loadingStatus) return <div>{"Loading..."}</div>;

  return (
    <div>
      <Header />
      <Body>
        {errorStatus ? <Error err={errorStatus} /> : null}
        <AddUnicorn />
        {elements}
      </Body>
    </div>
  );
};

export default App;
