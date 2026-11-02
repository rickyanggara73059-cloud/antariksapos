# ANTARIKSA POS landing page

Landing page statis React + TypeScript + Vite + Tailwind CSS + Lucide React. Tidak menggunakan backend atau database.

## Menjalankan

```sh
npm install
npm run dev
```

Jika npm tidak dapat mengakses registry di lingkungan terkelola, dependensi proyek ini juga dapat dipasang menggunakan `pnpm install`. Lockfile pnpm tersedia untuk versi dependensi yang konsisten. Instalasi awal pnpm melaporkan skrip instalasi esbuild diabaikan; build produksi tetap berhasil menggunakan binary yang tersedia, tanpa mengaktifkan skrip tambahan.

## Verifikasi

```sh
npm run typecheck
npm run build
npm run preview
```

Tidak ada skrip lint terpisah. Build juga menjalankan pemeriksaan TypeScript.

## Konfigurasi dan aset

Identitas, kontak WhatsApp, pesan awal, logo, galeri, domain resmi, dan URL unduhan Android berada di `src/config.ts`. Domain dan URL Android tetap `null` sampai dikonfirmasi. Logo resmi tersedia di public/images/branding/antariksa-pos-logo.png dan digunakan pada navbar serta footer. Favicon 32/48/180 px dan gambar OG 1200 × 630 berasal dari logo yang sama; proporsi dan latar asli dipertahankan. Hero dan galeri menggunakan salinan screenshot asli yang telah diaudit dan dipotong. Lihat SCREENSHOT-AUDIT.md untuk inventaris, keputusan privasi, dan koordinat crop. Sumber tetap di assets-private/screenshots/ dan tidak boleh dipublikasikan.

Tambahkan aset resmi ke `public/`, lalu isi `logoUrl` dan `screenshots` pada konfigurasi. Jangan menggunakan ilustrasi sebagai screenshot asli. Favicon dan metadata gambar OG sudah tercantum di index.html. Path OG saat ini relatif terhadap root; setelah domain resmi dikonfirmasi, ubah og:image menjadi URL HTTPS absolut pada domain tersebut dan periksa preview berbagi di layanan tujuan.

Setelah domain resmi tersedia, isi `officialDomain`, tambahkan canonical dan `og:url` pada `index.html`, isi URL absolut halaman utama dalam `public/sitemap.xml`, lalu tambahkan deklarasi Sitemap pada `public/robots.txt`. Sitemap saat ini sengaja tidak memuat URL karena domain belum diketahui. Metadata title dan description awal berada di `index.html`; sesuaikan bersama identitas bila nama brand berubah.

Semua CTA WhatsApp memakai nomor resmi yang diberikan dan membuka tab baru dengan `noopener noreferrer`. Tidak ada tombol unduhan sampai tautan resmi diberikan. Konfirmasi detail fitur, ketentuan QRIS, versi Android, akses aplikasi, serta aset resmi kepada pemilik sebelum menambahkan klaim lain.
