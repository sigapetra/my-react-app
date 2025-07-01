import React, { useEffect, useState, useRef } from 'react';
import './DaftarProyek.css';

const GITHUB_USERNAME = "sigapetra";

function getLangIcon(lang) {
  const icons = {
    JavaScript: "🟨",
    TypeScript: "🟦",
    Python: "🐍",
    HTML: "🌐",
    CSS: "🎨",
    Shell: "💻",
    Java: "☕",
    PHP: "🐘",
    C: "🔵",
    'C++': "➕",
    Go: "🐹",
    Ruby: "💎",
    default: "❓"
  };
  return icons[lang] || icons.default;
}


function DaftarProyek() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
          setError(null);
        } else {
          setRepos([]);
          setError(data.message || "Terjadi kesalahan saat mengambil data.");
        }
        setLoading(false);
      })
      .catch(() => {
        setRepos([]);
        setError("Gagal mengambil data proyek.");
        setLoading(false);
      });
  }, []);

  // Intersection Observer untuk animasi setiap card
  useEffect(() => {
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
      { threshold: 0.1 }
    );
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, [repos]);

  if (loading) return <p>Memuat daftar proyek...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: 32 }}>🚀 Proyek GitHub Saya</h2>
      <div className="repo-grid">
        {repos.map((repo, idx) => (
          <div
            className="repo-card fade-in"
            key={repo.id}
            ref={el => cardsRef.current[idx] = el}
          >
            <div className="repo-header">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-title">
                <span role="img" aria-label="repo" style={{ marginRight: 8 }}>📦</span>
                <strong>{repo.name}</strong>
              </a>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
                <span role="img" aria-label="link">🔗</span>
              </a>
            </div>
            <p className="repo-desc">
              {repo.description || <span style={{ color: "#666" }}>Tidak ada deskripsi</span>}
            </p>
            <div className="repo-meta">
              <span title="Stars">⭐ {repo.stargazers_count}</span>
              <span title="Forks">🍴 {repo.forks_count}</span>
              {repo.language && (
                <span
                  className="repo-lang"
                  style={{
                    background: "#fff",
                    color: "#222",
                    borderRadius: "12px",
                    padding: "2px 10px",
                    marginLeft: 8,
                    fontWeight: 600,
                    fontSize: "1.2em"
                  }}
                  title={repo.language}
                >
                  {getLangIcon(repo.language)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DaftarProyek;