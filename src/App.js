import React from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { Topbar } from "./components";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import "./styles/App.css";

Modal.setAppElement("#root");
toast.configure();

function App() {
  return (
    <div className="App">
      <Topbar />
      <AppRoutes />
    </div>
  );
}

export default App;
