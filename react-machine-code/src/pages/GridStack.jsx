import { useState } from "react";

/* eslint-disable react/prop-types */
const Cell = ({ filled, handleClick, isDisabled, label }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        background: filled ? "green" : "white",
        border: "1px solid black",
        width: "100px",
        height: "100px",
      }}
      disabled={isDisabled}
      aria-label={label}
    />
  );
};

const GridStack = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivate, setIsDeactivate] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivate(true);
    const timer = setInterval(() => {
      setOrder((latestVal) => {
        const newOrder = latestVal.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivate(false);
        }
        return newOrder;
      });
    }, 300);
  };
  const activateCells = (idx) => {
    const newOrder = [...order, idx];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells(newOrder);
    }
    console.log(idx);
  };
  return (
    <div className="flex flex-col items-center justify-center h-full w-full m-auto">
      <div className="text-3xl">Grid Stack</div>
      <h2>{status}</h2>
      <div className="border-2 border-gray-800 w-[80%] h-full p-2 flex items-center justify-center">
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
        >
          {config.flat(1).map((elem, index) =>
            elem ? (
              <Cell
                key={index}
                filled={order.includes(index)}
                handleClick={() => activateCells(index)}
                isDisabled={order.includes(index) || isDeactivate}
                label={`Cell ${index}`}
              />
            ) : (
              // eslint-disable-next-line react/jsx-key
              <span />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default GridStack;
