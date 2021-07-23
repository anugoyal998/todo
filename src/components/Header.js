import React, { useState } from 'react'
import Burger from './Burger'
import './Header.css'
export default function Header1(props) {
    let x = window.innerWidth
    return (
        <div>
            <nav className="flex justify-between px-24 h-16 items-center animate__animated animate__backInDown">
            <div className="text-3xl">Todo App</div>
            <div className="hide">
                <a className={"text-xl px-4 no-underline py-2 hover:bg-blue-800 rounded " + (props.data==1?"bg-blue-600 text-white":"text-black ")} onClick={() => props.dataF(1)}>Home</a>
                <a className={"text-xl px-4 no-underline py-2 hover:bg-blue-800 rounded " + (props.data==2?"bg-blue-600 text-white":"text-black ")} onClick={() => props.dataF(2)}>View Tasks</a>
                <a className={"text-xl px-4 no-underline py-2 hover:bg-blue-800 rounded " + (props.data==3?"bg-blue-600 text-white":"text-black ")} onClick={() => props.dataF(3)}>Add Task</a>
                <a className={"text-xl px-4 no-underline py-2 hover:bg-blue-800 rounded " + (props.data==4?"bg-blue-600 text-white":"text-black ")} onClick={() => props.dataF(4)}>About Us</a>
                <a className={"text-xl px-4 no-underline py-2 hover:bg-blue-800 rounded " + (props.data==5?"bg-blue-600 text-white":"text-black ")} onClick={() => props.dataF(5)}>Contact Us</a>
            </div>
            <div className="burger-toggle">
                <Burger data={props.data} dataF={props.dataF}/>
            </div>
            </nav>
        </div>
    )
}
