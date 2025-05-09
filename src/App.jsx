import React from 'react';
import './App.css';
import Profil from './Profil';
import DaftarProyek from './DaftarProyek';
import Kontak from './Kontak';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profil />
      </header>
      <main>
        <DaftarProyek />
        <Kontak />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Nama Kamu</p>
      </footer>
    </div>
  );
}

export default App;