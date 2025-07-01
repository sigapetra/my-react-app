import React, { useEffect, useRef, useState } from 'react';

const FONT_LIST = [
  'Times New Roman, serif',
  'Courier New, monospace',
  'Georgia, serif',
  'Impact, fantasy',
  'Comic Sans MS, cursive, sans-serif',
  'Trebuchet MS, sans-serif',
  'Lucida Console, monospace',
  'Brush Script MT, cursive',
  'Garamond, serif',
  'Franklin Gothic Medium, sans-serif',
  'Palatino, serif',
  'Copperplate, fantasy',
  'Papyrus, fantasy',
  'Verdana, sans-serif',
  'Futura, sans-serif',
  'Rockwell, serif',
  'Consolas, monospace',
  'Tahoma, sans-serif',
  'Didot, serif',
];

function Profil({ nama, deskripsi }) {
  const [fontIdx, setFontIdx] = useState(0);

  useEffect(() => {
    let timeoutId;
    function animate() {
      setFontIdx(idx => (idx + 1) % FONT_LIST.length);
      timeoutId = setTimeout(animate, 1500);
    }
    animate();
    return () => clearTimeout(timeoutId);
  }, []);

  // Pisahkan nama jadi dua bagian: "Siga" dan "Petra"
  const [firstName, lastName] = nama.split(' ');

  return (
    <div className="profil">
      <h1 className="profil-nama loki-title" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <span
          style={{
            display: 'inline-block',
            width: 70, // atur sesuai kebutuhan agar cukup untuk "Siga"
            textAlign: 'right',
            marginRight: 8
          }}
        >
          {firstName}
        </span>
        <span
          style={{
            display: 'inline-block',
            width: 110, // atur sesuai kebutuhan agar cukup untuk "Petra" di semua font
            fontFamily: FONT_LIST[fontIdx],
            
            textAlign: 'right',
            marginLeft: 35
          }}
        >
          {lastName}
        </span>
      </h1>
      <p className="profil-deskripsi">{deskripsi}</p>
    </div>
  );
}

export default Profil;