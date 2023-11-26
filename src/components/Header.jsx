import React from "react"
import './../style/components.css'
import logo from './../imgs/logo1.png'
import { Link } from "react-router-dom"

export default function Header({ menus }) {

    return (
        <div className="header">
            <div className="logo">

                <Link to='/'>
                    <img src={logo} alt="wiki pets logo" />
                </Link>

            </div>
            <div className="menu">
                <ul>
                    {menus.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}