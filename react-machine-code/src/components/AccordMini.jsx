/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const AccordMini = (props) => {
  const { openAccordion, setAccordIDnull, multiple, title, info, id } = props;
  const [show, setShow] = useState(false);
  const toggle = () => {
    setAccordIDnull(id);
    setShow((p) => !p);
  };
  useEffect(() => {
    if (openAccordion) {
      setShow(id === openAccordion);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, openAccordion]);
  useEffect(() => {
    setShow(false);
  }, [multiple]);
  return (
    <div className="border-2 border-grey-900 p-2">
      <div className="bg-slate-300 flex justify-between items-center p-2">
        <div>{title}</div>
        <button
          className="bg-black text-white rounded-lg w-[30px] h-[30px] flex items-center justify-center"
          onClick={toggle}
        >
          {show ? "-" : "+"}
        </button>
      </div>
      <div className="p-2">{show && <p>{info}</p>}</div>
    </div>
  );
};

export default AccordMini;
