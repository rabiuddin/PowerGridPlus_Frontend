import React from "react";
import StepCard from "./StepCard";

const HowItWorks = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "AI Smart Plug unit set up",
      description:
<>
  Insert the AI smart plug into the power outlet to commence setup. The plugin sensor measurement specification for residential buildings accommodates a peak of 3kW load, 16Amps standard (or range between 15Amp to 20 Amp), 240Volts AC working voltage range, and 50-60 Hz configuration.
  <br />
  <br />
  Power on the smart plug using the “Push Button” on the AI smart plug. Setup routines follow a few easy steps that allow customers to connect the smart plug to a Wi-Fi network. The smart plug supports connection to a 2.4GHz Wi-Fi network. Following connection, customers select the AI mode that ensures they effortlessly add new appliances (for example, television, lamp, fridge, washing machine). Launch the PowergridPlus App, and iteratively plug in appliances until “New plug detected.” Tap the “New plug” icon, followed by the “+” icon to complete setup, then go to Step 3. This AI sensor sharing step gives the smart plug the ability to automatically and intelligently identify and track different loads.
  <br />
  <br />
  This compact design configuration allows clients to buy a single smart plug unit to sense all electrical loads and save costs on additional sensors while also having the benefits of real-time feedback on key loads, saving costs on smart plug technologies.
</>,
      image: "/src/assets/step1Image.png", // Replace with actual image path
    },
    {
      step: "STEP 2",
      title: "Remote access and control",
      description:
        <>
        The AI Smart Plug allows running household appliances to be remotely switched off using integrated web and mobile applications.
<br />
<br />
Manage all your electrical appliances from almost anywhere (whether you are at work or traveling) using the AI Smart Plugs through the PowergridPlus app.
<br />
<br />
If you need to switch a device on or off while you are away, simply use the mobile or web app to control all devices connected to the Smart Plug.

Minimize energy consumption by utilizing the mobile or web app to switch off your appliances when you are away from home.
        </>,
      image: "/src/assets/step2Image.jpg",
    },
    {
      step: "STEP 3",
      title: "Web and mobile application",
      description:<>
      Customers are required to download and register AI Smart plug apps every time they buy a new device. This Smart Plug includes a convenient energy and CO2 usage Dashboard and is compatible with the free accompanying web and mobile app.

All information regarding your devices is transmitted to our online dashboard, where you can view reports on your energy consumption, electricity price tracking, and CO2 emissions, as well as manage the settings that control when your Smart plugs are turned on and off.
<br />
<br />
The PowergridPlus app Dashboard incorporates advanced user interfaces such as demand-side recommendation services, conversational chatbot technology, and extended reality for providing real-time reports and insights into electricity consumption and CO2 emissions. These advanced user interfaces help improve user experience and engagement with the sensing-as-a-service (S2aaS) platform. This approach allows you to gain visibility into your energy consumption and easily identify the areas in your home that are causing energy waste or contributing to the biggest power bill every month.
<br />
<br />
Our Smart Plug utilizes AI to automatically detect and generate recommendations that help eliminate minor power waste from your devices, helping to lower both your carbon emissions and electricity costs.
      </>,
      image: "/src/assets/step3Image.jpg",
    },
  ];

  return (
    <div className="py-16 bg-gray-100 bg-cover" style={{ backgroundImage: "URL('/src/assets/HowItWorksBg.png')" }}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="main-heading">How it works?</h1>
        <div className="w-16 h-1 bg-teal-600 mx-auto mb-10"></div>
      </div>

      <div className="space-y-12 px-4 md:px-0 w-[80%] mx-auto">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
