import React, { useState } from "react";
import ChangeUnicorn from "./ChangeUnicorn/ChangeUnicorn";
import Unicorn from "./Unicorn/Unicorn";

const Unicorns = ({ item }) => {
  const [changeMod, setChangeMod] = useState(false);

  const toggleChangeMod = () => setChangeMod((s) => !s);

  const showElement = changeMod ? (
    <ChangeUnicorn item={item} toggleChangeMod={toggleChangeMod} />
  ) : (
    <Unicorn item={item} toggleChangeMod={toggleChangeMod} />
  );

  return <div>{showElement}</div>;
};

export default Unicorns;
