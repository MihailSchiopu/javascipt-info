import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./add-unicorn-style.module.css";
import { addUnicorn } from "../Redux/actions";

const { addItemCard, addItemBtn } = style;

const AddUnicron = () => {
  const [state, setState] = useState({
    name: "",
    age: "",
    colour: "",
  });

  const { name, age, colour } = state;
  const dispatch = useDispatch();

  return (
    <div className={addItemCard}>
      <p>Name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
      />
      <p>Age</p>
      <input
        type="text"
        value={age}
        onChange={(e) => setState((s) => ({ ...s, age: e.target.value }))}
      />
      <p>Color</p>
      <input
        type="text"
        value={colour}
        onChange={(e) => setState((s) => ({ ...s, colour: e.target.value }))}
      />
      <button
        className={addItemBtn}
        onClick={() => {
          dispatch(addUnicorn(state));

          setState({
            name: "",
            age: "",
            colour: "",
          });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddUnicron;
