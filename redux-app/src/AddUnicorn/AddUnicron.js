import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./add-unicorn-style.module.css";
import { AddUnicorn } from "../Redux/thunks";

const { addItemCard, addItemBtn } = style;

const onChangeInput = (state, inputArea, text) => ({
  ...state,
  [inputArea]: text,
});

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
        onChange={(e) =>
          setState((s) => onChangeInput(s, "name", e.target.value))
        }
      />
      <p>Age</p>
      <input
        type="text"
        value={age}
        onChange={(e) =>
          setState((s) => onChangeInput(s, "age", e.target.value))
        }
      />
      <p>Color</p>
      <input
        type="text"
        value={colour}
        onChange={(e) =>
          setState((s) => onChangeInput(s, "colour", e.target.value))
        }
      />
      <button
        className={addItemBtn}
        onClick={() => dispatch(AddUnicorn(state))}
      >
        Add
      </button>
    </div>
  );
};

export default AddUnicron;
