import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './../style/main.css'

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from './Home';
import About from './About';
import PostsList from './PostsList'
import WikisList from './WikisList'

import ImportanciaDoarAbrigos from './Posts/importancia-doar-abrigos';
import ImportanciaAguaPets from './Posts/importancia-agua-pets';


import Cats from './Wiki/Cats';


export default function Main() {
    const posts = [
        { comp: ImportanciaDoarAbrigos, name: 'importancia-doar-abrigos', title: 'A Importância de Doar para Abrigos de Animais' },
        { comp: ImportanciaAguaPets, name: 'importancia-agua-pets', title: 'A Importância de dar água para seu pet' },
    ];

    const menus = [
        { comp: PostsList, title: 'Posts', path: '/posts' },
        { comp: About, title: 'Sobre', path: '/about' },
        { comp: WikisList, title: 'Wikis', path: '/wikis' },
    ];

    const wikis = [
        { comp: Cats, name: 'cats', title: 'Guia para Donos de Gatinhos 🐈' },
    ];


    return (
        <BrowserRouter>
            <Header menus={menus} />
            <div id="main">
                <Routes>
                    <Route path="/" element={<Home />} />

                    {menus.map((item, index) => {
                        return (<Route path={item.path} element={<item.comp posts={posts} wikis={wikis} />} key={index} />)
                    })}

                    {posts.map((item, index) => {
                        return (<Route path={`/${item.name}`} element={<item.comp />} key={index} />)
                    })}

                    {wikis.map((item, index) => {
                        return (<Route path={`/${item.name}`} element={<item.comp isPreview={false} />} key={index} />)
                    })}


                    <Route path="*" element={<h1 className="naoExiste" >Página não existe</h1>}></Route>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}