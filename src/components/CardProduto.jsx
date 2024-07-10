import "./CardProduto.css";

function CardProduto({ nome, preco, desconto }) {
    const precoComDesconto = preco - (preco * desconto) / 100;
    const precoStyle = { textDecoration: 'line-through' };
  
    return (
      <section className="card-produto">
        <h2>{nome}</h2>
            {desconto > 0 ? (
            <>
                <p style={precoStyle}>R$ {preco.toFixed(2).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                <p>R$ {precoComDesconto.toFixed(2).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                <p className="desconto"> {desconto}% off</p>
            </>
            ) : (
            <p className="preco">R$ {preco.toFixed(2).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
            )}
      </section>
      
    );
  }
  
export default CardProduto;

/* CORREÇÃO 

// <CardProduto nome="" precoUnitario={0} desconto={0}/>
function CardProduto(props) {
    const valorDesconto = props.precoUnitario - props.precoUnitario * (props.desconto/100);

    return (
        <article className="card-produto">
            <p>{props.nome}</p>
            {props.desconto > 0 && <p className="grifado">R$ {props.precoUnitario}</p>}
            {props.desconto > 0 ? <h4>R$ {valorDesconto}</h4> : <h4>R$ {props.precoUnitario}</h4> }
            {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
        </article>
    );
}

export default CardProduto;

*/