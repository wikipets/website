import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './../style/pages.css';
import Footer from '../components/Footer';

export default function Home() {
    const mark1 = `

# Bem-vindo ao WikiPets - Sua Comunidade para Amantes de Animais 🐾

## Descubra o WikiPets!

Seja bem-vindo à casa online do Projeto WikiPets, uma iniciativa calorosa e dedicada, desenvolvida por alunos do UniAcademia como parte do Projeto Integrador e Práticas Extensionistas. Aqui, exploramos o incrível mundo dos animais domésticos, unindo conhecimento e paixão para criar algo verdadeiramente especial.
`;

    const mark2 = `
## O Que Nos Move?

O Projeto WikiPets é uma jornada apaixonante inspirada em nossa profunda conexão com animais de estimação. Imagine uma Wikipédia dedicada a orientar você nos cuidados de gatos, cães, pássaros e até mesmo animais mais exóticos. Estamos construindo essa plataforma com carinho e dedicação.
`;

    const mark3 = `

# Nosso Propósito 🌟

No coração do WikiPets, encontramos a missão de ser uma fonte confiável e completa de informações sobre saúde e vacinações para os nossos queridos companheiros de quatro patas e penas. Queremos ser seu guia, fornecendo conselhos práticos que atendam a todos os cuidadores, desde iniciantes até os mais experientes.
`;

    const mark4 = `
# Compromisso com a Mudança Positiva 🌈

Não paramos na transmissão de conhecimento; nos tornamos agentes de mudança positiva. Estamos dedicados a apoiar campanhas de doação e adoção, conectando animais necessitados a lares amorosos. Acreditamos que cada animal merece um lar cheio de carinho e estamos empenhados em fazer a diferença.
`;

    const mark5 = `
## Junte-se à Nossa Comunidade! 🤝

Abrace conosco essa jornada de aprendizado, compartilhamento e compaixão. O WikiPets não é apenas uma plataforma informativa; é uma comunidade comprometida em criar um mundo melhor para nossos amigos peludos e emplumados.
`;



    const marks = [mark1, mark2, mark3, mark4, mark5]

    return (
        <div className="home">
            {marks.map((item, index) => {
                let classN = `section parallax bg${index + 1}`;
                console.log(classN)
                return (
                    <div key={index}>
                        <section className={classN}>
                            <Markdown remarkPlugins={[remarkGfm]}>{item}</Markdown>
                        </section>
                    </div>
                )
            })}
            <div className="home_footer">
                <Footer />
            </div>
        </div>
    )

}