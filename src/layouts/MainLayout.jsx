import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import PopupChatbot from "../components/popup-chatbot/PopupChatbot";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
      <PopupChatbot />
    </>
  );
};

export default MainLayout;
