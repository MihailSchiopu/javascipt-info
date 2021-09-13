import React from "react";
import style from "./add-unicorn-style.module.css";
import { addUnicorn } from "../../Redux/thunks";
import Form from "../Form/UnicornForm";
import { useInput } from "../Form/Validations";
import { useDispatch } from "react-redux";

const AddUnicorn = () => {
  const dispatch = useDispatch();

  const name = useInput("", { isEmpty: true, minLength: 2 });
  const age = useInput("", { isEmpty: true, onlyNumber: true });
  const color = useInput("", { isEmpty: true, validColor: true });

  const { addItemCard, addItemBtn } = style;

  return (
    <div className={addItemCard}>
      <Form fields={{ name, age, color }} />
      <button
        className={addItemBtn}
        disabled={!name.inputValid || !age.inputValid || !color.inputValid}
        onClick={() =>
          dispatch(
            addUnicorn({
              name: name.value,
              age: age.value,
              colour: color.value,
            })
          )
        }
      >
        Add
      </button>
    </div>
  );
};

export default AddUnicorn;
