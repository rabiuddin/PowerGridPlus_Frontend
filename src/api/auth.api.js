export const loginApiCall = async (formData) => {
    try {
      const response = {
        data: { success: true, message: "Logged In Successfully" },
      };
      return response.data;
      
    } catch (e) {
      return e.response.data;
    }
  };
  
  export const signupApiCall = async (formData) => {
    try {
      const response = {
        data: { success: true, message: "Signed Up Successfully" },
      };
      return response.data;
      
    } catch (e) {
      return e.response.data;
    }
  };
  