import React from 'react';

function MainContenido() {
    return (
        <main className="py-10 px-4 md:px-8">
            {/* Recuadro de Venta */}
            <section className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">¡Oferta Especial!</h2>
                <p className="text-lg text-gray-700 mb-4 text-center">
                    Aprovecha nuestra oferta exclusiva y obtén un <strong>20% de descuento</strong> en todos nuestros planes Entel!.
                </p>
                <div className="text-center">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition-colors">
                        Comprar Ahora
                    </button>
                </div>
            </section>
        </main>
    );
}

export default MainContenido;
