import React from "react";
import {
  getStrengthBackgroundColor,
  getStrengthColor,
  getStrengthText,
} from "../../utils/password.utils";

const PasswordStrengthIndicator = ({ passwordStrength }) => {
  return (
    <>
      <div className="mt-2">
        <div className="flex justify-between items-center mb-1">
          <div className="text-xs font-medium">Password strength:</div>
          <div
            className={`text-xs font-medium ${getStrengthColor(
              passwordStrength
            )}`}
          >
            {getStrengthText(passwordStrength)}
          </div>
        </div>
        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${getStrengthBackgroundColor(
              passwordStrength
            )} transition-all duration-300`}
            style={{ width: `${(passwordStrength / 5) * 100}%` }}
          ></div>
        </div>
        <ul className="text-xs text-gray-500 mt-2 space-y-1 pl-4 list-disc">
          <li className={password.length >= 8 ? "text-green-500" : ""}>
            At least 8 characters
          </li>
          <li className={/[A-Z]/.test(password) ? "text-green-500" : ""}>
            At least one uppercase letter
          </li>
          <li className={/[0-9]/.test(password) ? "text-green-500" : ""}>
            At least one number
          </li>
          <li className={/[^A-Za-z0-9]/.test(password) ? "text-green-500" : ""}>
            At least one special character
          </li>
        </ul>
      </div>
    </>
  );
};

export default PasswordStrengthIndicator;
