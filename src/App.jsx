// jsx = javascript extended
// Vai permitir escrever código html dentro do js - é o html do projeto na prática
// Nome da função deve ser o mesmo nome do arquivo em jsx
// Declarativa
// Açúcar sintático - syntax sugar
// Componente principal da importação
// Pode ser colocado o fragment <> </> 
// Adições feitas em aula - melhorias
// Interessante importar um componente de midia query 

import Post from "./components/Post";
import ConversorTemperatura from "./components/ConversorTemperatura";

// Utiliza aspas apenas para strings
function App() {
    return (
        <>
            <Post titulo='Meu primeiro post!' descricao='Aprendendo useState - React' imagem='https://cdn.prod.website-files.com/61b9e37d1106b57eaa076efd/629df2647290ef3b75d74f2c_a2bc81309136b0c1864f582b1af95307_546c60cadefd5c0f5e78014543c554cb.png' />

            <ConversorTemperatura />
        </>
    );
}

export default App;