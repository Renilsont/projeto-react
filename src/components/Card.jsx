function Card({ nome, preco, quantidade, imagem, acaoBotao, acaoExcluir, excluirLabel }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={imagem} className="card-img-top" alt={nome} />
      <div className="card-body text-center">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text">Quantidade: {quantidade}</p>
        <p className="card-text fw-bold">R$ {preco}</p>
        <div className="d-flex justify-content-center gap-2">
          <button onClick={acaoBotao} className="btn btn-primary btn-sm">
            Comprar
          </button>
          {acaoExcluir && (
            <button onClick={acaoExcluir} className="btn btn-danger btn-sm">
              {excluirLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
