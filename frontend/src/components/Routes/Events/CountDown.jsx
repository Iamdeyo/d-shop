import { useState, useEffect } from 'react';

const CountDown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      // Target date has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    const days = Math.floor(timeDifference / oneDay);
    const hours = Math.floor((timeDifference % oneDay) / oneHour);
    const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
    const seconds = Math.floor((timeDifference % oneMinute) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap uppercase justify-center items-center gap-3 md:justify-start">
      <p className="flex flex-col items-center justify-center w-20 h-20 text-white font-semibold rounded-full bg-red-500 text-sm">
        {timeLeft.days}
        <span className="text-[10px]">Days</span>
      </p>
      <p className="flex flex-col items-center justify-center w-20 h-20 text-white font-semibold rounded-full bg-red-500 text-sm">
        {timeLeft.hours}
        <span className="text-[10px]">Hours</span>
      </p>
      <p className="flex flex-col items-center justify-center w-20 h-20 text-white font-semibold rounded-full bg-red-500 text-sm">
        {timeLeft.minutes}
        <span className="text-[10px]">Mins</span>
      </p>
      <p className="flex flex-col items-center justify-center w-20 h-20 text-white font-semibold rounded-full bg-red-500 text-sm">
        {timeLeft.seconds}

        <span className="text-[10px]">Secs</span>
      </p>
    </div>
  );
};

export default CountDown;
