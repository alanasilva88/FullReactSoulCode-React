import CardAluno from "./CardAluno";

const compras = [
    "Batata palha", "Batata frita", "Batata inglesa", "Batata rústica", "Batata doce"
];

const produtos = [
    {cod: 1, nome: "Batata palha", quantidade: 300, precoUnitario: 5},
    {cod: 2, nome: "Batata frita", quantidade: 100, precoUnitario: 10},
    {cod: 3, nome: "Batata doce", quantidade: 50, precoUnitario: 15},
    {cod: 4, nome: "Batata chips", quantidade: 20, precoUnitario: 5}
];

const alunos = [
    {matricula: 1, nome: "Alana", serie: "1 ano", media: 8.0},
    {matricula: 2, nome: "Cleidson", serie: "8 ano", media: 9.0},
    {matricula: 3, nome: "Daniel", serie: "4 ano", media: 9.5},
    {matricula: 4, nome: "Joaquim", serie: "7 ano", media: 7.0},
    {matricula: 5, nome: "Bela", serie: "3 ano", media: 5.0}

];


// Poderia usar o índice dos produtos para fazer o objeto
// Gerar componentes/ elementos a partir de dados (array)


function Listagem() {
    // Cada string no array de compras está sendo transformada em um li
    const itensCompra = compras.map((compra,index) => {
        return <li key={index}>{compra}</li> 
    });
    <hr />

    // O key é importante pra que o React saiba remover ou add o elemento na tela corretamente
    // Quando não tiver um cod. utilizar o index e deve ser colocado no parâmentro

    const cardsProduto = produtos.map((produto) => { 

        return (
            <article key={produto.cod}>
                <h3>NOME: {produto.nome}</h3>
                <p>QUANTIDADE: {produto.quantidade}</p>
                <p>SUBTOTAL: {produto.quantidade * produto.precoUnitario}</p>
            </article>
        );
    });
    <hr />

    const cardsAluno = alunos.map((aluno) => {
        return <CardAluno key={aluno.mat} nome={aluno.nome} serie={aluno.serie} media={aluno.media} />
    });
    <hr />


    return ( // Aqui fica o que quero fixo e o que alterna fica em arrays e maps por exemplo e tem que ter os dois return
        <>
            {/* <h2>Lista de Compras</h2>
            <ul>{itensCompra}</ul>
            <hr />
            <h2>Lista de Produtos</h2>
            <section>
                {cardsProduto}
            </section>
            <hr /> */}
            <h2 className="aluno">Lista de Alunos</h2>
            <section>
                {cardsAluno}
            </section>

            
        </>
    );
}

export default Listagem;