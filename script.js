function hitung() {
    let nama = document.getElementById("nama").value;
    let produk = document.getElementById("produk").value;
    let harga = parseInt(document.getElementById("harga").value);
    let jumlah = parseInt(document.getElementById("jumlah").value);

    if (nama === "" || produk === "" || isNaN(harga) || isNaN(jumlah)) {
        alert("Semua input wajib diisi!");
        return;
    }

    let totalBelanja = harga * jumlah;
    let bonus = 0;

    if (totalBelanja >= 5000000) {
        bonus = 50000;
    }

    let totalBayar = totalBelanja - bonus;

    document.getElementById("hasil").innerHTML = `
        <h3>Hasil Perhitungan</h3>
        <p>Nama Pelanggan: ${nama}</p>
        <p>Nama Produk: ${produk}</p>
        <p>Total Belanja: Rp ${totalBelanja.toLocaleString()}</p>
        <p>Potongan: Rp ${bonus.toLocaleString()}</p>
        <p>Total Bayar: Rp ${totalBayar.toLocaleString()}</p>
    `;
}