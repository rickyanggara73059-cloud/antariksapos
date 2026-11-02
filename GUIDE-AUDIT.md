# Pusat Panduan — audit materi

20 Oktober 2026. Proyek menggunakan React/Vite tanpa router, backend, atau kode aplikasi POS. Navbar desktop/mobile dan footer berbagi daftar navigasi. `#panduan` ditambahkan tanpa router atau dependency baru, setelah Cara Memulai. Hero, galeri orbital, foto fitur, floating WhatsApp, kontak dan konfigurasi domain/unduhan dipertahankan.

## Matriks materi

| Tutorial | Bukti tersedia | Kelengkapan |
| --- | --- | --- |
| Download dari Google Play Store | `androidDownloadUrl: null` pada konfigurasi; tidak ada package ID, penerbit, atau URL resmi | Belum lengkap. Tidak ada URL Play yang dapat diverifikasi atau tombol unduhan palsu. |
| Mendaftarkan akun dan login | Tidak ada layar pendaftaran/login atau dokumentasi autentikasi | Belum lengkap. Tidak mengasumsikan nama field, OTP, password, tombol, atau keberhasilan login. |
| Membuat toko | Screenshot beranda toko yang sudah ada dan Informasi Akun; tidak ada layar pembuatan toko | Belum lengkap. Nama toko/kode/lokasi bukan bukti alur pembuatan dan tidak dimasukkan ke materi panduan. |
| Input produk | Menu Produk pada beranda; Manajemen Produk dengan pencarian nama/SKU; tombol Tambah | Sebagian terverifikasi, belum lengkap. Form input, field wajib, penyimpanan, dan validasi belum tersedia. |
| Pengajuan QRIS | Layar input nominal pembayaran, QR pembayaran aktif, dan informasi merchant | Belum lengkap. Layar pembayaran bukan pengajuan. Tidak mengasumsikan dokumen, biaya, persetujuan, atau kanal pengiriman. |

Belum ada tutorial operasional yang lengkap dari awal sampai akhir. Materi yang belum terverifikasi berisi langkah konfirmasi bersama tim, bukan alur aplikasi yang direka. Screenshot Google Play, pendaftaran/login, pembuatan toko, form produk dan alur pengajuan QRIS perlu disediakan pemilik beserta instruksi resmi.

## Aset dan privasi

- Menggunakan kembali `menu-pos.jpg` dan `qris-dinamis.jpg`, dua crop asli hasil audit privasi. Layar QRIS Dinamis diberi caption jelas sebagai pembayaran, bukan pengajuan; tidak menampilkan kode pembayaran.
- Sumber produk: `assets-private/screenshots/WhatsApp Image 2026-10-19 at 19.46.59 (1).jpeg`, 634 × 1378. File tidak diubah atau dihapus.
- Salinan `public/images/guides/manajemen-produk-header.jpg`: crop x=0, y=78, w=634, h=220. Hanya judul, pencarian dan pemberitahuan UI.
- Salinan `public/images/guides/tombol-tambah-produk.jpg`: crop x=440, y=1246, w=182, h=100. Hanya tombol Tambah.
- Kedua salinan dibuka dan diperiksa secara visual setelah dibuat. Tidak terlihat nama/email pribadi, identitas outlet, rekening, NMID, token, maupun QR pembayaran. Tidak memakai crop otomatis dari screenshot privat sebagai URL publik. Tidak memakai screenshot profil/rekening atau QR aktif.
- Tidak memakai dashboard utuh pada panduan karena memuat identitas toko. Penggunaannya di hero merupakan keputusan terpisah pada instruksi pemilik sebelumnya; hero tidak diubah pada tugas ini.

## Interaksi

Pemilih lima tutorial menggunakan tombol berlabel dengan `aria-pressed` dan `aria-controls`, lalu fokus diarahkan ke judul materi. Tautan Kembali menuju `#daftar-panduan`; Berikutnya memilih materi berurutan dan materi terakhir dapat kembali ke pertama. Tidak ada URL halaman tutorial palsu.

Status baca disimpan pada localStorage `antariksa-guide-read-v1`. Hanya lima ID materi yang diterima; data tidak valid atau storage yang tidak tersedia menggunakan status kosong/in-memory. Tandai/batalkan baca serta reset tidak memengaruhi akun, toko, produk, atau QRIS. Progress informatif dengan pemberitahuan eksplisit di UI. Tidak ada data yang dikirim ke server.

## Pemeriksaan manual

Jalankan `npm run dev`. Pada 1440 px dan 390 px, buka Pusat Panduan dari navbar dan footer; pilih kelima materi, gunakan Berikutnya dan Kembali; periksa fokus keyboard. Tandai dua materi, muat ulang, batalkan tanda, lalu reset. Periksa bahwa tidak ada tombol unduhan palsu dan bahwa semua label kelengkapan tetap terlihat. Buka cuplikan gambar di tab baru, periksa privasi dan crop, serta pastikan tidak ada overflow. Browser otomatis harus tersedia sebelum menyatakan visual atau klik navigasi lulus.
