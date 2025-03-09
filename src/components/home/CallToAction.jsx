import { FiArrowRight } from "react-icons/fi";
import { useCallToAction } from "./hooks/useCallToAction";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function CallToAction() {
  const { formData, handleInputChange, handleFormSubmit, loading } =
    useCallToAction();
  const { name, email, phone } = formData;
  return (
    <section
      className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-[#f3fff9] to-[#edfff6] px-3 sm:px-10"
      id="get-device"
    >
      <h1 className="main-heading">Get your device now!</h1>
      <div className="w-16 h-1 bg-teal-600 mx-auto mb-10"></div>
      <p className="text-lg text-gray-600 text-center my-6">
        Complete the form and we'll get in touch as soon as possible!
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl ">
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              onChange={handleInputChange}
              value={name}
              name="name"
              type="text"
              className="mt-1 block w-full border rounded-md p-2"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              onChange={handleInputChange}
              value={email}
              name="email"
              type="email"
              className="mt-1 block w-full border rounded-md p-2"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              onChange={handleInputChange}
              value={phone}
              name="phone"
              type="tel"
              className="mt-1 block w-full border rounded-md p-2"
              placeholder="Your phone number"
              required
            />
          </div>
          <div className="col-span-1 md:col-span-3 flex justify-center mt-4">
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading
                  ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
                  : "bg-primary hover:bg-white hover:text-primary cursor-pointer"
              } inline-flex gap-2 items-center  text-white text-lg font-semibold px-8 py-2 border-[1px] border-primary rounded-md   transition-all duration-300 ease-in-out`}
            >
              {loading && (
                <ArrowPathIcon className="w-5 h-5 animate-spin text-white" />
              )}
              Send
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
