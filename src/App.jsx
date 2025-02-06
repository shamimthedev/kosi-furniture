import { ToastContainer } from "react-toastify";
import Home from "./components/pages/Home";
// import Cart from "./components/Cart";
import 'react-toastify/dist/ReactToastify.css'; // Import styles

const App = () => {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
};

export default App;
