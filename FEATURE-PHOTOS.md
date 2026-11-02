# Fotografi fitur ANTARIKSA POS

Tanggal pemilihan: 20 Oktober 2026. Audit awal tidak menemukan foto situasi usaha yang cocok; aset sebelumnya hanya screenshot, branding, dan render Bumi. Semua foto berikut diunduh, dibuka, dan diperiksa sebagai file gambar sebelum dipakai. Tidak ada foto generatif. Semua path di bawah relatif terhadap `public/images/features/`.

Foto merupakan ilustrasi konteks, bukan screenshot, testimoni pengguna, atau bukti dukungan perangkat/integrasi ANTARIKSA POS. Label **Foto ilustrasi** tampil pada setiap foto; alt menjelaskan konteks. Isi judul, deskripsi, urutan dan jumlah fitur tetap sama. Foto model tidak menyatakan bahwa orang tersebut berutang, menggunakan produk, atau mendukung brand.

| Fitur / file | Foto, fotografer, halaman sumber | Ukuran publik | Catatan relevansi |
| --- | --- | --- | --- |
| Kasir POS — `kasir-pos.jpg` | iMin Technology, [kasir memakai POS](https://www.pexels.com/photo/a-close-up-shot-of-a-cashier-using-a-point-of-sale-system-12935048/) | 1100 × 733 | Situasi kasir kedai dengan layar sentuh. Sistem/OS pada foto bukan bukti aplikasi Android atau dukungan terminal tersebut. |
| Produk — `produk.jpg` | Kampus Production, [menyiapkan barang](https://www.pexels.com/photo/a-woman-packing-her-merchandise-7857535/) | 900 × 601 | Barang fisik, kemasan dan pakaian toko. |
| Laporan — `laporan.jpg` | Bia Limova, [memeriksa dokumen](https://www.pexels.com/photo/businesswoman-reviewing-documents-at-desk-33175657/) | 900 × 600 | Dokumen dan kalkulator, bukan laporan ANTARIKSA POS. |
| Mutasi — `mutasi.jpg` | Tima Miroshnichenko, [memeriksa keuangan](https://www.pexels.com/photo/businessman-man-suit-woman-6694899/) | 850 × 1275 | Pemeriksaan dokumen/kartu di meja; bukan riwayat transaksi aplikasi yang terverifikasi. |
| QRIS Dinamis — `qris-dinamis.jpg` | iMin Technology, [pembayaran QR di perangkat](https://www.pexels.com/photo/a-close-up-shot-of-a-person-scanning-a-qr-code-12935064/) | 900 × 600 | Foto pemindaian QR di kasir. Tidak membuktikan bahwa kode adalah QRIS Indonesia atau bersifat dinamis. Bukan instruksi pembayaran atau kode resmi ANTARIKSA POS. |
| QRIS Statis — `qris-statis.jpg` | David Dvořáček, [QR di meja usaha](https://unsplash.com/photos/QiPe0UpC0_U) | 900 × 1350 | Foto pembayaran QR pada perangkat di meja usaha, bukan plakat QRIS cetak. Tidak menyimpulkan sifat statis/dinamis atau penyelenggara pembayaran. Kode pada foto tidak tajam; tidak disajikan sebagai kode resmi. |
| Kasbon — `kasbon.jpg` | olia danilevich, [mencatat perhitungan](https://www.pexels.com/photo/a-person-holding-black-desk-calculator-5466810/) | 900 × 600 | Tangan, buku, kalkulator, laptop; tidak melabeli seseorang sebagai debitur. Mata uang pada foto bukan klaim mata uang fitur. |
| Transaksi Pending — `transaksi-pending.jpg` | Pavel Danilyuk, [tahap pembayaran di meja layanan](https://www.pexels.com/photo/a-person-making-payment-using-smartphone-6812441/) | 850 × 1273 | Konteks tahap pembayaran; foto tidak memperlihatkan atau membuktikan status pending. |
| Profil — `profil.jpg` | [profesional memakai smartphone](https://www.pexels.com/photo/man-in-a-suit-sitting-behind-a-desk-and-using-his-phone-17049694/) | 900 × 600 | Aktivitas menggunakan ponsel; tidak mengklaim layarnya membuka profil aplikasi. |

## Lisensi dan unduhan

- Delapan foto memakai [Pexels License](https://www.pexels.com/license/), yang mengizinkan penggunaan website dan modifikasi serta melarang kesan endorsement dan penggunaan model dalam konteks merugikan.
- Satu foto David Dvořáček memakai [Unsplash License](https://unsplash.com/license), bukan Unsplash+. Halaman sumber menyatakan unduhan bebas; metadata menunjuk gambar `photo-1571867424488-4565932edb41`.
- URL unduhan Pexels mengikuti tautan gambar yang tersedia pada halaman sumber: `https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg?auto=compress&cs=tinysrgb&w=LEBAR`. ID sesuai angka di setiap tautan sumber. Foto QR Unsplash: `https://images.unsplash.com/photo-1571867424488-4565932edb41?auto=format&fit=max&w=1200&q=85&fm=jpg`.
- Kandidat unduhan berada di `assets-private/feature-photo-candidates/` (diabaikan Git). Hanya sembilan hasil pilihan di `public/images/features/` yang dipublikasikan.
- Re-encode JPEG kualitas 85 dan resize proporsional; tidak menggambar ulang UI, mengubah angka, menambah QR, atau merekayasa isi foto. Metadata sumber tidak ikut disalin. Total sembilan aset publik sekitar 865 KiB. `object-position` per foto mengarahkan crop CSS pada subjek relevan.
- Foto NFC, QR check-in, dan kandidat yang kurang relevan tidak dipakai sebagai visual QRIS.

## Batas verifikasi

File foto telah dibuka secara visual. Pengujian layout/crop dalam browser desktop 1440 px dan mobile 390 px adalah pemeriksaan terpisah. Jangan menyatakan visual QA halaman lulus jika browser tidak tersedia. Untuk foto pembayaran, pemilik dapat mengganti dengan fotografi usaha sendiri agar konteks Android/QRIS Indonesia dan plakat QRIS statis benar-benar spesifik; gambar stok di sini merupakan pendekatan konteks yang paling dekat dari pilihan berlisensi yang diperiksa.
