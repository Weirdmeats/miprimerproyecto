'use client'
import React, { useState } from "react";
import { words } from "../../lib/data";

function Navbar() {
    const [estaMenuAbierto, setEstaMenuAbierto] = useState(false);
    const [activarBusqueda, setActivarBusqueda] = useState([]);

    const toggleMenu = () => {
        setEstaMenuAbierto(!estaMenuAbierto);
    };

    const sostenerBusqueda = (e) => {
        const valor = e.target.value;
        if (valor === '') {
            setActivarBusqueda([]);
            return;
        }
        setActivarBusqueda(words.filter(w => w.toLowerCase().includes(valor.toLowerCase())).slice(0, 8));
    };

    return (
        <nav className="bg-gray-900 p-4 relative">
            <div className="flex items-center justify-between flex-wrap">
                {/* logo del navbar */}
                <div className="text-white text-4xl font-bold mb-2 md:mb-0">PCS-entel</div>

                {/* barra de browse */}
                <form className="w-full max-w-md relative mb-2 md:mb-0">
                    <input 
                        type="search" 
                        placeholder="Buscar" 
                        className="w-full p-3 rounded-full bg-slate-800 text-white text-xl focus:outline-none"
                        onChange={sostenerBusqueda}
                    />
                    <button 
                        type="submit" 
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900 rounded-full"
                        aria-label="Search"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M21 21l-6-6M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
                        </svg>
                    </button>
                    {activarBusqueda.length > 0 && (
                        <div className="absolute top-full mt-2 p-4 bg-slate-800 text-white w-full rounded-xl left-0 flex flex-col gap-2">
                            {activarBusqueda.map((s, index) => (
                                <span key={index} className="cursor-pointer hover:bg-slate-700 p-2 rounded">{s}</span>
                            ))}
                        </div>
                    )}
                </form>

                {/* menu pantallas chicas */}
                <div className="md:hidden">
                    <button 
                        className="text-white focus:outline-none" 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            fill='none'
                            stroke="currentColor"
                            strokeLinecap='round'
                            strokeLinejoin="round"
                            strokeWidth='2'
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* menu normal pantallas grandes*/}
                <ul className="hidden md:flex space-x-6 text-xl font-bold">
                    <li><a href="#" className="text-white hover:underline">Inicio</a></li>
                    <li><a href="#" className="text-white hover:underline">Servicios</a></li>
                    <li><a href="#" className="text-white hover:underline">Contactos</a></li>
                </ul>

                {/* autentificacion de botones */}
                <div className="flex space-x-3 mt-2 md:mt-0 flex-wrap">
                    <button className="bg-cyan-900 rounded-lg text-white px-5 py-2 md:px-5 md:py-3 text-sm md:text-base hover:bg-cyan-800 mb-2 md:mb-0">Sign In</button>
                    <button className="bg-green-900 rounded-lg text-white px-5 py-2 md:px-4 md:py-3 text-sm md:text-base hover:bg-green-800">Sign Up</button>
                </div>
            </div>

            {/* menu para moviles */}
            <div 
                className={`fixed top-0 right-0 w-64 bg-gray-900 p-4 h-full transform transition-transform duration-300 ease-in-out ${estaMenuAbierto ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button 
                    className="text-white mb-4"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                >
                    <svg
                        fill='none'
                        stroke="currentColor"
                        strokeLinecap='round'
                        strokeLinejoin="round"
                        strokeWidth='2'
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <ul className="flex flex-col space-y-4 text-xl font-bold">
                    <li><a href="#" className="text-white hover:underline">Inicio</a></li>
                    <li><a href="#" className="text-white hover:underline">Servicios</a></li>
                    <li><a href="#" className="text-white hover:underline">Contactos</a></li>
                </ul>
                <div className="mt-4 flex flex-col space-y-2">
                    <button className="bg-cyan-900 rounded-lg text-white px-5 py-3 text-lg hover:bg-cyan-800">Sign In</button>
                    <button className="bg-green-900 rounded-lg text-white px-5 py-3 text-lg hover:bg-green-800">Sign Up</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
