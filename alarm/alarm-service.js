export default class Alarm {
  constructor() {
    this.startBtn = document.getElementById('start');
    this.stopBtn = document.getElementById('stop');
    this.clock = document.getElementById('clock');
    this.pendulum = document.getElementById('pendulum');
    this.alarmMessage = document.getElementById('alarm');
    this.positions = [120, 90, 60];
    this.step = 0;
    this.workingClock = null;
  }

  // eslint-disable-next-line no-underscore-dangle
  _setRotation() {
    this.pendulum.style.setProperty('--rotation', this.positions[this.step]);
    // eslint-disable-next-line no-plusplus
    this.step++;

    if (this.step >= 2) {
      this.positions.reverse();
      this.step = 0;
    }
  }

  // eslint-disable-next-line no-underscore-dangle
  _alarm() {
    new Promise((resolve) => {
      const day = new Date();
      const hr = day.getHours() < 10 ? `0${day.getHours()}` : day.getHours();
      const min = day.getMinutes() < 10 ? `0${day.getMinutes()}` : day.getMinutes();
      const sec = day.getSeconds() < 10 ? `0${day.getSeconds()}` : day.getSeconds();

      this.clock.innerHTML = `<p class="fs-3 mt-3">${hr} : ${min} : ${sec} </p>`;

      // eslint-disable-next-line eqeqeq
      if (sec == '00') {
        throw new Error();
      }

      resolve();
    }).then(() => {
      // eslint-disable-next-line no-underscore-dangle
      setTimeout(this._setRotation, 1000);
    })

      .catch(() => {
        this.alarmMessage.innerHTML = '<p class="fs-3 mt-3" id="mess">It\'s perfect time to wake up !!! </p>';
        setTimeout(() => document.getElementById('mess').remove(), 5000);
      });
  }

  start() {
    this.startBtn.addEventListener('click', () => {
      // eslint-disable-next-line no-underscore-dangle
      this.workingClock = setInterval(this._alarm, 1000);
    });
  }

  stop() {
    this.stopBtn.addEventListener('click', () => {
      clearInterval(this.workingClock);
    });
  }
}
