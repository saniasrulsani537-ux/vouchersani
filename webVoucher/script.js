function loginCheck() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  const validUsername = "sayang"; // ganti sesuai kebutuhan
  const validPassword = "kamu"; // ganti sesuai kebutuhan

  if (username === validUsername && password === validPassword) {
    // Tampilkan pesan sukses
    message.style.color = "green";
    message.innerText = "tunggu sebentarr...";

    // Redirect setelah 1 detik
    setTimeout(() => {
      window.location.href = "succes.html"; // ganti dengan nama file halaman sukses
    }, 1000);
  } else {
    message.style.color = "red";
    message.innerText = "Username atau Password salah coba diperiksa lagi!";
  }
}

// =========================
// HAMBURGER MENU RESPONSIF
// =========================
const hamburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
