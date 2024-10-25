import SearchIcon from "../../assets/icons/search";

export default function TableSearch({
  placeholder,
  search,
  setSearch,
}: {
  placeholder: string;
  search: string;
  setSearch: Function;
}) {
  return (
    <div className=" w-full flex items-center p-2 gap-2 border dark:border-none dark:bg-dark-500 text-sm">
      <label htmlFor={"keyword-search"} className=" flex items-center gap-2">
        <SearchIcon className=" size-6 text-gray-400" />
        <input
          id={"keyword-search"}
          placeholder={placeholder}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className=" w-full outline-none bg-transparent"
        />
      </label>
    </div>
  );
}
