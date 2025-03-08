import React from "react";

const FormError = ({ error }) => {
  if (error)
    return (
      <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
        {error}
      </div>
    );
};

export default FormError;
