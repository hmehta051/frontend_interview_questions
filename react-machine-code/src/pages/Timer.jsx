import { useMemo, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(null);
  //useRef
  //   const timerRef = useRef(null);
  //   const handleStart = () => {
  //     if (!timerRef.current) {
  //       timerRef.current = setInterval(() => {
  //         setCount((p) => p + 1);
  //       }, 100);
  //     }
  //   };
  //   const handleStop = () => {
  //     if (timerRef.current) {
  //       clearInterval(timerRef.current);
  //       timerRef.current = null;
  //     }
  //   };
  //   const handleReset = () => {
  //     setCount(0);
  //     clearInterval(timerRef.current);
  //     timerRef.current = null;
  //   };

  // useMemo

  const handleStart = useMemo(() => {
    return () => {
      if (!stop) {
        const timerStop = setInterval(() => {
          setCount((p) => p + 1);
        }, 100);
        setStop(timerStop);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  const handleStop = useMemo(() => {
    return () => {
      if (stop) {
        clearInterval(stop);
        setStop(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  const handleReset = useMemo(() => {
    return () => {
      setCount(0);
      if (stop) {
        clearInterval(stop);
        setStop(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  return (
    <div className="flex flex-col items-center justify-center h-[50%] w-[50%] m-auto border-2 border-green-700">
      <h2 className="text-3xl">Star Component</h2>
      <p>{count}</p>
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

export default Timer;
