import React, { ChangeEventHandler } from "react";

type InputProps = {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<InputProps> = ({ onChange }) => {
  return (
    <input
      name="main_input"
      type="text"
      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      placeholder="Check text"
      onChange={onChange}
    />
  );
};

export default Input;
