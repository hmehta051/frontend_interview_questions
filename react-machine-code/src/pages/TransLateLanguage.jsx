import { LANGUAGES } from "../utils/Languages";

const TransLateLanguage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full m-auto">
      <div className="text-3xl">Language Translator</div>
      <h2>Languages</h2>
      <div className="border-2 border-gray-800 w-[80%] h-full p-2 flex items-center justify-center">
        <select defaultValue={"en"}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>Some Random Text</div>
    </div>
  );
};

export default TransLateLanguage;
