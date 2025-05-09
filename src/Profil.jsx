import React from 'react';
import './Profil.css'; // Kita akan buat file CSS ini nanti

function Profil() {
  return (
    <div className="profil-container">
      <img
        src="/profil.jpg" // Ganti dengan path gambar profilmu di folder public
        alt="Foto Profil"
        className="profil-image"
      />
      <h1>Nama Kamu</h1>
      <p className="profil-deskripsi">
        Seorang pengembang web dengan fokus pada React dan front-end development.
        Berpengalaman dalam membangun aplikasi web yang responsif dan interaktif.
        Memiliki ketertarikan pada UI/UX dan selalu berusaha untuk menulis kode yang bersih dan mudah dipelihara.
      </p>
      <div className="profil-keahlian">
        <h2>Keahlian</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux (jika ada)</li>
          <li>Git</li>
          {/* Tambahkan keahlian lain di sini */}
        </ul>
      </div>
    </div>
  );
}

export default Profil;