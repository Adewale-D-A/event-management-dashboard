import { useState } from "react";
import SearchIcon from "../../assets/icons/search";

export default function TableSearch({ placeholder }: { placeholder: string }) {
  const [keywords, setKeywords] = useState("");
  return (
    <div className=" flex items-center p-2 w-full gap-2 border dark:border-none dark:bg-dark-500 text-sm">
      <label htmlFor={"keyword-search"} className=" flex items-center gap-2">
        <SearchIcon className=" size-6 text-gray-400" />
        <input
          id={"keyword-search"}
          placeholder={placeholder}
          value={keywords}
          onChange={(event) => setKeywords(event.target.value)}
          className=" w-full outline-none bg-transparent"
        />
      </label>
    </div>
  );
}
