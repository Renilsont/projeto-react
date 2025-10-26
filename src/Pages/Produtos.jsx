import Card from "../components/Card";
import dadosDoArquivo from "../ProdutoData.json";

const produtos = dadosDoArquivo.produtos;

function Produtos({ adicionarAoCarrinho }) {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Produtos</h1>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            imagem={produto.img}
            nome={produto.nome}
            preco={produto.preco}
            quantidade={produto.quant}
            acaoBotao={() => adicionarAoCarrinho(produto)}
          />
        ))}
      </div>
    </div>
  );
}

export default Produtos;
