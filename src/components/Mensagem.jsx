import "./Mensagem.css"; // Necessário importar o css para que os estilos do arquivo façam parte do projeto


function Mensagem (props) {
    console.log(props);


    return (
        <article className="mensagem-corpo">
            <h2 className="mensagem-titulo">{props.titulo}</h2>
            <img id="imgLink" src={props.imgLink} alt={props.legendaImagem} />
            <p className="paragrafo">{props.desc}</p>
            <small>Criado por: {props.nomeAutor} </small>
        </article>
    ); 
}

export default Mensagem;