import { useMemo, useState } from "react";

const TimerAdvance = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(null);
  const hours = useMemo(() => Math.floor(time / 3600), [time]); // Calculate hours
  const mins = useMemo(() => Math.floor((time % 3600) / 60), [time]); // Calculate minutes
  const sec = useMemo(() => time % 60, [time]); // Calculate remaining seconds

  const handleStart = () => {
    if (!isRunning) {
      const run = setInterval(() => {
        setTime((p) => p + 1);
      }, 100);
      setIsRunning(run);
    }
  };
  const handleStop = () => {
    if (isRunning) {
      clearInterval(isRunning);
      setIsRunning(null);
    }
  };
  const handleReset = () => {
    setTime(0);
    if (isRunning) {
      clearInterval(isRunning);
      setIsRunning(null);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-[50%] w-[50%] m-auto border-2 border-green-700">
      <h2 className="text-3xl">Star Component</h2>
      <div>
        <span>{hours}:</span>
        <span>{mins}:</span>
        <span>{sec}</span>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleStart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-yellow-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerAdvance;
