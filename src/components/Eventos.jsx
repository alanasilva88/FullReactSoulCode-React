// Eventos = são ações que acontecem na interface, podem ser provocados pelo usuário.
// Manipulador de eventos = é uma reposta ao evento


function Eventos() {

    function handleClick() {
        alert('Você clicou');
    }
    // Abaixo tem duas formas de gerenciar um evento, vai mais pela quantidade de código que vc tem
    return (
        <section> 
            <button onClick={handleClick}>Clique aqui</button>
            <button onClick={() => {
                alert('Clicou novamente!')
                alert('Novamente!')
            }}>Clique novamenre</button>
            <h1 onMouseEnter={() => alert('Olá!')}>Título</h1>
        </section>
    );
}

export default Eventos;