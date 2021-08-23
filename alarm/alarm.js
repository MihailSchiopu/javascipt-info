const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const clock = document.getElementById('clock');
const pendulum = document.getElementById('pendulum')
const alarmMessage = document.getElementById('alarm')

const positions = [120, 90, 60]
let step = 0

let workingClock
let workingPendulum

startBtn.addEventListener('click', () => {
    workingClock = setInterval(alarm, 1000)
    setRotation()
})

stopBtn.addEventListener('click', () => {
    clearInterval(workingClock)
    clearInterval(workingPendulum)
})

let setRotation = async () => {

    workingPendulum = await setInterval(() => {
        pendulum.style.setProperty("--rotation", positions[step])
        step++

        if (step >= 2) {
            positions.reverse()
            step = 0

        }
    }, 1000)
}

const alarm = () => {
    let day = new Date()
    let hr = day.getHours() < 10 ? '0' + day.getHours() : day.getHours()
    let min = day.getMinutes() < 10 ? '0' + day.getMinutes() : day.getMinutes()
    let sec = day.getSeconds() < 10 ? '0' + day.getSeconds() : day.getSeconds()
    clock.innerHTML = `<p class="fs-3 mt-3">${hr} : ${min} : ${sec} </p>`

    if (sec == 00) {
        try {
            ll
        } catch (error) {
            alarmMessage.innerHTML = `<p class="fs-3 mt-3" id="mess">It's perfect time to wake up !!! </p>`
            setTimeout(() => document.getElementById("mess").remove(), 5000)
        }
    }
}



