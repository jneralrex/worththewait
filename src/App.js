import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;