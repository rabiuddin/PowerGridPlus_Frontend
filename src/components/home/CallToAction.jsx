import { FiArrowRight } from "react-icons/fi";

export default function CallToAction() {
    return (
      <section className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-[#f3fff9] to-[#edfff6] px-3 sm:px-10" id="get-device">
        <h1 className="main-heading">Get your device now!</h1>
        <div className="w-16 h-1 bg-teal-600 mx-auto mb-10"></div>
        <p className="text-lg text-gray-600 text-center my-6">
          Complete the form and we'll get in touch as soon as possible!
        </p>
        
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl ">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" className="mt-1 block w-full border rounded-md p-2" placeholder="Your email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
              <input type="tel" className="mt-1 block w-full border rounded-md p-2" placeholder="Your phone number" />
            </div>
            <div className="col-span-1 md:col-span-3 flex justify-center mt-4">
              <button type="submit" className="inline-flex items-center bg-[#0b6a62] text-white text-lg font-semibold px-8 py-2 border-[1px] border-[#0b6a62] rounded-md cursor-pointer hover:bg-white hover:text-[#0b6a62] transition-all duration-300 ease-in-out">
                Send
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  