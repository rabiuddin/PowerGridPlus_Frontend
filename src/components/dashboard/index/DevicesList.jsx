"use client";

import { useState } from "react";
import {
  FiBattery,
  FiSettings,
  FiToggleRight,
  FiMoreVertical,
  FiClock,
  FiWifi,
  FiPower,
  FiMonitor,
  FiLock,
  FiThermometer,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const getBatteryColor = (battery) => {
  if (battery > 70) return "text-green-500";
  if (battery > 30) return "text-yellow-500";
  return "text-red-500";
};

const DeviceItem = ({ device }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div
            className={`p-3 rounded-lg ${
              device.status === "online" ? "bg-primary/10" : "bg-gray-200"
            }`}
          >
            <device.icon
              className={`h-6 w-6 ${
                device.status === "online" ? "text-primary" : "text-gray-500"
              }`}
            />
          </div>

          {/* Device Info */}
          <div>
            <h3 className="flex text-gray-900 font-medium items-center">
              {device.name}
              <span
                className={`ml-2 inline-block w-2 h-2 rounded-full ${
                  device.status === "online" ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </h3>
            <div className="flex flex-wrap text-gray-500 text-sm items-center mt-1 gap-3">
              <span>{device.type}</span>
              <span className="flex items-center">
                <FiBattery
                  className={`mr-1 ${getBatteryColor(device.battery)}`}
                />
                {device.battery}%
              </span>
              <span>{device.lastActivity}</span>
            </div>
          </div>
        </div>

        {/* Value and Actions */}
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
          <div className="text-gray-900 text-lg font-medium">
            {device.value}
          </div>

          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-gray-500 hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiToggleRight className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-gray-500 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <FiSettings className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-gray-500 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <FiMoreVertical className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden sm:pl-16"
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div>
                  <p className="text-gray-500 text-xs">Location</p>
                  <p className="font-medium">{device.location}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Status</p>
                  <p className="capitalize font-medium">{device.status}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Last Updated</p>
                  <p className="font-medium">{device.lastActivity}</p>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button className="rounded-md text-primary text-sm hover:bg-primary/10 px-3 py-1.5 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DevicesList = () => {
  // Sample device data - in a real app, this would come from an API
  const devices = [
    {
      id: 1,
      name: "Living Room Thermostat",
      type: "Thermostat",
      status: "online",
      battery: 85,
      lastActivity: "2 minutes ago",
      icon: FiThermometer,
      location: "Living Room",
      value: "22°C",
    },
    {
      id: 2,
      name: "Front Door Lock",
      type: "Smart Lock",
      status: "online",
      battery: 72,
      lastActivity: "15 minutes ago",
      icon: FiLock,
      location: "Front Door",
      value: "Locked",
    },
    {
      id: 3,
      name: "Kitchen Smart Display",
      type: "Display",
      status: "offline",
      battery: 0,
      lastActivity: "2 hours ago",
      icon: FiMonitor,
      location: "Kitchen",
      value: "Off",
    },
    {
      id: 4,
      name: "Bedroom Smart Light",
      type: "Light",
      status: "online",
      battery: 100,
      lastActivity: "Just now",
      icon: FiPower,
      location: "Bedroom",
      value: "On",
    },
    {
      id: 5,
      name: "Garage Door Sensor",
      type: "Sensor",
      status: "online",
      battery: 45,
      lastActivity: "35 minutes ago",
      icon: FiWifi,
      location: "Garage",
      value: "Closed",
    },
    {
      id: 6,
      name: "Office Motion Sensor",
      type: "Sensor",
      status: "online",
      battery: 62,
      lastActivity: "1 hour ago",
      icon: FiClock,
      location: "Office",
      value: "No motion",
    },
  ];
  return (
    <div className="bg-white shadow rounded-lg">
      {devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
};

export default DevicesList;
