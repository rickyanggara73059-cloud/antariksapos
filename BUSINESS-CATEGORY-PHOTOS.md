# Foto kategori usaha

20 Oktober 2026. Kategori aktual: Toko retail, Kedai, Usaha makanan, UMKM. Tidak ada kategori atau fungsi yang ditambahkan/dihapus. Kartu sebelumnya bukan tautan; perilaku tersebut dipertahankan. Panah tetap dekoratif dan disembunyikan dari pembaca layar.

Seluruh path berikut berada di `public/images/business-categories/`. Foto diunduh dari sumber yang diperiksa atau dipakai ulang dari aset lokal, kemudian dibuka secara visual. Foto adalah ilustrasi kategori, bukan pelanggan/testimoni ANTARIKSA POS, bukan bukti kompatibilitas operasional, dan tidak dibuat dengan AI.

| Kategori / file | Fotografer dan sumber | Dimensi publik | Pemilihan dan crop CSS |
| --- | --- | --- | --- |
| Toko retail — `toko-retail.jpg` | Joan Pinnick, [Pexels 19138180](https://www.pexels.com/photo/merchandise-on-display-at-grocery-store-19138180/) | 1000 × 1502 | Rak minuman/produk kemasan dan buah di toko bahan pangan. Fokus 43% 45% untuk bagian rak. |
| Kedai — `kedai.jpg` | Labskiii, [Pexels 8583123](https://www.pexels.com/photo/wooden-counter-in-the-coffee-shop-8583123/) | 800 × 1200 | Barista di balik mesin kopi dan counter. Fokus 40% 57%. |
| Usaha makanan — `usaha-makanan.jpg` | Shubhra Dhar, [Pexels 36536618](https://www.pexels.com/photo/street-food-vendor-serving-snacks-at-market-36536618/) | 800 × 1200 | Penjual menyajikan makanan di pasar. Fokus 50% 67% pada pelayanan dan makanan. Tidak diklaim sebagai lokasi Indonesia. |
| UMKM — `umkm.jpg` | Kampus Production, [Pexels 7857535](https://www.pexels.com/photo/a-woman-packing-her-merchandise-7857535/) | 900 × 601 | Memakai ulang `public/images/features/produk.jpg` sebagai salinan identik. Pengelola barang dan kemasan; foto ditempatkan pada sisi kanan panel lebar, fokus 40% 38%. |

## Lisensi dan optimasi

Semua menggunakan [Pexels License](https://www.pexels.com/license/), yang mengizinkan pemakaian website dan modifikasi, dengan batasan antara lain tidak menyiratkan endorsement atau menempatkan model dalam konteks merugikan. Halaman foto ditinjau, unduhan berhasil, dan file dapat didekode sebagai JPEG. Tidak memakai aset berbayar atau menyalin foto dari hasil pencarian tanpa memeriksa sumber.

Tiga unduhan baru: `https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg?auto=compress&cs=tinysrgb&w=1100`, dengan ID 19138180, 8583123, 36536618. Kandidat berada di `assets-private/category-photo-candidates/`, tidak direferensikan website.

Resize proporsional dan JPEG kualitas 84 untuk tiga foto baru; metadata tidak disalin. UMKM mempertahankan aset lokal teroptimasi sebelumnya tanpa re-encode. Total empat foto: 642.869 byte (sekitar 628 KiB). Gambar memakai lazy loading, async decoding, alt deskriptif dan object-fit cover. Tidak ada filter warna atau planet ditambahkan ke foto.

## Implementasi dan QA

`src/businessCategories.ts` memuat judul, path, dimensi, alt dan posisi crop. `src/App.tsx` mengganti empat ikon kategori dengan empat gambar. Aturan `.business-category-photo` pada stylesheet komposisi membatasi perubahan ke section kategori, mempertahankan grid asimetris: retail lebar, dua panel tengah, UMKM lebar. Panel UMKM dibuat cukup tinggi agar foto pengelola barang memiliki ruang. Judul dan deskripsi section serta disclaimer kesesuaian tetap utuh.

Overlay gelap melindungi judul; aksen cyan/gold/violet berada pada tepi. Pemeriksaan file foto berbeda dari visual QA halaman. Jika browser tidak tersedia, periksa manual `npm run dev` pada 1440 px dan 390 px: cek crop subjek, judul, tidak ada scroll horizontal, dan bagian lain tetap sama. Belum boleh menyatakan komposisi/crop halaman lulus hanya dari build.
