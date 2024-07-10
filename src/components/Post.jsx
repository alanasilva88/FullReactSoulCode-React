// 1. Crie um componente Post que possui um titulo e uma descrição. Ao clicar no botão de curtir deve aparecer no componente que o post está curtido, e ao clicar novamente no botão ele faz a ação de "descurtir" o post. Dica: o estado alterna entre true e false.


import { useState } from "react";
import "./Post.css";

function Post({ titulo, descricao, imagem }) {

    function BotaoLike() {
        const [liked, setLiked] = useState(false);

        function handleClick() {
            setLiked(!liked);
        }

        return (
            <button
                className={`botao-like ${liked ? 'liked' : ''}`}
                onClick={handleClick}
            >
                {liked ? '❤️' : '♡'}
            </button>
        );
    }

    return (
        <div className="post">
            <h1>{titulo}</h1>
            <img src={imagem} alt="Logo React" width={200}/>
            <p>{descricao}</p>
            <BotaoLike />
        </div>
    );
}

export default Post;
