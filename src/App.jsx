import "./App.css";

function App() {
  const produtos = [
    {id: 1, nome: "prod 1", valor: 100, qtd: 1, avaliacao: 4, img: "https://placehold.co/300x200/black/white/png/?text=prod 1",},
    {id: 2, nome: "prod 2", valor: 100, qtd: 1, avaliacao: 5, img: "https://placehold.co/300x200/black/white/png/?text=prod 2",},
    {id: 3, nome: "prod 3", valor: 80, qtd: 1, avaliacao: 5, img: "https://placehold.co/300x200/black/white/png/?text=prod 3",},
    {id: 4, nome: "prod 4", valor: 10, qtd: 1, avaliacao: 4, img: "https://placehold.co/300x200/black/white/png/?text=prod 4",},
    {id: 5, nome: "prod 5", valor: 120, qtd: 1, avaliacao: 3, img: "https://placehold.co/300x200/black/white/png/?text=prod 5",},
    {id: 6, nome: "prod 6", valor: 80,  qtd: 1, avaliacao: 3, img: "https://placehold.co/300x200/black/white/png/?text=prod 6",},
    {id: 7, nome: "prod 7",  valor: 10,  qtd: 0, avaliacao: 4, img: "https://placehold.co/300x200/black/white/png/?text=prod 7",},
    {id: 8, nome: "prod 8",  valor: 120, qtd: 1, avaliacao: 5, img: "https://placehold.co/300x200/black/white/png/?text=prod 8",},
  ];

  return (
    <>
      <body>
        <header>
          <h1>Minha Loja</h1>
        </header>

        <main>
          <h2>Carrinho</h2>

          <section>
            <div className="carrinho">
              <h3>Itens: 3</h3>
              <h4>Total: R$ 680</h4>

                <div className="carrinho-item">
                <img
                  className="item-img"
                  alt="Imagem"
                  src="https://placehold.co/300x200/black/white/png/?text=prod 1"
                />

                <div className="valor-produto">
                  <span>prod 1</span>
                  <span>R$ 100</span>
                </div>

                <div className="delete">
                  <button>Excluir</button>
                </div>

              </div>
              
              <div className="carrinho-item">
                <img
                  className="item-img"
                  alt="Imagem"
                  src="https://placehold.co/300x200/black/white/png/?text=prod 2"
                />

                <div className="valor-produto">
                  <span>prod 2</span>
                  <span>R$ 500</span>
                </div>

                <div className="delete">
                  <button>Excluir</button>
                </div>

              </div>
              
              <div className="carrinho-item">
                <img className="item-img" src="https://placehold.co/300x200/black/white/png/?text=prod 3" alt="Imagem" />
                <div className="valor-produto">
                  <span>prod 3</span>
                  <span>R$ 80</span>
                </div>
                <div className="delete">
                  <button>Excluir</button>
                </div>
              </div>
              <button className="limpar">Limpar</button>
            </div>
          


            <h1 className="lista">Lista de Produtos</h1>

            <div className="produtos">
              {produtos.map((p) => (
                <article key={p.id} className="produto">
                  <img alt={p.nome} src={p.img} />
                  <div className="produto-info">
                    <span className="nome">{p.nome}</span>
                    <span className="qtd">Qtd: {p.qtd}</span>
                    <span className="avaliacao">{"⭐".repeat(p.avaliacao)}</span>
                    <span className="valor">R$ {p.valor}</span>
                  </div>
                  <div className="acoes">
                    <button>Comprar</button>
                  </div>
                </article>
              ))}
            </div>
            <footer>Direitoss Autorais.2025.</footer>
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
