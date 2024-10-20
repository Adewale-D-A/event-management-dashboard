import { useCallback } from "react";

export default function ToggleButton({
  id,
  value,
  functionHandler,
}: {
  id: string;
  value: boolean;
  functionHandler: Function;
}) {
  return (
    <label className="relative inline-block w-[30px] h-[17px]">
      <input
        type="checkbox"
        onChange={() => functionHandler()}
        checked={value}
        title="toggle-button"
        id={id}
        className="hidden toggle-input"
      />
      <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition-all rounded-full"></span>
    </label>
  );
}
