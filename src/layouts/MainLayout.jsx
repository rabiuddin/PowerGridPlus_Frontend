import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import PopupChatbot from "../components/popup-chatbot/PopupChatbot";
import CartIcon from "../components/cart/CartIcon";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
      <PopupChatbot />
      <CartIcon />
    </>
  );
};

export default MainLayout;
