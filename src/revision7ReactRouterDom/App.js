import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Form1 from "./form";
import C1 from "./C1";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/form" element={<Form1 />} />
        <Route path="/C1" element={<C1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
