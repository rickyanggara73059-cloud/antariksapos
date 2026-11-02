# Audit screenshot ANTARIKSA POS

## Pembaruan: dashboard utuh untuk hero

Atas instruksi terbaru pemilik, `WhatsApp Image 2026-10-19 at 19.47.00.jpeg` disalin utuh ke `public/images/app-screenshots/antariksa-pos-dashboard.jpeg` untuk mengganti screenshot hero. Salinan identik dengan sumber (SHA-256), 634 × 1378 px, 67.570 byte. Nama toko, kode/URL toko, lokasi, angka laporan, dan ringkasan aset tetap terlihat sesuai permintaan eksplisit untuk mempertahankan isi screenshot. Ini merupakan pengecualian terhadap keputusan crop awal di bawah, bukan klaim bahwa dashboard utuh telah disamarkan. Sumber tidak diubah. Galeri tetap memakai crop hasil audit awal. Output build kini sengaja memuat satu salinan dashboard utuh tersebut.

Tanggal: 19 Oktober 2026. Sumber: `assets-private/screenshots/`. Semua sembilan gambar dibuka dan diperiksa secara visual, bukan disimpulkan dari urutan nama. Seluruh sumber beresolusi **634 × 1378 px**, format JPEG. File sumber tidak diubah atau dihapus.

Nama pada tabel diawali `WhatsApp Image 2026-10-19 at ` dan diakhiri `.jpeg`.

| Nama file (bagian waktu) | Layar yang terlihat | Status privasi / keputusan |
| --- | --- | --- |
| `19.46.58 (1)` | Informasi Akun | Nama, email, rekening, nama pemilik rekening, identitas toko, serta informasi perangkat/printer. Tidak dipublikasikan. |
| `19.46.58 (2)` | Kasbon/Piutang | Pemilih periode, total Rp0, 0 transaksi, kondisi kosong. Tidak ditemukan nama, rekening, identitas merchant atau QR pembayaran. Dipilih; bar sistem atas/bawah dipotong. |
| `19.46.58` | QRIS Pembayaran | QR pembayaran utuh, nama merchant, NMID, dan identitas cetakan. Seluruh gambar dikecualikan; tidak membuat versi promosi atau menyisakan bagian QR. |
| `19.46.59 (1)` | Manajemen Produk | Nama/SKU/kategori produk serta identitas outlet berulang. Tidak dipublikasikan untuk menghindari paparan identitas outlet dan katalog internal. |
| `19.46.59 (2)` | Dialog QR tautan toko | QR tautan toko, nama, URL/kode akun, lokasi pada latar. Tidak dipublikasikan. QR ini tidak dilabeli sebagai QR pembayaran. |
| `19.46.59` | Mutasi | Saldo QRIS dan pemilih rentang tanggal; daftar kosong. Tidak dipublikasikan karena memuat informasi saldo usaha. |
| `19.47.00 (1)` | QRIS Dinamis, input nominal | Belum ada QR pembayaran; hanya input Rp0, keypad, pilihan nominal dan tombol belum aktif. Dipilih untuk hero dan galeri; bar sistem atas/bawah dipotong. Tidak membuktikan pembayaran, integrasi, aktivasi, settlement, atau batas layanan aktual. |
| `19.47.00 (2)` | Beranda pembayaran/layanan | Nama merchant, NMID, ringkasan dana masuk, tautan menu QRIS/POS/Mutasi/Kasbon/Pending/Profil. Tidak dipublikasikan. |
| `19.47.00` | Beranda POS dan ringkasan laporan | Identitas toko, kode, lokasi, URL toko, nominal laporan dan jumlah aset. Hanya cuplikan navigasi yang dipilih; seluruh header identitas serta bagian laporan/keuangan dihilangkan dengan crop. |

## Salinan publik

Semua crop menggunakan koordinat piksel sumber, x=0, lebar=634. JPEG baru dibuat dari area piksel terpilih tanpa menyalin metadata sumber. Tidak ada AI, blur, penggantian angka, atau rekonstruksi antarmuka.

| Aset | Sumber | Area crop (y, tinggi) | Penggunaan |
| --- | --- | --- | --- |
| `public/images/app-screenshots/qris-dinamis.jpg` | `19.47.00 (1)` | 78, 1277 | Hero dan galeri; layar portrait utuh selain bar sistem. |
| `public/images/app-screenshots/kasbon.jpg` | `19.46.58 (2)` | 78, 1277 | Galeri; tampilan daftar kosong dan pemilih periode. |
| `public/images/app-screenshots/menu-pos.jpg` | `19.47.00` | 345, 312 | Galeri; hanya menu, tanpa header toko dan laporan. |

Ketiga hasil crop **dibuka dan diperiksa secara visual setelah dibuat**. Tidak terlihat nama pribadi, email, rekening, NMID, identitas merchant, URL/kode toko, atau QR pembayaran pada hasil publik. Ikon QR kecil pada keypad adalah ikon antarmuka, bukan kode pembayaran. Nilai nol dan periode pada layar terpilih dipertahankan sebagaimana sumber, bukan dibuat sebagai bukti transaksi.

## Integrasi dan pengamanan

- Hero navy/gold dipertahankan; ilustrasi diganti screenshot asli input nominal. Label menjelaskan tidak ada kode pembayaran.
- Galeri berisi tiga gambar, caption, alt, dan tautan ukuran penuh. CSS `object-fit: contain` mempertahankan seluruh isi crop dan proporsi; cuplikan menu memang lebih pendek, tidak diregangkan.
- Deskripsi Produk, Laporan, QRIS Dinamis, dan Kasbon diperinci hanya berdasarkan elemen yang terlihat. Tidak menyimpulkan fungsi backend berhasil dari screenshot.
- `assets-private/` diabaikan Git. Vite hanya menyalin aset `public/` dan referensi aplikasi ke output; tidak ada import dari folder privat. Jangan mengunggah seluruh folder proyek sebagai situs statis; gunakan output `dist/`.
- Tidak ada logo brand ANTARIKSA yang terverifikasi pada screenshot; logo lain pada UI tidak dijadikan logo landing page.

## Batas verifikasi

Verifikasi implementasi: `npm run build` dan `npm run typecheck` lulus. Ketiga referensi gambar ada di `public/` dan `dist/`. Pemeriksaan seluruh output `dist/` tidak menemukan nama/path privat maupun hash yang sama dengan sembilan JPEG sumber; tepat tiga gambar crop ada pada output. Target anchor tetap valid. Inventaris browser saat pemeriksaan kosong, sehingga tidak ada pengujian visual halaman atau klik menu/galeri di browser pada perubahan ini.

Inspeksi visual file JPEG selesai melalui penampil gambar. Ini berbeda dari pengujian visual halaman di browser. Browser otomatis belum tersedia dalam sesi sebelumnya; jangan menganggap layout mobile/desktop atau klik galeri telah diuji visual sampai diperiksa melalui browser. Pemilik tetap perlu memeriksa kesesuaian versi aplikasi, hak penggunaan screenshot, dan ketentuan QRIS. Batas nominal yang tertulis pada screenshot tidak dijadikan klaim layanan di copy landing page.
