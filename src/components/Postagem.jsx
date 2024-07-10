import "./Postagem.css";

function Postagem (props) {
    console.log(props);

    return ( 
        <section>
            <article className="mensagem-corpo">
                <h2 className="mensagem-titulo">{props.titulo}</h2>
                <img className="imgLink" src={props.imgLink} alt={props.legendaImagem} />
                <p className="paragrafo">{props.desc}</p>
                <small>Criado por: {props.nomeAutor} </small>
            </article>
        </section>
        
    );
}

export default Postagem;