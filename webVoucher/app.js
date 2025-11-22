function hitung() {
  let a = parseFloat(document.getElementById("angka1").value);
  let b = parseFloat(document.getElementById("angka2").value);

  let hasil = a + b;

  document.getElementById("output").innerText = "Hasilnya Adalah :" + hasil;
}
