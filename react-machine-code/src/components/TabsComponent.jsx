import { useState } from "react";

/* eslint-disable react/prop-types */
const TabsComponent = ({
  tabsData,
  disabledTabs,
  orientation,
  initialActiveTab,
}) => {
  console.log(tabsData, disabledTabs, orientation, initialActiveTab);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTab(idx);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[50%] w-[50%] m-auto border-2 border-green-700">
      <h1 className="text-3xl text-center">Tabs Component</h1>
      <div
        className={`flex gap-5 mt-5 ${
          orientation === "Horizontal" ? "flex-row" : "flex-col"
        }`}
      >
        {tabsData.map((elem, idx) => {
          return (
            <button
              onClick={() => handleTabChange(idx)}
              key={idx}
              style={{
                border:
                  idx === activeTab ? "2px solid black" : "2px solid white",
                padding: "5px",
                background:
                  idx === activeTab
                    ? "white"
                    : disabledTabs.includes(idx)
                      ? "grey"
                      : "black",
                color: idx === activeTab ? "black" : "white",
                width: "100px",
                cursor: disabledTabs.includes(idx) ? "not-allowed" : "pointer",
              }}
              disabled={disabledTabs.includes(idx)}
            >
              {elem.title}
            </button>
          );
        })}
      </div>
      <div className="mt-5 ">{tabsData[activeTab].content}</div>
    </div>
  );
};

export default TabsComponent;
