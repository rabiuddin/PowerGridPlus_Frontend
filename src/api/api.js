export const getYourDeviceNowApiCall = async (formData) => {
  try {
    const response = {
      data: { success: true, message: "Request Submitted Successfully" },
    };
    return response.data;
    
  } catch (e) {
    return e.response.data;
  }
};

export const contactUsApiCall = async (formData) => {
    try {
      const response = {
        data: { success: true, message: "Contacted Successfully" },
      };
      return response.data;
      
    } catch (e) {
      return e.response.data;
    }
  };
  
