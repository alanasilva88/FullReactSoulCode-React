import { useState } from "react";
import "./Contador.css";

// Podemos definir um valor padrão para as props
function Contador ({valorInicial, batata}) {
    // Para definir um estado usamos: useState
    // useSatate = estado, função para alterar este estado, pode ser usado quantas vezes for necessário
    const [numero, setNumero] = useState(valorInicial, batata); // Valor inicial no useState

    function handleIncremento () { // Incremento
        // Indica ao componente que ele deve "atualizar", para corresponder a mudança do estado
        setNumero(numero + 1);
    }

    function handleIDecremento () { // Decremento
        if(numero > 0) { // Forma condicional pode ser feita. Neste caso para não aceitar números negativos
            setNumero(numero - 1);
        }

    }

    // Crie um botão que ao cliar incrementa +100

    function handleIncremento100 () {
        setNumero(numero + 100);
    }

    function handleZerar() {
        setNumero(0); // numero = 0
    }
 
    return (
        <section>
            <h2 className={numero % 2 === 0 ? 'par' : 'impar'}>Contagem: {numero} </h2> 
            <button onClick={handleIncremento}>+1</button>
            <button onClick={handleIDecremento}>-1</button>
            <button onClick={handleIncremento100}>+100</button>
            <button onClick={handleZerar}>Zerar</button>
        </section>

    );
}

export default Contador;


// Para que o número mude, o componente preica renderizar novamente. Para fazer isso:
// Estado = varial especial que sincroniza as mudanças na tela