const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const clock = document.getElementById('clock');
const pendulum = document.getElementById('pendulum')
const alarmMessage = document.getElementById('alarm')

const positions = [120, 90, 60]
let step = 0

let workingClock

startBtn.addEventListener('click', () => {
    workingClock = setInterval(alarm, 1000)

})

stopBtn.addEventListener('click', () => {
    clearInterval(workingClock)

})

let setRotation = () => {

    pendulum.style.setProperty("--rotation", positions[step])
    step++

    if (step >= 2) {
        positions.reverse()
        step = 0

    }
}

const alarm = () => {
    new Promise((resolve) => {
        let day = new Date()
        let hr = day.getHours() < 10 ? '0' + day.getHours() : day.getHours()
        let min = day.getMinutes() < 10 ? '0' + day.getMinutes() : day.getMinutes()
        let sec = day.getSeconds() < 10 ? '0' + day.getSeconds() : day.getSeconds()

        clock.innerHTML = `<p class="fs-3 mt-3">${hr} : ${min} : ${sec} </p>`

        if (sec == 00) {
            throw new Error()
        }

        resolve()

    })
        .then(() => {
            setRotation()
            setTimeout(setRotation, 1000)

        })
        .catch(() => {
            alarmMessage.innerHTML = `<p class="fs-3 mt-3" id="mess">It's perfect time to wake up !!! </p>`
            setTimeout(() => document.getElementById("mess").remove(), 5000)
        })

}



