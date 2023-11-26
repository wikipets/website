# React App with Markdow

Publish do site:

[![Netlify Status](https://api.netlify.com/api/v1/badges/253bd803-57ac-48b1-8361-5f8bfe1a910d/deploy-status)](https://app.netlify.com/sites/wikipetsuni/deploys)

[Wikipets Website](https://wikipetsuni.netlify.app/)


Para rodar o prjeto:  
1. Instalar dependencias:  
```npm i```
2. Executar ```npm start``` no cmd

<br/>
Markdown para os posts:  

[react-markdown](https://github.com/remarkjs/react-markdown)  
[remark-gfm](https://github.com/remarkjs/remark-gfm)

<br/>

Adicione a página em _src > Pages > Posts_  
```meu_post.md```

Em ```HomePage.jsx``` adicione sua nova página ao vetor "posts":

Formato:  
**{ comp: meu_post, name: 'nome-para-url', title: 'Título do meu post' }**

```
const posts = [
    { comp: post1, name: 'post1', title: 'algo maior nome do post' },
    { comp: post2, name: 'importancia-pets', title: 'a importancia de dar agua para seu pet' },
    { comp: meu_post, name: 'nome-para-url', title: 'Título do meu post' }
]
```
