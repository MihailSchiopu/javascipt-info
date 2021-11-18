import React from "react";

const Form = ({ fields }) => {
  const { name, age, color } = fields;

  return (
    <React.Fragment>
      <p>Name</p>
      {name.isTouched && name.isEmpty && (
        <p style={{ color: "red" }}>{"This field is required"}</p>
      )}
      {name.isTouched && name.minLength && (
        <p style={{ color: "red" }}>{"Min length of this field is 2"}</p>
      )}
      <input
        type="text"
        name="name"
        value={name.value}
        onBlur={name.onBlur}
        onChange={name.onChange}
      />
      <p>Age</p>
      {age.isTouched && age.isEmpty && (
        <p style={{ color: "red" }}>{"This field is required"}</p>
      )}
      {age.isTouched && age.onlyNumber && (
        <p style={{ color: "red" }}>{"This field should be a bumber"}</p>
      )}
      <input
        type="text"
        name="age"
        value={age.value}
        onBlur={age.onBlur}
        onChange={age.onChange}
      />
      <p>Color</p>
      {color.isTouched && color.isEmpty && (
        <p style={{ color: "red" }}>{"This field is required"}</p>
      )}
      {color.isTouched && color.isColorValid && (
        <p style={{ color: "red" }}>{"This color is not valid"}</p>
      )}
      <input
        type="text"
        name="colour"
        value={color.value}
        onBlur={color.onBlur}
        onChange={color.onChange}
      />
    </React.Fragment>
  );
};

export default Form;
