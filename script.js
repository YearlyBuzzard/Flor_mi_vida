const phrases = [
    "Te adoro ❤️",
    "Eres mi sol en días nublados ☀️",
    "Tu sonrisa ilumina mi mundo ✨",
    "Eres el latido de mi corazón 💓",
    "Tu amor me inspira ✏️",
    "Eres la estrella que ilumina mi noche 🌃",
    "Eres mi sueño cumplido  💫",
    "ECada te quiero es un abrazo del alma 🫂",
    "En ti, encontré mi paz ❤️‍🩹",
    "Eres la maravilla de mi mundo 🌍",
    //... Añade tantas frases como quieras
  ];
  
  document.querySelector('.flower').addEventListener('click', function() {
    const textBelow = document.querySelector('.text-below');
    const randomIndex = Math.floor(Math.random() * phrases.length);
    textBelow.textContent = phrases[randomIndex];
  });
  