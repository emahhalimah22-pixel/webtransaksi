import java.util.Scanner;

public class Transaksi {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Nama Pelanggan: ");
        String nama = input.nextLine();

        System.out.print("Nama Produk: ");
        String produk = input.nextLine();

        System.out.print("Harga Produk: ");
        int harga = input.nextInt();

        System.out.print("Jumlah Pembelian: ");
        int jumlah = input.nextInt();

        int totalBelanja = harga * jumlah;
        int bonus = 0;

        if (totalBelanja >= 5000000) {
            bonus = 50000;
        }

        int totalBayar = totalBelanja - bonus;

        System.out.println("\n=== HASIL PERHITUNGAN ===");
        System.out.println("Nama Pelanggan: " + nama);
        System.out.println("Nama Produk: " + produk);
        System.out.println("Total Belanja: Rp " + totalBelanja);
        System.out.println("Potongan: Rp " + bonus);
        System.out.println("Total Bayar: Rp " + totalBayar);
    }
}