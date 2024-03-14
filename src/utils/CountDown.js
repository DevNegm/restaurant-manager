import  { useState, useEffect } from 'react';

const Countdown = ({ startNumber, onEnd, id }) => {
  // Convert startNumber to milliseconds for the initial state
  const [count, setCount] = useState(startNumber * 1000);

  useEffect(() => {
    // Trigger onEnd when countdown reaches 0
    if (count === 0) {
      onEnd(id);
    }
    // Decrement count every 100 ms for a more precise countdown
    const timerId = setInterval(() => {
      setCount((prevCount) => Math.max(0, prevCount - 100));
    }, 100);

    return () => clearInterval(timerId);
  }, [count, onEnd, id]);

  // Convert count (in milliseconds) back to seconds for display
  const displayTime = formatTime(Math.round(count / 1000));

  return displayTime;
};

// Function to convert seconds to clock format
  const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  // Pad the minutes and seconds with leading zeros if necessary
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default Countdown;
