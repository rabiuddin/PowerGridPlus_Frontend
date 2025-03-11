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
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4 sm:mb-0">
            <FiWifi className="w-5 h-5 mr-2 text-[#0b6a62]" />
            IoT Devices
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-[#0b6a62] text-white rounded-lg text-sm font-medium hover:bg-[#22a196] transition-colors flex items-center justify-center"
          >
            <FiPlus className="mr-2" />
            Add Device
          </motion.button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0b6a62] focus:border-[#0b6a62] text-sm"
              placeholder="Search devices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Button */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors flex items-center text-sm"
            >
              <FiFilter className="mr-2" />
              Filter
              <FiChevronDown
                className={`ml-2 transition-transform ${
                  filterOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors flex items-center text-sm">
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
              className="overflow-hidden mt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-lg border border-gray-200">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0b6a62] focus:border-[#0b6a62] text-sm"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#0b6a62] focus:border-[#0b6a62] text-sm"
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
      <div className="divide-y divide-gray-100">
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
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center">
        <span>
          Showing {filteredDevices.length} of {deviceData.length} devices
        </span>
        <button className="text-[#0b6a62] hover:underline">
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
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div
            className={`p-3 rounded-lg ${
              device.status === "online" ? "bg-[#0b6a62]/10" : "bg-gray-200"
            }`}
          >
            <device.icon
              className={`h-6 w-6 ${
                device.status === "online" ? "text-[#0b6a62]" : "text-gray-500"
              }`}
            />
          </div>

          {/* Device Info */}
          <div>
            <h3 className="font-medium text-gray-900 flex items-center">
              {device.name}
              <span
                className={`ml-2 inline-block w-2 h-2 rounded-full ${
                  device.status === "online" ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
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
          <div className="text-lg font-medium text-gray-900">
            {device.value}
          </div>

          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-500 hover:text-[#0b6a62] hover:bg-[#0b6a62]/10 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiToggleRight className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-500 hover:text-[#0b6a62] hover:bg-[#0b6a62]/10 rounded-full transition-colors"
            >
              <FiSettings className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-500 hover:text-[#0b6a62] hover:bg-[#0b6a62]/10 rounded-full transition-colors"
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
            className="mt-4 pl-16 overflow-hidden"
          >
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-medium">{device.location}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="font-medium capitalize">{device.status}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Last Updated</p>
                  <p className="font-medium">{device.lastActivity}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="px-3 py-1.5 text-sm text-[#0b6a62] hover:bg-[#0b6a62]/10 rounded-md transition-colors">
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
