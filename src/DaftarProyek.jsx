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
            style={{
              background: "#23232a",
              border: "1px solid #18181c",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              margin: 8,
              padding: "18px 20px",
              minWidth: 0,
              fontSize: "0.95em",
              color: "#f1f1f1",
              transition: "transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s",
              width: 320,
              minHeight: 160,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
            }}
          >
            <div className="repo-header" style={{ marginBottom: 8 }}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-title" style={{ fontSize: "1.08em", color: "#fff" }}>
                <span role="img" aria-label="repo" style={{ marginRight: 8 }}>📦</span>
                <strong>{repo.name}</strong>
              </a>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link" style={{ marginLeft: 8, color: "#bbb" }}>
                <span role="img" aria-label="link">🔗</span>
              </a>
            </div>
            <p className="repo-desc" style={{ fontSize: "0.97em", margin: "0 0 10px 0", color: "#ccc" }}>
              {repo.description || <span style={{ color: "#888" }}>Tidak ada deskripsi</span>}
            </p>
            <div className="repo-meta" style={{ fontSize: "0.92em", display: "flex", gap: 12, alignItems: "center" }}>
              <span title="Stars">⭐ {repo.stargazers_count}</span>
              <span title="Forks">🍴 {repo.forks_count}</span>
              {repo.language && (
                <span
                  className="repo-lang"
                  style={{
                    background: "#18181c",
                    color: "#fff",
                    borderRadius: "12px",
                    padding: "2px 10px",
                    marginLeft: 8,
                    fontWeight: 600,
                    fontSize: "1.1em"
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