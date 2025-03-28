import { useState } from "react";

const MovingRobot = () => {
  const [position, setPosition] = useState({ x: null, y: null, facing: null });
  const handleMove = () => {};
  const handleLeft = () => {};
  const handleRight = () => {};
  const handleReport = () => {
    console.log(
      `Current position: ${position.x}, ${position.y}, ${position.facing}`,
    );
  };
  return (
    <div className="flex flex-col items-center justify-center h-full w-full m-auto">
      <h2 className="text-3xl">Moving Robot</h2>
      <section className="border-2 border-blue-900 w-[500px] mt-10 h-[500px] flex items-center justify-evenly gap-10">
        <img
          src="https://png.pngtree.com/png-vector/20190701/ourmid/pngtree-robot-icon-for-your-project-png-image_1532872.jpg"
          alt="Robot"
          width={50}
          height={50}
        />
      </section>
      <button onClick={handleMove}>Move</button>
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
      <button onClick={handleReport}>Report</button>
    </div>
  );
};

export default MovingRobot;
