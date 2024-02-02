import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
