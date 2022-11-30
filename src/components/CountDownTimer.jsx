import { useEffect, useState } from "react";

export default function CountDownTimer(props) {
  const { date, time } = props;
  // const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const timeDate = `${date} ${time}`;
  const startTimer = () => {
    const countDownDate = new Date(timeDate).getTime();
    // const countDownDate = new Date("Octobar 10, 2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      // const days = Math.floor(
      //     distance / (24 * 60 * 60 * 1000)
      // ).toLocaleString("en-US", {
      //     minimumIntegerDigits: 2,
      //     useGrouping: false,
      // });
      const hours = Math.floor(distance / 1000 / 60 / 60).toLocaleString(
        "en-US",
        { minimumIntegerDigits: 2, useGrouping: false }
      );
      const minutes = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60)
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const seconds = Math.floor(
        (distance % (60 * 1000)) / 1000
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

      if (distance < 0) {
        // Stop Timer
        // setTimerDays(
        //     (0).toLocaleString("en-US", {
        //         minimumIntegerDigits: 2,
        //         useGrouping: false,
        //     })
        // );
        setTimerHours(
          (0).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        setTimerMinutes(
          (0).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        setTimerSeconds(
          (0).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        clearInterval(interval.current);
      } else {
        // Update Timer
        // setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <>
      {timerHours} : {timerMinutes} : {timerSeconds}
    </>
  );
}
