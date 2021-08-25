import UnicornService from "./unicorn-service.js";
import elements from "./elements.js";
const unicron = new UnicornService();

const values = {
  name: "",
  age: null,
  colour: "",
};

document
  .getElementById("name")
  .addEventListener("change", (e) => (values.name = e.target.value));
document
  .getElementById("age")
  .addEventListener("change", (e) => (values.age = Number(e.target.value)));
document
  .getElementById("color")
  .addEventListener(
    "change",
    (e) => (values.colour = e.target.value.toLowerCase())
  );

document.getElementById("addBtn").addEventListener("click", () => {
  unicron.addUnicorn(values).then(() => location.reload());
});

unicron.getUnicorns().then((res) => {
  res.forEach((el) => elements(el, unicron));
});
