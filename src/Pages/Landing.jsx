import { useState } from 'react';
import AboutUs from '../components/AboutUs';
import EquationSolver from '../components/EquationSolver';
import Hero from '../components/Hero';

export default function Landing() {
  const [currentPage, setCurrentPage] = useState('solver');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">BBIIUC</h1>
          <div>
            <button
              onClick={() => setCurrentPage('solver')}
              className={`mx-2 px-4 py-2 rounded ${
                currentPage === 'solver' ? 'bg-white text-blue-600' : 'text-white'
              }`}
            >
              Equation Solver
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`mx-2 px-4 py-2 rounded ${
                currentPage === 'about' ? 'bg-white text-blue-600' : 'text-white'
              }`}
            >
              About Us
            </button>
          </div>
        </div>
      </nav>
      <Hero setCurrentPage={setCurrentPage} />
      <main className="max-w-7xl mx-auto mt-8 p-4 pb-20">
        {currentPage === 'solver' ? <EquationSolver /> : <AboutUs />}
      </main>
    </div>
  );
}

