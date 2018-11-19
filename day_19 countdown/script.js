let countdown;
const endTime = document.querySelector('.display__end-time');
const timerdisplay = document.querySelector('.display__time-left');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000);
        if (secondLeft < 0) {
            clearInterval(countdown);
            alert('FIN');
            return;
        }
        displayTimeLeft(secondLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hour = Math.floor(minutes / 60);
    const reminderSeconds = seconds % 60;
    const display = `${hour}: ${minutes-(hour*60)<10?'0':''}${minutes>=60?minutes-(hour*60):minutes} : ${reminderSeconds<10?'0':''}${reminderSeconds}`;
    timerdisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `be back at ${adjustedHour}:${minutes<10?'0':''}${minutes}`;
}
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});