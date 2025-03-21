"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiWifi,
  FiPower,
  FiSettings,
  FiMoreVertical,
  FiPlus,
  FiThermometer,
  FiMonitor,
  FiLock,
  FiClock,
  FiSearch,
  FiFilter,
  FiRefreshCw,
  FiChevronDown,
  FiBattery,
  FiToggleRight,
} from "react-icons/fi";

// Sample device data - in a real app, this would come from an API
const deviceData = [
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

const DevicesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Get unique locations for filter
  const locations = [
    "All",
    ...new Set(deviceData.map((device) => device.location)),
  ];

  // Filter devices based on search and filters
  const filteredDevices = deviceData.filter((device) => {
    const matchesSearch =
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      selectedLocation === "All" || device.location === selectedLocation;
    const matchesStatus =
      selectedStatus === "All" || device.status === selectedStatus;

    return matchesSearch && matchesLocation && matchesStatus;
  });

  return (
    <motion.div
      className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="border-b border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="flex text-gray-800 text-lg font-semibold items-center mb-4 sm:mb-0">
            <FiWifi className="h-5 text-primary w-5 mr-2" />
            IoT Devices
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex bg-primary justify-center rounded-lg text-sm text-white font-medium hover:bg-[#22a196] items-center px-4 py-2 transition-colors"
          >
            <FiPlus className="mr-2" />
            Add Device
          </motion.button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-50 border-b border-gray-100 p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Search */}
          <div className="flex-grow relative">
            <div className="flex absolute inset-y-0 items-center left-0 pl-3 pointer-events-none">
              <FiSearch className="h-5 text-gray-400 w-5" />
            </div>
            <input
              type="text"
              className="border border-gray-300 rounded-lg text-sm w-full block focus:border-primary focus:ring-primary pl-10 pr-3 py-2"
              placeholder="Search devices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Button */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex border border-gray-300 rounded-lg text-gray-700 text-sm hover:bg-gray-100 items-center px-4 py-2 transition-colors"
            >
              <FiFilter className="mr-2" />
              Filter
              <FiChevronDown
                className={`ml-2 transition-transform ${
                  filterOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <button className="flex border border-gray-300 rounded-lg text-gray-700 text-sm hover:bg-gray-100 items-center px-4 py-2 transition-colors">
              <FiRefreshCw className="mr-2" />
              Refresh
            </button>
          </div>
        </div>

        {/* Filter Options */}
        <AnimatePresence>
          {filterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <div className="grid grid-cols-1 bg-white border border-gray-200 p-4 rounded-lg gap-4 md:grid-cols-2">
                {/* Location Filter */}
                <div>
                  <label className="text-gray-700 text-sm block font-medium mb-1">
                    Location
                  </label>
                  <select
                    className="border border-gray-300 rounded-lg text-sm w-full block focus:border-primary focus:ring-primary px-3 py-2"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="text-gray-700 text-sm block font-medium mb-1">
                    Status
                  </label>
                  <select
                    className="border border-gray-300 rounded-lg text-sm w-full block focus:border-primary focus:ring-primary px-3 py-2"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Devices List */}
      <div className="divide-gray-100 divide-y">
        {filteredDevices.length > 0 ? (
          filteredDevices.map((device) => (
            <DeviceItem key={device.id} device={device} />
          ))
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">
              No devices found matching your criteria
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex bg-gray-50 border-gray-100 border-t justify-between p-4 text-gray-500 text-xs items-center">
        <span>
          Showing {filteredDevices.length} of {deviceData.length} devices
        </span>
        <button className="text-primary hover:underline">
          View All Devices
        </button>
      </div>
    </motion.div>
  );
};

// Device Item Component
const DeviceItem = ({ device }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine battery color based on level
  const getBatteryColor = (level) => {
    if (level > 70) return "text-green-500";
    if (level > 30) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-center">
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
            <div className="flex text-gray-500 text-sm items-center mt-1">
              <span className="mr-3">{device.type}</span>
              <span className="flex items-center mr-3">
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
        <div className="flex items-center space-x-4">
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
            className="mt-4 overflow-hidden pl-16"
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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

export default DevicesList;
