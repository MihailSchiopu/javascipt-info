import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateUnicorn } from "../../Redux/thunks";
import style from "./change-unicorn-style.module.css";

const { itemCard, itemCardBody, addItemBtn } = style;

const ChangeUnicorn = ({ toggleChangeMod, item }) => {
  const [state, setState] = useState(item);

  const { name, age, colour, _id } = state;
  const dispatch = useDispatch();

  return (
    <div className={itemCard} style={{ backgroundColor: "lightgrey" }}>
      <div className={itemCardBody}>
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
      </div>
      <button className={addItemBtn} disabled>
        View
      </button>
      <button
        className={addItemBtn}
        onClick={() => {
          delete state._id;
          dispatch(UpdateUnicorn(state, _id));
          toggleChangeMod();
        }}
      >
        Edit
      </button>
      <button className={addItemBtn} disabled>
        Delete
      </button>
    </div>
  );
};

export default ChangeUnicorn;
