import { useState } from "react";
import { EyeIcon, EyeOffIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/shared/Reveal";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

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

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
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
                  to={"#"}
                  className="text-sm font-medium text-primary hover:text-secondary"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:outline-2  hover:outline-gradient-to-r hover:outline-primary "
              >
                Log in
              </button>

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
