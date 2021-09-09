import React from "react";
import style from "./add-unicorn-style.module.css";
import { addUnicorn } from "../Redux/thunks";
import Form from "../Form/Form";

const AddUnicron = () => {
  return <Form style={style} action={addUnicorn} />;
};

export default AddUnicron;
