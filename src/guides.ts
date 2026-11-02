export type Guide = {
  id: string;
  title: string;
  summary: string;
  status: 'Menunggu verifikasi' | 'Sebagian terverifikasi';
  note: string;
  steps: { title: string; text: string; verified?: boolean }[];
  missing: string[];
  images?: { src: string; alt: string; caption: string; width: number; height: number }[];
};

export const guides: Guide[] = [
  {
    id: 'download', title: 'Download ANTARIKSA POS dari Google Play Store',
    summary: 'Mengetahui sumber unduhan sebelum memulai instalasi aplikasi Android.',
    status: 'Menunggu verifikasi',
    note: 'Tautan Google Play resmi belum tersedia pada konfigurasi proyek. Panduan instalasi belum lengkap.',
    steps: [
      { title: 'Periksa ketersediaan tautan resmi', text: 'Saat ini belum ada URL Google Play yang dikonfirmasi pemilik. Bagian ini belum menyediakan tombol unduhan.' },
      { title: 'Minta tautan dan identitas penerbit', text: 'Hubungi tim melalui WhatsApp untuk meminta tautan aplikasi serta identitas penerbit yang benar.' },
      { title: 'Lanjutkan setelah sumber terkonfirmasi', text: 'Ikuti petunjuk instalasi resmi dari tim setelah tautan tersedia. Tampilan halaman Google Play dan proses instalasinya belum diberikan.' },
    ],
    missing: ['URL Google Play resmi dan identitas penerbit.', 'Screenshot halaman aplikasi dan petunjuk instalasi yang telah ditinjau.'],
  },
  {
    id: 'akun', title: 'Mendaftarkan akun dan login',
    summary: 'Mempersiapkan akses akun dengan mengikuti petunjuk yang telah dikonfirmasi tim.',
    status: 'Menunggu verifikasi',
    note: 'Belum tersedia layar pendaftaran atau login maupun dokumentasi autentikasi. Langkah pengisian belum dapat dituliskan.',
    steps: [
      { title: 'Dapatkan petunjuk akses akun', text: 'Tanyakan kepada tim bagaimana pendaftaran dan login dilakukan pada versi aplikasi yang tersedia.' },
      { title: 'Konfirmasikan layar dan kolom yang digunakan', text: 'Nama tombol, kolom, serta metode verifikasi belum diketahui dari materi proyek. Ikuti panduan resmi yang diberikan tim.' },
      { title: 'Gunakan bantuan tim bila akses belum jelas', text: 'Proses setelah pendaftaran, pemulihan akses, dan kondisi berhasil login masih membutuhkan dokumentasi. Membaca materi ini tidak membuat akun.' },
    ],
    missing: ['Screenshot pendaftaran dan login tanpa data pribadi.', 'Nama kolom/tombol, metode verifikasi, dan alur akses resmi.'],
  },
  {
    id: 'toko', title: 'Membuat toko',
    summary: 'Mengetahui informasi yang perlu dikonfirmasi sebelum menyiapkan toko di aplikasi.',
    status: 'Menunggu verifikasi',
    note: 'Screenshot menunjukkan toko yang telah ada, tetapi tidak memperlihatkan proses membuat toko. Data toko pada screenshot privat tidak digunakan dalam panduan ini.',
    steps: [
      { title: 'Konfirmasikan proses pembuatan toko', text: 'Minta tim menjelaskan titik awal pembuatan toko pada versi aplikasi yang Anda gunakan.' },
      { title: 'Ikuti kolom pada panduan resmi', text: 'Formulir, kolom wajib, dan aturan pengisian belum tersedia. Tidak ada daftar kolom yang diasumsikan pada materi ini.' },
      { title: 'Pastikan langkah lanjutan bersama tim', text: 'Tombol penyimpanan, status toko, dan alur setelah pengisian belum terverifikasi. Jangan menyamakan tampilan toko yang sudah ada dengan bukti alur pembuatan.' },
    ],
    missing: ['Screenshot proses membuat toko yang aman untuk publik.', 'Urutan layar, kolom, tombol, dan kondisi setelah penyimpanan.'],
  },
  {
    id: 'produk', title: 'Input produk',
    summary: 'Mengenali akses menu Produk dan bagian Manajemen Produk yang terlihat pada screenshot asli.',
    status: 'Sebagian terverifikasi',
    note: 'Menu Produk, pencarian nama/SKU, dan tombol Tambah terlihat. Form input, penyimpanan, dan hasil penambahan belum tersedia; tutorial ini belum lengkap.',
    steps: [
      { title: 'Kenali menu Produk', text: 'Cuplikan beranda POS memperlihatkan menu Produk bersama Transaksi dan Pesanan Tertunda. Gunakan cuplikan ini untuk mengenali letak menunya.', verified: true },
      { title: 'Kenali layar Manajemen Produk', text: 'Screenshot asli menampilkan judul Manajemen Produk dan kolom “Cari nama atau SKU produk...”. Cuplikan publik hanya menampilkan bagian tanpa identitas outlet.', verified: true },
      { title: 'Kenali tombol Tambah', text: 'Tombol Tambah terlihat di bagian bawah layar Manajemen Produk. Isi layar setelah tombol tersebut belum terverifikasi; belum ada langkah pengisian atau penyimpanan yang dapat dijelaskan.', verified: true },
      { title: 'Minta panduan pengisian sebelum melanjutkan', text: 'Konfirmasikan form input, kolom wajib, cara menyimpan, dan hasil yang diharapkan kepada tim. Materi ini tidak menyatakan produk telah berhasil ditambahkan.' },
    ],
    missing: ['Screenshot formulir penambahan produk tanpa data sensitif.', 'Kolom wajib, tombol simpan, validasi, dan kondisi setelah penyimpanan.'],
    images: [
      { src: '/images/app-screenshots/menu-pos.jpg', alt: 'Cuplikan asli menu POS yang memperlihatkan Produk, Transaksi, dan Pesanan Tertunda tanpa identitas toko.', caption: 'Menu Produk pada beranda POS.', width: 634, height: 312 },
      { src: '/images/guides/manajemen-produk-header.jpg', alt: 'Cuplikan asli judul Manajemen Produk serta pencarian nama atau SKU; identitas outlet tidak ditampilkan.', caption: 'Judul layar dan pencarian produk.', width: 634, height: 220 },
      { src: '/images/guides/tombol-tambah-produk.jpg', alt: 'Cuplikan tombol Tambah dari layar Manajemen Produk yang asli.', caption: 'Tombol Tambah; form berikutnya belum tersedia.', width: 182, height: 100 },
    ],
  },
  {
    id: 'qris', title: 'Pengajuan QRIS',
    summary: 'Membedakan layar pembayaran QRIS dari proses pengajuan dan mendapatkan petunjuk resmi.',
    status: 'Menunggu verifikasi',
    note: 'Materi proyek memperlihatkan layar pembayaran QRIS, bukan formulir pengajuan. Alur pengajuan belum dapat diverifikasi.',
    steps: [
      { title: 'Bedakan pembayaran dan pengajuan', text: 'Screenshot QRIS Dinamis yang tersedia adalah layar input nominal. Layar ini tidak membuktikan adanya menu atau proses pengajuan QRIS.', verified: true },
      { title: 'Minta alur pengajuan resmi', text: 'Hubungi tim untuk mengonfirmasi jalur pengajuan yang berlaku. Belum ada formulir atau urutan pengajuan yang tersedia dalam proyek.' },
      { title: 'Konfirmasikan ketentuan sebelum mengirim informasi', text: 'Persyaratan dokumen, kanal pengiriman, status proses, biaya, dan waktu persetujuan belum terverifikasi. Ikuti penjelasan resmi tim; tidak ada jaminan penerimaan pada panduan ini.' },
    ],
    missing: ['Dokumentasi resmi alur pengajuan dan kanal yang digunakan.', 'Screenshot formulir/status tanpa identitas merchant, rekening, atau QR pembayaran aktif.'],
    images: [{ src: '/images/app-screenshots/qris-dinamis.jpg', alt: 'Layar asli input nominal QRIS Dinamis tanpa kode pembayaran; bukan layar pengajuan QRIS.', caption: 'Layar pembayaran, bukan formulir pengajuan QRIS.', width: 634, height: 1277 }],
  },
];
