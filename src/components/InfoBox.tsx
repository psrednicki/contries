import React from "react";
import { Country } from "../utils/api";

const InfoBox: React.FC<Country> = ({ name: { common, official } }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Common</h3>
          <p className="text-sm text-gray-600">{common}</p>
        </div>
        {/* <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Informacja 2</h3>
          <p className="text-sm text-gray-600">{nativeName}</p>
        </div> */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Offical</h3>
          <p className="text-sm text-gray-600">{official}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
