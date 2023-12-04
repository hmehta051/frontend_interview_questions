import { useState } from "react";

const StarComponent = () => {
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center h-[50%] w-[50%] m-auto border-2 border-green-700">
      <h2 className="text-3xl">Star Component</h2>
      <div className="mt-10">
        {[...Array(5)].map((_, idx) => {
          idx += 1;
          return (
            <button
              key={idx}
              onClick={() => setClick(idx)}
              onMouseLeave={() => setHover(click)}
              onMouseEnter={() => setHover(idx)}
            >
              {idx <= (hover || click) ? <> &#9733;</> : <>&#9734;</>} &nbsp;
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StarComponent;
