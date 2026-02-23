import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Clientes from "./components/pages/Clientes";
import Obras from "./components/pages/Obras";
import QuienesSomos from "./components/pages/QuienesSomos";
import LaEmpresa from "./components/pages/LaEmpresa";
import Error404 from "./components/pages/Error404";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/la-empresa" element={<LaEmpresa />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
