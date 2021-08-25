/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/newline-after-import */
import UnicornService from './unicorn-service.js';
const wrap = document.getElementById('wrap');

const unicron = new UnicornService();

// unicron.deleteUnicorn(id);

const data = { name: 'Mihail', age: 2, colour: 'yellow' };

// unicron.addUnicorn(data);

unicron.getUnicorns().then((res) => {
  res.forEach((el) => {
    console.log(el);
    const card = `<div class="col">
          <div class="card shadow-sm">
            <div
              class="card-body"
              id="text-info"
              style="background-color: ${el.colour}"
            >
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${el.name}</li>
                <li class="list-group-item">Color: ${el.colour}</li>
                <li class="list-group-item">Age: ${el.age} years</li>
                
              </ul>
              <div>
             <div class="btn-group mt-2">
             <button type="button" class="btn btn-secondary">
                    View
                  </button>
                  <button type="button" class="btn btn-secondary">
                    Edit
                  </button>
                  <button type="button" class="btn btn-secondary">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>`;

    wrap.insertAdjacentHTML('afterbegin', card);
  });
});
