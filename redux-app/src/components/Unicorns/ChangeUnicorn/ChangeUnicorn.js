import React from "react";
import { useDispatch } from "react-redux";
import { updateUnicorn } from "./../../../Redux/thunks";
import style from "./change-unicorn-style.module.css";
import UnicornForm from "./../../Form/UnicornForm";
import { useInput } from "./../../Form/Validations";

const { itemCard, itemCardBody, addItemBtn } = style;

const ChangeUnicorn = ({ toggleChangeMod, item }) => {
  const dispatch = useDispatch();

  const name = useInput(item.name, { isEmpty: true, minLength: 2 });
  const age = useInput(item.age, { isEmpty: true, onlyNumber: true });
  const color = useInput(item.colour, { isEmpty: true, validColor: true });

  return (
    <div className={itemCard} style={{ backgroundColor: "lightgrey" }}>
      <div className={itemCardBody}>
        <UnicornForm fields={{ name, age, color }} />
      </div>

      <button
        className={addItemBtn}
        onClick={() => {
          dispatch(
            updateUnicorn(
              { name: name.value, age: age.value, colour: color.value },
              item._id
            )
          );
          toggleChangeMod();
        }}
      >
        Save
      </button>
      <button className={addItemBtn} onClick={toggleChangeMod}>
        Cancel
      </button>
    </div>
  );
};

export default ChangeUnicorn;
