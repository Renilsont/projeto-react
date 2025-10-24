// src/routes/index.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from '../Pages/Produtos';
import Carrinho from '../Pages/Carrinho'; // Importe a página do carrinho

// O componente agora recebe as props do App.jsx
function AppRoutes({ adicionarAoCarrinho, carrinho, removerDoCarrinho }) {
    return (
            <Routes>
                {/* Passa a prop para o componente Produtos */}
                <Route path="/" element={<Produtos adicionarAoCarrinho={adicionarAoCarrinho} />} />

                {/* Passa as props para o componente Carrinho */}
                <Route
                    path="/carrinho"
                    element={<Carrinho
                        carrinho={carrinho}
                        removerDoCarrinho={removerDoCarrinho} />}
                />
            </Routes>
    );
}

export default AppRoutes;
