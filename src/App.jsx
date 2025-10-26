import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Produtos from "./Pages/Produtos";
import Carrinho from "./Pages/Carrinho";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const existente = prev.find((p) => p.id === produto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === produto.id ? { ...p, quant: p.quant + 1 } : p
        );
      } else {
        return [...prev, { ...produto, quant: 1 }];
      }
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <header className="bg-primary text-white py-3 shadow-sm text-center">
        <h1>Minha Loja</h1>
      </header>

      <nav className="bg-light border-bottom py-2">
        <div className="container d-flex justify-content-center gap-3">
          <Link to="/" className="text-dark text-decoration-none">
            Produtos
          </Link>
          <Link to="/carrinho" className="text-dark text-decoration-none">
            <i className="bi bi-cart4"></i> Carrinho ({carrinho.length})
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Produtos adicionarAoCarrinho={adicionarAoCarrinho} />} />
        <Route
          path="/carrinho"
          element={
            <Carrinho
              carrinho={carrinho}
              removerDoCarrinho={removerDoCarrinho}
            />
          }
        />
      </Routes>

      <footer className="text-center mt-4 mb-3 text-muted">
        Direitos autorais © 2025
      </footer>
    </>
  );
}

export default App;
