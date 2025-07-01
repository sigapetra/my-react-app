// src/Greeting.jsx
import React from 'react';

// Komponen Greeting sekarang menerima 'name' sebagai prop
function Greeting(props) {
  return (
    <div className="greeting-container">
      {/* Menggunakan prop 'name' */}
      <h2>Halo, {props.name}!</h2>
      <p>Selamat datang di portofolio saya.</p>
    </div>
  );
}

export default Greeting;