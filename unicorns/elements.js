const wrap = document.getElementById("wrap");

const cards = (el) => {
  return `<div class="col" id="card-${el._id}">
<div class="card shadow-sm">
  <div
    class="card-body"
    id="text-info"
    style="background-color: ${el.colour}"
  >
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${el.name}</li>
      <li class="list-group-item">Age: ${el.age} years</li>
      <li class="list-group-item">Color: ${el.colour}</li>
      
      
    </ul>
    <div>
   <div class="btn-group mt-2">
   <button type="button" class="btn btn-secondary" id="view-${el._id}">
          View
        </button>
        <button type="button" class="btn btn-secondary" id="edit-${el._id}">
          Edit
        </button>
        <button type="button" class="btn btn-secondary" id="delete-${el._id}">
          Delete
        </button>
      </div>
    </div>
  </div>
</div>
</div>`;
};

const elements = (el, unicron) => {
  let showCard = cards(el);
  wrap.insertAdjacentHTML("beforeEnd", showCard);

  document.getElementById(`delete-${el._id}`).addEventListener("click", () => {
    unicron.deleteUnicorn(el._id).then(() => location.reload());
  });
  document
    .getElementById(`view-${el._id}`)
    .addEventListener("click", () =>
      window.open(`${unicron._apiBase}unicorns/${el._id}`, "_blank")
    );
  document.getElementById(`edit-${el._id}`).addEventListener("click", () => {
    let name = prompt("Change name", el.name);
    let age = +prompt("Change age", el.age);
    let colour = prompt("Change color", el.colour);

    const payload = {
      name,
      age,
      colour,
    };
    unicron.updateUnicorn(el._id, payload).then(() => location.reload());
  });
};

export default elements;
