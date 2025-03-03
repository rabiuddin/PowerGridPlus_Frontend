import { useNavigate } from "react-router-dom";

const useScroll = () => {
  const navigate = useNavigate();
  const handleScrollToSection = (e, targetElement) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: targetElement } });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return { handleScrollToSection, scrollToTop };
};

export default useScroll;
