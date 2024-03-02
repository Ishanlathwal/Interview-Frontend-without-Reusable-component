import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Rtk Query/ReduxStore.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line no-unused-vars
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
  // Addinh Redux store
  <Provider store={store}>
    <App />
    <ToastContainer transition={Slide} />
  </Provider>,
);
