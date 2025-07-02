import React from "react";

function StarsBackground() {
  // Membuat 80 bintang dengan posisi dan ukuran acak
  const stars = Array.from({ length: 80 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 2 + 1.5;
    return (
      <div
        key={i}
        className="star"
        style={{
          width: size,
          height: size,
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${duration}s`
        }}
      />
    );
  });
  return <div className="stars-bg">{stars}</div>;
}

export default StarsBackground;