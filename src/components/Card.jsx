function Card({nome, preco, quantidade, acaoBotao}){
    return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={"./minha loja.png"} className="card-img-top" alt={nome} />
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text">Quantidade: {quantidade}</p>
        <p className="card-text">R$ {preco}</p>
        <button onClick={acaoBotao} className="btn btn-primary">Comprar</button>
      </div>
    </div>
  );
}

export default Card;