import { EyeIcon, EyeOffIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/shared/framer-motion/Reveal";
import { useSignup } from "../components/signup/hooks/useSignup";

export default function Signup() {
  const {
    formData,
    handleInputChange,
    handleSignup,
    loading,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useSignup();
  const { email, password, confirmPassword } = formData;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 relative">
      <Link
        to={"/"}
        className="absolute top-3 left-4 flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back to Home</span>
      </Link>

      <div className="mx-auto my-auto w-[310px] sm:w-[400px] md:w-[450px]">
        <Reveal>
          <div className="w-full max-w-md py-4 px-8 space-y-8 bg-white rounded-2xl shadow-xl mt-7 mr-2 sm:mx-0">
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PwergridplusLogoOld-crjOCY7ldycWaAO57V60nBF6N33u7k.png"
                alt="Company Logo"
                className="h-12 w-auto"
              />
              <h2 className="text-2xl font-bold text-gray-900">
                Create an account
              </h2>
              <p className="text-gray-600">
                Please enter your details to sign up
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded cursor-pointer border-gray-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 cursor-pointer block text-sm text-gray-700"
                >
                  I agree to the{" "}
                  <Link to={"#"} className="text-primary hover:text-secondary">
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full cursor-pointer py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:outline-2 hover:outline-gradient-to-r hover:outline-primary"
              >
                Sign up
              </button>

              <div className="text-center">
                <span className="text-gray-600">Already have an account? </span>
                <Link
                  to={"/login"}
                  className="font-medium text-primary hover:text-secondary transition-colors duration-200"
                >
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
