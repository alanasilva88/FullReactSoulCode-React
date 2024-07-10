import"./CardAluno.css";

function CardAluno({nome, serie, media}) {
    const status = media >= 7 ? 'Aprovado!' : 'Reprovado!';
    const statusStyle = { color: media >= 7 ? 'green' : 'red'};


    return (
        <section className="card-aluno">
            <h2>{nome}</h2>
            <p>Série: {serie}</p>
            <p>Média: {media}</p>
            <strong style={statusStyle}>{status}</strong>
        </section>
    );
}

export default CardAluno;


/* 
CORREÇÃO

<CardAluno nome="" serie="" media={0}/> isso está no componete App
function CardAluno(props) {
    const classe = props.media >= 7 ? "aprovado" : "reprovado";

    return (
        <article className="card-aluno">
            <h4>{props.nome}</h4>
            <p>Série: {props.serie}</p>
            <strong className={classe}>Média: {props.media}</strong>
            <p className={classe}>{props.media >= 7 ? "Aprovado!" : "Reprovado!"}</p>
        </article>
    );
}
*/