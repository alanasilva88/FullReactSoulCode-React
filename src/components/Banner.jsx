import "./Banner.css";
import imagem from "../assets/img.jpg"; // a princípio o nome após o import pode ser qq um. É usado em ícones mais específicos
// Outra forma de adicionar uma img é deixar em public, coloca o caminho /nome-do-arquivo

function Banner() {
    return (
        <section>
            <img src={imagem} alt="img" width={250} /><br />
            {/* <div className="teste" style={{backgroundImage: `url(${imagem})`}}></div> */}
            <img src="/vite.svg" alt="Logo do vite"/>
            <img src="/img.jpg"/> 
            <section className="fundo-imagem">
                Lorem ipsum dolor sit amet.
            </section>
            <button>Clique aqui!</button>
        </section>

    );

}

export default Banner;