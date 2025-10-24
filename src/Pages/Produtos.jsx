import Card from '../components/Card';
import dadosDoArquivo from '../listadeprodut.json';
import './produtos.css';

const produtos = dadosDoArquivo.produtos;

function Produtos({ adicionarAoCarrinho }) {
    return (
        <>
            <div>
                <h1>Lista de Produtos</h1>
            </div>
            <div className='row lista-produtos d-flex align-items-stretch'>
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
        </>
    );
}

export default Produtos;
