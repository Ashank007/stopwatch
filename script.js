const clock = document.querySelector(".clock");
        let second = 0, minute = 0, hour = 0, intervvalId;
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');

        const startStopWatch = () => {
            intervvalId = setInterval(() => {
                if (second < 59) {
                    second++;
                } else if (minute >= 59) {
                    hour++;
                    minute = 0;
                } else {
                    second = 0;
                    minute++;
                }
                const seconds = second.toString().padStart(2, "0"),
                      minutes = minute.toString().padStart(2, "0"),
                      hours = hour.toString().padStart(2, "0");
                clock.innerText = `${hours}:${minutes}:${seconds}`;
            }, 1000);

            startBtn.disabled = true;
            stopBtn.disabled = false;
            resetBtn.disabled = false;
        };

        const stopStopWatch = () => {
            clearInterval(intervvalId);
            startBtn.disabled = false;
            stopBtn.disabled = true;
        };

        const resetStopWatch = () => {
            clock.innerText = `00:00:00`;
            second = 0;
            minute = 0;
            hour = 0;
            startBtn.disabled = false;
            stopBtn.disabled = true;
            resetBtn.disabled = true;
        };