import React from 'react';
import './Kontak.css'; // Kita akan buat file CSS ini nanti

function Kontak() {
  return (
    <div className="kontak-container">
      <h2>Kontak</h2>
      <p>Saya terbuka untuk kesempatan kerja dan kolaborasi. Jangan ragu untuk menghubungi saya melalui informasi di bawah ini:</p>
      <ul>
        <li>Email: <a href="mailto:emailkamu@contoh.com">emailkamu@contoh.com</a></li> {/* Ganti dengan emailmu */}
        <li>LinkedIn: <a href="https://linkedin.com/in/profilkamu" target="_blank" rel="noopener noreferrer">linkedin.com/in/profilkamu</a></li> {/* Ganti dengan profil LinkedInmu */}
        <li>GitHub: <a href="https://github.com/usernamekamu" target="_blank" rel="noopener noreferrer">github.com/usernamekamu</a></li> {/* Ganti dengan username GitHubmu */}
        {/* Tambahkan informasi kontak lain jika perlu */}
      </ul>
    </div>
  );
}

export default Kontak;