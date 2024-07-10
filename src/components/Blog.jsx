import Postagem from "./Postagem";
import Mensagem from "./Mensagem";

// Props = são os atributos  que definimos no uso da Postagem
function Blog (){
    return (
        <main>
            <section>

            <h1>Blog Constituição em Foco</h1>  

            <Postagem titulo="Constituição em Foco: Entendendo os Pilares do Direito Constitucional" desc="Bem-vindo ao 'Constituição em Foco', um blog dedicado a desmistificar e aprofundar o entendimento sobre o direito constitucional. Aqui, você encontrará análises detalhadas, explicações acessíveis e discussões atuais sobre os princípios fundamentais que regem nossa sociedade. Seja você um estudante, profissional ou apenas um entusiasta, nosso objetivo é fornecer informações claras e relevantes para enriquecer seu conhecimento sobre este campo essencial do direito." imgLink="https://a-static.mlcdn.com.br/450x450/quadro-decorativo-direito-temis-balanca-justica-advogados-escritorio-salas-com-moldura-rc053-vital-printer/vitalprinter/114105e22f3f11ecbdbd4201ac185049/6e6ff3a33f9bdaa747291bb7143f5501.jpeg" nomeAutor="Alana S Silva" legendaImagem="Imagem da mensagem" />

            <Postagem titulo="Direito do Trabalho e a Constituição" desc="O Direito do Trabalho na Constituição brasileira de 1988 é fundamental para garantir os direitos dos trabalhadores. Ele inclui disposições sobre a proteção do emprego, salário mínimo, jornada de trabalho, repouso semanal, férias anuais, licença-maternidade e paternidade, segurança no trabalho e previdência social. A Constituição também proíbe a discriminação no emprego e assegura direitos sindicais, como a liberdade de associação e a greve. Essas normas visam assegurar condições dignas de trabalho e promover a justiça social no ambiente laboral." imgLink="https://www.3mind.com.br/blog/wp-content/uploads/2022/12/principios-do-direito-trabalhista-brasileiro.jpeg" nomeAutor="Alana S Silva" legendaImagem="Imagem da mensagem" />

            <Mensagem titulo="As batatas quando nascem se esparramam pelo chão" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, excepturi fugit! Recusandae laboriosam reiciendis illo odio. Temporibus, dolorem ex. Libero esse porro ab autem ex officiis est! Tempora, quisquam odit!" imgLink="https://picsum.photos/200" nomeAutor="J. Almir" legendaImagem="Imagem aleatória"/>

            </section>
        </main>
       
    );
}

export default Blog;