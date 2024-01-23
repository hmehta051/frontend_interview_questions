import { useState } from "react";
import questions from "../constants/accordionData.js";
import AccordMini from "../components/AccordMini";

const Accordion = () => {
  const [multiple, setMultiple] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const setAccordIDnull = (id = null) => {
    setOpenAccordion(multiple ? null : id);
  };
  const handleMultipleAccord = () => {
    // if (multiple) {
    //   setOpenAccordion(-1);
    // }
    setMultiple((p) => !p);
  };
  return (
    <main className="flex flex-col items-center justify-center h-full w-full m-auto">
      <div className="text-3xl">Accordion</div>
      <div className="border-2 border-gray-800 w-[80%] h-full p-2">
        <h4>
          <label htmlFor="max-open">Is multiple open accordion allowed?</label>
          <input
            type="checkbox"
            id="max-open"
            checked={multiple}
            onChange={handleMultipleAccord}
          />
        </h4>
        <hr />
        <br />
        <div className="flex flex-col gap-4">
          {questions.map((elem) => {
            return (
              <AccordMini
                key={elem.id}
                openAccordion={openAccordion}
                setAccordIDnull={setAccordIDnull}
                {...elem}
                multiple={multiple}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Accordion;
