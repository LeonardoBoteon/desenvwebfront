// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProdutosPage from "./components/produtos/ProdutosPage";
// NOVO: importa a página de Categorias
import CategoriasPage from "./components/categorias/CategoriasPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/produtos" replace />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        {/* NOVA ROTA: página de Categorias */}
        <Route path="/categorias" element={<CategoriasPage />} />
      </Route>
    </Routes>
  );
}

export default App;
