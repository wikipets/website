import RenderPosts from '../../components/RenderPosts'
import logoOng from './../../imgs/ong.png';

export default function ImportanciaDoarAbrigos({ isPreview }) {

    const markdown = `
# A Importância de Doar para Abrigos de Animais 🐾

A doação para abrigos de animais desempenha um papel fundamental em garantir o bem-estar e o futuro de animais indefesos. Essas contribuições generosas têm um impacto direto nas vidas dos animais e nas operações dos abrigos, proporcionando benefícios significativos para toda a comunidade.

## Razões para Doar:

### 1. **Amplo Apoio aos Necessitados:**

Muitos animais em abrigos vêm de situações difíceis, resgatados de abandono, maus-tratos ou situações de rua.  
Doações ajudam a fornecer cuidados essenciais, alimentação adequada e tratamento veterinário.

### 2. **Manutenção das Operações do Abrigo:**

Os abrigos desempenham um papel vital na sociedade ao oferecerem um local seguro e acolhedor para animais em busca de lares amorosos. Doações ajudam a manter as operações, desde a infraestrutura até os recursos necessários para cuidar dos animais.

### 3. **Promoção de Adoções Responsáveis:**

Doações facilitam programas de adoção responsável, incluindo processos de seleção, esterilização e microchipagem. Essas práticas contribuem para garantir que os animais encontrem lares permanentes e amorosos.

### 4. **Cuidados com a Saúde:**

Fundos provenientes de doações permitem que abrigos forneçam cuidados veterinários regulares, tratamento de doenças e vacinação. Isso contribui para a saúde geral e a felicidade dos animais.

## Como Você Pode Contribuir:

* **Doações Monetárias:**
    Contribua com quantias financeiras para ajudar a cobrir despesas operacionais e custos médicos.

* **Doação de Suprimentos:**
    Itens como alimentos, cobertores, brinquedos e produtos de limpeza são sempre bem-vindos.

* **Voluntariado:**
    Além de doações materiais, seu tempo e habilidades voluntárias são inestimáveis para os abrigos.

* **Promoção da Conscientização:**
    Compartilhe informações sobre a importância das doações para abrigos e incentive outros a participarem.

# Conheça a ONG!

## Amor não tem Raça

`
    const markdown2 = `

A ONG "Amor não tem raça" busca trazer equilíbrio na população animal, através da diminuição do índice de abandono e maus tratos, para prevenir agravos à saúde pública e ao meio ambiente. 
Além disso, é realiza um trabalho de construção de uma consciência sobre a responsabilidade de se adotar um animal, promovendo o acolhimento daqueles que se encontram abandonados, e evitando a compra.

[Facebook](https://www.facebook.com/amornaotemracajf/)

[Instagram](https://www.instagram.com/amornaotemracajf/)


Ao doar para abrigos de animais, você se torna parte integrante da rede de apoio que torna possível oferecer uma segunda chance a animais que precisam.  

Sua generosidade não apenas transforma vidas animais, mas também contribui para a construção de uma comunidade mais compassiva e solidária. 🐾✨
`


    return (
        <div className="doacao">
            <RenderPosts isPreview={isPreview} markdown={markdown} />
            <div className="post_img">
                <img src={logoOng} alt='ONG logo' />
            </div>
            <div className="doacao_last">
                <RenderPosts isPreview={isPreview} notDisplay={true} markdown={markdown2} />
            </div>
        </div>
    )
}