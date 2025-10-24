// src/App.jsx
import { useState } from "react";
import AppRoutes from "./routes";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer";

function App() {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (produtoParaAdicionar) => {
        setCarrinho(prevCarrinho => {
            const itemExistente = prevCarrinho.find(item => item.id === produtoParaAdicionar.id);

            if (itemExistente) {
                return prevCarrinho.map(item =>
                    item.id === produtoParaAdicionar.id
                        ? { ...item, quant: item.quant + 1 }
                        : item
                );
            } else {
                return [...prevCarrinho, { ...produtoParaAdicionar, quant: 1 }];
            }
        });
    };

    const removerDoCarrinho = (idProdutoParaRemover) => {
        setCarrinho(prevCarrinho => {
            return prevCarrinho.filter(item => item.id !== idProdutoParaRemover);
        });
    };

    return (
        <>

            <NavBar totalItens={carrinho.length} />

            <AppRoutes
                carrinho={carrinho}
                adicionarAoCarrinho={adicionarAoCarrinho}
                removerDoCarrinho={removerDoCarrinho}
            />

            <Footer />
        </>
    );
}

export default App;
