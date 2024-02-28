import React, { ChangeEventHandler } from "react";
import _debounce from "lodash/debounce";

type InputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({ onChange }) => {
  const debouncedSearch = _debounce(onChange, 400);

  return (
    <input
      name="main_input"
      type="text"
      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search for country"
      onChange={debouncedSearch}
    />
  );
};

export default Input;
