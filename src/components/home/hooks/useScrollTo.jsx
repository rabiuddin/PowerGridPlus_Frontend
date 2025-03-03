import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTo = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const targetElement = document.getElementById(location.state.scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
};

export default useScrollTo;