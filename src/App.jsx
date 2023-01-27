import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Form />} />
    </Routes>
  );
}

export default App;
