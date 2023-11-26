import React from "react";
import './../style/pages.css';
import { ConteudoProvider } from "./Context";
import { Link } from "react-router-dom";


export default function PostsList({ posts }) {

    return (
        <ConteudoProvider>
            <div className="page">
                <h1>Últimas publicações:</h1>
                <div className="posts_list">
                    {posts.map((item, index) => {
                        return (<div className="card" key={item.name}>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <item.comp isPreview={true} />
                                <Link to={`/${item.name}`}>Ler post</Link>
                            </div>
                        </div>)
                    })}

                </div>
            </div>
        </ConteudoProvider>
    );
}
