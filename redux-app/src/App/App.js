import React, { useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import AddUnicron from "../AddUnicorn/AddUnicron";
import Unicorns from "../Unicorns/Unicorns";
import { useDispatch, useSelector } from "react-redux";
import { loadingUnicorns } from "./../Redux/actions";

const App = () => {
  const unicornState = useSelector((state) => state.unicorns);
  const loadingStatus = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingUnicorns);
  }, []);
  if (loadingStatus) {
    return <div>{"Loading..."}</div>;
  }

  const elements = unicornState.map((el) => (
    <Unicorns item={el} key={el._id} />
  ));
  return (
    <div>
      <Header />
      <Body>
        <AddUnicron />
        {elements}
      </Body>
    </div>
  );
};

export default App;
