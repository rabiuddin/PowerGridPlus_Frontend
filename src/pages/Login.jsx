import { EyeIcon, EyeOffIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/shared/framer-motion/Reveal";
import { useLogin } from "../components/login/hooks/useLogin";
import FormError from "../components/shared/FormError";
import ButtonWithLoading from "../components/shared/button/ButtonWithLoading";

export default function Login() {
  const {
    formData,
    handleInputChange,
    handleLogin,
    loading,
    showPassword,
    setShowPassword,
    error,
  } = useLogin();
  const { email, password } = formData;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 relative ">
      <Link
        to={"/"}
        className="absolute top-4 left-4 flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back to Home</span>
      </Link>
      <div className="mx-auto my-auto w-[310px] sm:w-[400px] md:w-[450px]">
        <Reveal>
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl sm:mx-0 mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PwergridplusLogoOld-crjOCY7ldycWaAO57V60nBF6N33u7k.png"
                alt="Company Logo"
                className="h-12 w-auto"
              />
              <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
              <p className="text-gray-600">
                Please enter your details to Log in
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to={"/forgot-password"}
                  className="text-sm font-medium text-primary hover:text-secondary"
                >
                  Forgot password?
                </Link>
              </div>

              <FormError error={error} />

              <ButtonWithLoading text={"Log In"} loading={loading} />

              <div className="text-center">
                <span className="text-gray-600">Don't have an account? </span>
                <Link
                  to={"/signup"}
                  className="font-medium text-primary hover:text-secondary transition-colors duration-200"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
