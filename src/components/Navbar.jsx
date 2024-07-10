import "./Navbar.css";
// Renderização condicional = muda o visual e a estrutura de acordo com alguma valor


function Navbar(props) {
    // Operador &&: Se o primeiro valor for true ele mostra o componente. Se o primeiro valor for false ele ignora o que está após &&

    // let mensagem;

    // if(props.logado) {
    //     mensagem = `Bem-vindo(a)! ${props.nomeUsuario`;
    // } else {
    //     mensagem = "Você está desconectado!";
    // };
    // Dentro do header <p>{mensagem}<p/>

    // Ternário: Condição ? valor se true : valor se false


    return (
        <header>
            {props.logado && <img id="avatar" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png" />}
            <p>{props.logado ? `Bem-vindo(a)! ${props.nomeUsuario}` : "Você está desconectado!"}</p>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Postagens</a></li>
                    {props.logado && <li><a href="#">Meu perfil</a></li>}
                    {props.logado && <li><a href="#">Sair</a></li>}
                    {!props.logado && <li><a href="#">Entrar</a></li>}
                </ul>
            </nav>
        </header>
    );

}

export default Navbar;

/*
MÉTODO: if-else 'tradicional'
// Se estiver logado, renderiza a navbar logado
// Caso contrário renderiza a navbar deslogado
    if(props.logado) { 
        return (
            <header>
                <hr />
                <p>Bem-vindo(a)! {props.nomeUsuario}</p>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Postagens</a></li>
                        <li><a href="#">Meu perfil</a></li>
                        <li><a href="#">Sair</a></li>
                    </ul>
                </nav>
                <hr />
            </header>
        );
    } else {
        return (
            <header>
                <hr />
                <p>Você está desconectado!</p>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Postagens</a></li>
                    </ul>
                </nav>
                <hr />
            </header>
        );
    }
*/