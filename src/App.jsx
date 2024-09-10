import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainContenido from './components/maincontenido/maincontenido.jsx';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                <div className="container mx-auto px-4 py-8">
                    <MainContenido/>
                    
                </div>
            </main>

            <Footer />
        </div>
    );
}
export default App;
