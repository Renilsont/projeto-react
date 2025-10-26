import Card from "../components/Card";

function Carrinho({ carrinho, removerDoCarrinho }) {
  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quant, 0);

  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-3">Carrinho</h1>
      <h4>Total de itens: {carrinho.reduce((acc, item) => acc + item.quant, 0)}</h4>
      <h5 className="mb-4">Valor total: R$ {total.toFixed(2)}</h5>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {carrinho.map((item, index) => (
            <Card
              key={`${item.id}-${index}`}
              imagem={item.img}
              nome={item.nome}
              preco={`${item.preco.toFixed(2)} x ${item.quant} = ${(item.preco * item.quant).toFixed(2)}`}
              acaoExcluir={() => removerDoCarrinho(item.id)}
              excluirLabel="Excluir"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carrinho;
