import React from 'react'

function Footer() {
    return (
        /* footer */
        <footer className='bg-slate-950 text-white py-10'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row md:justify-between w-full gap-6">

                    {/* apartado contacto */}
                    <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
                        <h2 className='font-bold text-2xl mb-4'>Contactos</h2>
                        <p>Correo electrónico: <a href="mailto:scissors@gmail.com" className="text-cyan-400 hover:underline">scissors@gmail.com</a></p>
                        <p>Número telefónico: <a href="tel:+56982390862" className="text-cyan-400 hover:underline">+56982390862</a></p>
                    </div>

                    {/* links  */}
                    <div className="flex-1 mb-6 md:mb-0 text-center">
                        <h2 className='font-bold text-2xl mb-4'>Links importantes</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-cyan-400 hover:underline">Términos de privacidad</a></li>
                            <li><a href="#" className="text-cyan-400 hover:underline">ⓇCopyright 2024</a></li>
                          
                        </ul>
                    </div>

                    {/* seccion extra */}
                    <div className="flex-1 mb-6 md:mb-0 text-center md:text-right">
                        <h2 className='font-bold text-2xl mb-4'>Otra Sección</h2>
                        <p>Correo electrónico: <a href="mailto:scissors@gmail.com" className="text-cyan-400 hover:underline">scissors@gmail.com</a></p>
                        <p>Número telefónico: <a href="tel:+56982390862" className="text-cyan-400 hover:underline">+56982390862</a></p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
