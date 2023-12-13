import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [val, setVal] = useState(0);
  const handleChangeVal = (e) => {
    setVal(e.target.value);
  };
  useEffect(() => {
    // let id;

    if (val < 100) {
      setTimeout(() => {
        setVal(val + 10);
      }, 1000);
    } else {
      setVal(0);
    }
    // else {
    //   setTimeout(id);
    // }
    // return () => setTimeout(id);
  }, [val]);
  return (
    <main className="flex flex-col items-center justify-center h-full w-full m-auto">
      <div className="text-3xl">Progress Bar</div>
      {val < 100 ? (
        <div className="border-2 border-gray-800 w-[80%] h-full p-2">
          <label htmlFor="range">{val}%</label>

          <div
            style={{
              width: !val ? "100%" : `${val}%`,
              background: "gray",
              textAlign: "right",
              color: "white",
              border: "1px solid gray",
              height: "30px",
            }}
          >
            {!val ? null : `${val}%`}
          </div>

          <br />
          <input
            type="range"
            name="range"
            id="range"
            min="0"
            max="100"
            value={val}
            onChange={handleChangeVal}
          />
        </div>
      ) : (
        <div className="border-2 border-gray-800 w-[80%] h-full p-2">
          Downloading....
        </div>
      )}
    </main>
  );
};

export default ProgressBar;
