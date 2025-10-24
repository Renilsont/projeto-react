// src/Pages/Carrinho.jsx
import React from 'react';
import Card from '../components/Card';
import './carrinho.css';

function Carrinho({ carrinho, removerDoCarrinho }) {
  // Corrigido: multiplique o preço pela quantidade
  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quant, 0);

  return (
    <>
      <div className='carrinho'>
        <h1>Carrinho</h1>
      </div>
      <div>
        {/* Adicione o número de itens na lista, não no total */}
        <h3>Total de itens: {carrinho.reduce((acc, item) => acc + item.quant, 0)}</h3>
        <h4>Valor total: R$ {total.toFixed(2)}</h4>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className='lista-carrinho'>
            {carrinho.map((item, index) => (
              <Card
                key={`${item.id}-${index}`}
                imagem={item.img}
                nome={item.nome}
                // Adicione a quantidade ao nome para o usuário ver
                preco={`${item.preco.toFixed(2)} x ${item.quant} = ${(item.preco * item.quant).toFixed(2)}`}
                acaoBotao={() => removerDoCarrinho(item.id)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Carrinho;
