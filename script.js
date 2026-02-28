// Random Color Pulse
setInterval(() => {
  const bg = document.querySelector('.wave-bg');
  const colors = [
    "#6a5af9", "#eae310ff", "#6bf9d8",
    "#ff9153", "#6fd96f", "#6fb9ff"
  ];

  const c1 = colors[Math.floor(Math.random() * colors.length)];
  const c2 = colors[Math.floor(Math.random() * colors.length)];
  const c3 = colors[Math.floor(Math.random() * colors.length)];

  bg.style.background = `linear-gradient(120deg, ${c1}, ${c2}, ${c3})`;
  bg.style.backgroundSize = "200% 200%";
}, 6000);
