import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import PasswordStrengthIndicator from "../shared/PasswordStrengthIndicator";
import FormError from "../shared/FormError";

const ResetPasswordForm = ({ useResetPasswordInstance }) => {
  const {
    handleSubmit,
    password,
    setPassword,
    setShowPassword,
    showPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    isSubmitting,
    passwordStrength,
  } = useResetPasswordInstance;
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="password"
            className="text-gray-700 text-sm block font-medium mb-1"
          >
            New Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg w-full focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 transition-all"
              placeholder="Enter new password"
              required
            />
            <button
              type="button"
              className="text-gray-500 -translate-y-1/2 absolute hover:text-gray-700 right-3 top-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Password Strength Indicator */}
          {password && (
            <PasswordStrengthIndicator passwordStrength={passwordStrength} />
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="text-gray-700 text-sm block font-medium mb-1"
          >
            Confirm New Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                confirmPassword && password !== confirmPassword
                  ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-primary focus:ring-primary/20"
              } outline-none transition-all`}
              placeholder="Confirm new password"
              required
            />
            <button
              type="button"
              className="text-gray-500 -translate-y-1/2 absolute hover:text-gray-700 right-3 top-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {confirmPassword && password !== confirmPassword && (
            <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
          )}
        </div>

        <FormError error={error} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary border-2 border-primary justify-center rounded-lg text-white w-full cursor-pointer disabled:opacity-70 duration-300 font-medium group hover:bg-white hover:text-primary inline-flex items-center overflow-hidden px-6 py-3 relative transition-all"
        >
          <span className="flex justify-center w-full items-center relative">
            {isSubmitting ? "Updating..." : "Update Password"}
          </span>
        </button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
