import React, { useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import AddUnicron from "../AddUnicorn/AddUnicron";
import Unicorns from "../Unicorns/Unicorns";
import ShowError from "../ShowError/ShowError";
import { useDispatch, useSelector } from "react-redux";
import { GetUnicorns } from "./../Redux/thunks";
import {
  selectUnicorns,
  selectLoading,
  seletError,
} from "../Redux/unicornReducer";

const App = () => {
  const unicornState = useSelector(selectUnicorns);
  const loadingStatus = useSelector(selectLoading);
  const errorStatus = useSelector(seletError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUnicorns);
  }, []);

  const elements = unicornState.map((el) => (
    <Unicorns item={el} key={el._id} />
  ));

  if (loadingStatus) return <div>{"Loading..."}</div>;

  return (
    <div>
      <Header />
      <Body>
        {errorStatus ? <ShowError err={errorStatus} /> : null}
        <AddUnicron />
        {elements}
      </Body>
    </div>
  );
};

export default App;
