import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Approuter from "./Routes/index.routes";

export default function App() {
  return (
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  );
}
