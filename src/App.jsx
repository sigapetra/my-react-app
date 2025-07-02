import React, { useEffect, useRef } from 'react';
import './App.css';
import Profil from './Profil';
import DaftarProyek from './DaftarProyek';
import Kontak from './Kontak';
import StarsBackground from "./StarsBackground";


function App() {
  const profilNama = "Siga Petra";
  const profilDeskripsi = "Saya adalah seorang pengembang web yang antusias belajar React!";

  // Refs untuk setiap section
  const profilRef = useRef(null);
  const projectRef = useRef(null);
  const kontakRef = useRef(null);

  useEffect(() => {
    const sections = [profilRef.current, projectRef.current, kontakRef.current];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(sec => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <StarsBackground />
      <section
        id="profil"
        className="section-profil fade-in"
        ref={profilRef}
      >
        <Profil nama={profilNama} deskripsi={profilDeskripsi} />
      </section>
      <section
        id="project"
        className="section-project fade-in delay-1"
        ref={projectRef}
      >
        <DaftarProyek />
      </section>
      <section
        id="kontak"
        className="section-kontak fade-in delay-2"
        ref={kontakRef}
      >
        <Kontak />
      </section>
      <footer className="fade-in delay-3">
        <p>&copy; {new Date().getFullYear()} Siga Petra</p>
      </footer>
    </div>
  );
}

export default App;