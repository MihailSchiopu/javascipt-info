import React from "react";
import { useDispatch } from "react-redux";
import style from "./unicorn-style.module.css";
import { deleteUnicorn } from "../../Redux/actions";

const { itemCard, itemCardBody, text, addItemBtn } = style;

const Unicorn = ({ toggleChangeMod, item }) => {
  const { name, age, colour, _id } = item;
  const dispatch = useDispatch();
  return (
    <div
      className={itemCard}
      style={{ backgroundColor: colour }}
      onDoubleClick={toggleChangeMod}
    >
      <div className={itemCardBody}>
        <p className={text}>{name}</p>
        <p className={text}>{age} years</p>
        <p className={text}> {colour} </p>
      </div>
      <button className={addItemBtn}>View</button>
      <button className={addItemBtn} disabled>
        Edit
      </button>
      <button
        className={addItemBtn}
        onClick={() => dispatch(deleteUnicorn(_id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Unicorn;