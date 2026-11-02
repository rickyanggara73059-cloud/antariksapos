# Hero cinematic ANTARIKSA POS

## Asal aset

`public/images/hero/earth-galaxy-cinematic.jpg` adalah **render generatif**, bukan foto Bumi asli atau representasi geografis ilmiah. Dibuat dengan built-in imagegen pada 19 Oktober 2026. Tidak ada foto pihak ketiga yang digunakan. Logo dan screenshot UI tidak dibuat ulang; keduanya tetap memakai aset asli.

Output generasi 1808 × 870 PNG dioptimalkan secara proporsional menjadi JPEG 1792 × 862, kualitas 87, 265.377 byte. Seluruh aset proyek yang dirujuk disimpan di workspace.

Prompt final:

> Create a premium cinematic photorealistic 3D render background asset for a space technology website hero, wide landscape 1792x860 composition. NO text, NO logo, NO phone, NO UI, NO rings or foreground objects. Left 42 percent nearly black deep navy quiet negative space for white headline, smoothly blended. Right upper region elegant finely detailed deep blue and subtle violet galaxy nebula, dense tiny realistic stars and cosmic dust, not oversized star icons. Large realistic curved Earth horizon rises across lower right half, viewed from low Earth orbit, Earth extends beyond bottom and right frame. Horizon crest around x1250 y500, Earth surface fills lower 35 percent on right, realistic deep oceans, dark continents, fine cloud systems, scattered subtle warm city lights on night side, brilliant thin electric blue atmospheric rim; warm small sunrise bloom near far right horizon. Physically plausible cinematic volumetric lighting and photographic surface detail, restrained gold highlights, navy dominant. Leave center right upper area clear for composited real smartphone. High quality photorealistic digital render, not an actual photograph.

## Komposisi

- Hero desktop: sekitar 40% copy dan 60% visual, lebar maksimum 1560 px. Navbar dan bagian lain tidak diubah.
- Render Bumi/galaksi berada di lapisan background, dengan overlay gelap di kiri; smartphone asli dan cincin tetap elemen terpisah.
- Cincin memakai permukaan SVG metalik dan teks HTML pada motion path elips. Dua separuh cincin dipotong pada lintasan identik untuk layering belakang/perangkat/depan. Dua set label memungkinkan loop setengah sirkuit.
- Smartphone mempertahankan object-fit contain. Tombol jeda menghentikan teks, floating, kartu, dan animasi guide; reduced motion mematikan semuanya.
- Pada tablet perangkat diperkecil. Mobile menempatkan copy dahulu dan menyembunyikan kartu dekoratif.

## Verifikasi visual

Render generatif dan JPEG hasil optimasi diperiksa sebagai file gambar. Ini bukan pengujian visual halaman. Referensi hero pemilik tidak tersedia sebagai file pada audit; spesifikasi tertulis menjadi acuan. Browser otomatis harus tersedia sebelum menyatakan kesamaan dengan referensi atau layout desktop/mobile lulus.

Manual: jalankan `npm run dev`, periksa 1792 × 860, 1440 × 900, 1024 × 768, 768 × 1024, dan 390 × 844. Periksa horizon, proporsi perangkat, ring depan/belakang, orientasi label saat melewati tepi, teks tidak bertumpuk, serta tidak ada scroll horizontal. Uji Tab, tombol jeda selama beberapa detik, dan emulasi prefers-reduced-motion. Perbandingan pixel membutuhkan gambar referensi asli.
