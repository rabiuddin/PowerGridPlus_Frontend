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
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0b6a62] focus:ring-2 focus:ring-[#0b6a62]/20 outline-none transition-all"
              placeholder="Enter new password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
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
            className="block text-sm font-medium text-gray-700 mb-1"
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
                  : "border-gray-300 focus:border-[#0b6a62] focus:ring-[#0b6a62]/20"
              } outline-none transition-all`}
              placeholder="Confirm new password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
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
          className="group cursor-pointer relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg bg-primary border-2 border-primary text-white font-medium transition-all duration-300 hover:bg-white hover:text-primary disabled:opacity-70"
        >
          <span className="relative flex items-center justify-center w-full">
            {isSubmitting ? "Updating..." : "Update Password"}
          </span>
        </button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
