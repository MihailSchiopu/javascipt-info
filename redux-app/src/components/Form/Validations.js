import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLength, setMinLength] = useState(false);
  const [onlyNumber, setNumber] = useState(false);
  const [isColorValid, setColorValid] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "validColor":
          const s = new Option().style;

          s.color = value;
          s.color === value.toLowerCase(value)
            ? setColorValid(false)
            : setColorValid(true);

          break;

        case "onlyNumber":
          isNaN(value) ? setNumber(true) : setNumber(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "minLength":
          value.length < validations[validation]
            ? setMinLength(true)
            : setMinLength(false);
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLength || onlyNumber || isColorValid) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLength, onlyNumber, isColorValid]);

  return { isEmpty, minLength, onlyNumber, isColorValid, inputValid };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => setValue(e.target.value);

  const onBlur = () => setIsTouched(true);

  return {
    value,
    onChange,
    onBlur,
    isTouched,
    ...valid,
  };
};
