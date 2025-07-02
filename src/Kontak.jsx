import React from 'react';
import './Kontak.css'; // Kita akan buat file CSS ini nanti

function Kontak() {
  return (
    <div
      className="kontak-container"
      style={{
        maxWidth: '1100px',
        margin: '60px auto',
        padding: '72px 64px',
        borderRadius: '40px',
        background: 'rgba(30, 41, 59, 0.55)',
        boxShadow: '0 20px 60px 0 rgba(31, 38, 135, 0.28)',
        backdropFilter: 'blur(32px) saturate(220%)',
        WebkitBackdropFilter: 'blur(32px) saturate(220%)',
        border: '2.5px solid rgba(255,255,255,0.18)',
        transition: 'box-shadow 0.3s',
      }}
    >
      <h2
        style={{
          color: '#1e90ff',
          marginBottom: '32px',
          fontWeight: 900,
          letterSpacing: '2px',
          fontSize: '3rem',
          textShadow: '0 2px 16px #0006',
        }}
      >
        Kontak
      </h2>
      <p
        style={{
          color: '#fff',
          marginBottom: '40px',
          fontSize: '1.35rem',
          fontWeight: 600,
          textShadow: '0 1px 8px #0004',
        }}
      >
        Saya terbuka untuk kesempatan kerja dan kolaborasi.<br />
        Jangan ragu untuk menghubungi saya melalui:
      </p>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <li
          style={{
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.25rem',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '18px 28px',
            boxShadow: '0 2px 12px #0002',
          }}
        >
          <span
            role="img"
            aria-label="Email"
            style={{
              marginRight: 18,
              fontSize: '2em',
              color: '#1e90ff',
              filter: 'drop-shadow(0 2px 6px #1e90ff55)',
            }}
          >
            📧
          </span>
          <a
            href="mailto:sigapetra02@gmail.com"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #1e90ff 0%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '1.25em',
            }}
          >
            sigapetra02@gmail.com
          </a>
        </li>
        <li
          style={{
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.25rem',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '18px 28px',
            boxShadow: '0 2px 12px #0002',
          }}
        >
          <span
            role="img"
            aria-label="LinkedIn"
            style={{
              marginRight: 18,
              fontSize: '2em',
              color: '#fff',
              filter: 'drop-shadow(0 2px 6px #1e90ff55)',
            }}
          >
            🔗
          </span>
          <a
            href="https://www.linkedin.com/in/siga-petra-rastoni-481713272/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #fff 0%, #1e90ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '1.25em',
            }}
          >
            linkedin.com/in/siga-petra-rastoni-481713272
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Kontak;