const PopupChatHeader = () => {
  return (
    <div className="bg-primary text-white p-4 flex items-center">
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>

      <div className="flex-1">
        <h2 className="font-medium">Powergrid Assistant</h2>
        <p className="text-xs text-white/70">
          Ask me anything about power grids
        </p>
      </div>
    </div>
  );
};

export default PopupChatHeader;
