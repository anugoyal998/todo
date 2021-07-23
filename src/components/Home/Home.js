import React from 'react'
import './Home.css'
import img from './ho.jpg'
import social from './social media.png'
export default function Home() {
    return (
        <div className="flex justify-between">
            <div className="pl-24 mt-40 animate__animated animate__backInLeft">
                <p className="text-5xl">Welcome to <span className="text-blue-600 font-bold">Todo App </span></p>
                <p className="text-2xl">Plan You Day with Our Todo App, <br/>
                So, What are you waiting for?...</p>
                <button className="bg-blue-600 px-2 py-2 text-white rounded hover:bg-blue-800">Plan Your Day</button>
                <button className="bg-gray-300 px-2 py-2 text-black rounded ml-4 hover:bg-gray-200">Connect With Us</button>
                <br/>
                <img src={social} width="100" className="mt-1"/>
            </div>
            <div className="animate__animated animate__backInRight">
                <img src={img} />
            </div>
        </div>
    )
}
