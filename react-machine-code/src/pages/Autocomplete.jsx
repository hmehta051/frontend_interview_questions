import { useEffect, useRef, useState } from "react";
import useOnClickOutSide from "../hooks/useOnClickOutSide";

const AutoComplete = () => {
  const [color, setColor] = useState(0);
  const [click, setClick] = useState(false);
  const [results, setResults] = useState(null);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [cache, setCache] = useState({});
  // const [activeIndex, setActiveIndex] = useState(-1);
  useOnClickOutSide(inputRef, () => {
    setFocus(false);
  });
  const fetchApi = async (query) => {
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }
    try {
      const headers = {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // You can specify more headers if needed
        },
      };

      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`,
        headers,
      );

      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        alert(`HTTP error! Status: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResults(data?.recipes);
      setCache((prevData) => ({ ...prevData, [input]: data?.recipes }));
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      // You can handle errors here (e.g., return a fallback or display an error message)
      return null; // Return null or handle the error as needed
    }
  };
  const handleShow = () => {
    console.log("hello");
  };

  useEffect(() => {
    const id = setTimeout(() => {
      fetchApi(input);
    }, 500);
    return () => clearTimeout(id);
  }, [input]);

  return (
    <main className="flex flex-col items-center justify-center h-full w-full m-auto">
      <div className="text-3xl">AutoComplete</div>
      <div className="border-2 border-gray-800 w-[80%] h-full p-2">
        <br />
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
            alt="Google"
            width={50}
            height={50}
          />
          <div>Google</div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="border-2 border-gray-600 p-1 w-[500px]"
            name="search"
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => {
              setClick(true);
            }}
            ref={inputRef}
            value={input}
          />
        </div>
        <div
          className="no-scrollbar border-2 w-[500px] flex flex-col justify-center items-start m-auto mt-4"
          style={{
            maxHeight: "400px",
            overflowY: "scroll",
            display: !focus ? "none" : "",
          }}
        >
          {click && (
            <>
              {results?.length > 0 ? (
                <>
                  {results?.map((item, idx) => {
                    return (
                      <div
                        className="p-2 w-full"
                        style={{ background: idx === color ? "gray" : "" }}
                        onMouseOver={() => setColor(idx)}
                        onMouseLeave={() => setColor(-1)}
                        onClick={() => {
                          console.log(`Clicked on: ${item.name}`);
                          // Add logic you need here, like setting input value or selecting item
                          setInput(item.name); // Example: set input to the selected item name
                          setClick(false); // Close the suggestions list after clicking
                        }}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </>
              ) : (
                "No Result"
              )}
            </>
          )}
        </div>
        {/* <div className="flex gap-4 justify-center items-center">
          <input
            value={input}
            type="text"
            id="search"
            placeholder="Search..."
            className="border-2 border-gray-600 p-1 w-[500px]"
            name="search"
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setClick(true)}
            onBlur={() => setClick(false)}
          />
        </div>
        <div
          className="no-scrollbar border-2 w-[500px] flex flex-col justify-center items-start m-auto mt-4"
          style={{ maxHeight: "400px", overflowY: "scroll" }}
        >
          {click && results?.length > 0 && (
            <>
              {results?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-2 w-fit border-2 border-red-600"
                    style={{ background: idx === color ? "gray" : "" }}
                    onMouseOver={() => setColor(idx)}
                    onMouseLeave={() => setColor(-1)}
                    onClick={() => {
                        console.log(`Clicked on: ${item.name}`);
                        // Add logic you need here, like setting input value or selecting item
                        setInput(item.name);  // Example: set input to the selected item name
                        setClick(false);  // Close the suggestions list after clicking
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </>
          )}
        </div> */}
      </div>
    </main>
  );
};

export default AutoComplete;
