import React from 'react';
import RenderPosts from '../../components/RenderPosts';
import './../../style/pages.css';

export default function Cats({ isPreview }) {

    const markdown = `

# Guia para Donos de Gatinhos 🐈

## Introdução

Bem-vindo ao maravilhoso mundo da paternidade de gatos! Ser um bom dono de gato envolve mais do que apenas alimentar e fornecer água.  
Este guia abrange as necessidades essenciais do seu felino, bem como dicas para criar um ambiente saudável e feliz para o seu amado amigo peludo.

## Alimentação Adequada

Gatos são carnívoros, e uma dieta adequada é crucial para sua saúde. Certifique-se de fornecer:

- **Ração de Qualidade:** Opte por alimentos balanceados e adequados para a idade do gato.
- **Água Fresca:** Mantenha uma tigela de água limpa disponível o tempo todo.

## Ambiente Confortável

Gatos adoram conforto. Crie um ambiente acolhedor considerando:

- **Caminhos de Escalada:** Gatos adoram ficar em lugares elevados. Forneça prateleiras ou árvores para gatos.
- **Áreas de Descanso:** Ofereça camas confortáveis e almofadas em locais tranquilos.

## Higiene e Cuidados

Manter seu gato limpo e saudável é uma parte vital da paternidade responsável. Faça isso através de:

- **Escovação Regular:** Principalmente para gatos de pelo longo. Ajuda a prevenir bolas de pelo.
- **Caixa de Areia Limpa:** Limpe a caixa de areia diariamente para garantir a higiene.

## Brincadeiras e Estímulo Mental

Gatos precisam de estímulos mentais e físicos. Mantenha-os ativos com:

- **Brinquedos Interativos:** Brinquedos que desafiem a mente do gato são essenciais.
- **Tempo de Brincadeira:** Dedique tempo para brincar com seu gato todos os dias.

## Visitas ao Veterinário

Manter as consultas regulares com o veterinário é crucial para a saúde a longo prazo:

- **Vacinação Atualizada:** Mantenha as vacinas em dia para prevenir doenças.
- **Check-ups Anuais:** Exames regulares ajudam a detectar problemas de saúde precocemente.

## Identificação e Segurança

Assegure-se de que seu gato esteja seguro e identificado:

- **Coleira com Identificação:** Coloque uma coleira com uma identificação com seu nome e número de telefone.
- **Microchip:** Considere a opção de implantar um microchip para identificação permanente.

## Tempo de Qualidade

Gatos são animais sociais. Reserve tempo para interação diária:

- **Carinho e Afeto:** Acaricie e brinque regularmente com seu gato para fortalecer o vínculo.
- **Compreensão de Sinais:** Aprenda a entender os sinais de seu gato para garantir uma comunicação eficaz.

## Conclusão

Ao seguir estas diretrizes, você está bem encaminhado para ser um dono de gato excepcional. 
`;

    const markdown2 = `
Lembre-se, a paciência e o amor são fundamentais para construir uma relação duradoura e gratificante com seu felino.

Curta cada momento com seu amigo peludo! 🐱✨
`

    return (
        <div className="page cats">
            <RenderPosts isPreview={isPreview} markdown={markdown} />
            <div className="blue">
                <RenderPosts isPreview={isPreview} notDisplay={true} markdown={markdown2} />
            </div>
        </div>
    )
}
