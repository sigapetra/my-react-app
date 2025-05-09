import React from 'react';
import './DaftarProyek.css'; // Kita akan buat file CSS ini nanti

function DaftarProyek() {
  const proyek = [
    {
      nama: 'Aplikasi Todo Sederhana',
      deskripsi: 'Sebuah aplikasi untuk mengelola daftar tugas sehari-hari.',
      teknologi: ['React', 'JavaScript', 'CSS'],
      link: '#', // Ganti dengan link proyek jika ada
    },
    {
      nama: 'Website Portofolio Pribadi (versi ini!)',
      deskripsi: 'Sebuah website untuk menampilkan informasi diri dan proyek-proyek yang telah dikerjakan.',
      teknologi: ['React', 'Vite', 'CSS'],
      link: '#', // Ganti dengan link proyek jika ada
    },
    // Tambahkan proyek-proyek lain di sini
  ];

  return (
    <div className="daftar-proyek-container">
      <h2>Proyek</h2>
      <div className="proyek-list">
        {proyek.map((item, index) => (
          <div key={index} className="proyek-item">
            <h3>{item.nama}</h3>
            <p>{item.deskripsi}</p>
            <ul className="proyek-teknologi">
              {item.teknologi.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer">Lihat Proyek</a>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DaftarProyek;