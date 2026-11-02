export const siteConfig = {
  name: 'ANTARIKSA POS',
  contact: '082147314910',
  whatsappUrl: 'https://wa.me/6282147314910',
  whatsappMessage: 'Halo, saya ingin mengetahui lebih lanjut tentang ANTARIKSA POS.',
  androidDownloadUrl: 'https://play.google.com/store/apps/details?id=id.akunqu.app.a002sentolop',
  officialDomain: null as string | null,
  logoUrl: '/images/branding/antariksa-pos-logo.png',
  heroScreenshot: {
    src: '/images/app-screenshots/antariksa-pos-dashboard.jpeg',
    alt: 'Dashboard asli DIMSUM MAMA ERZA dengan menu Kasir, Sinkronisasi Data, Transaksi, Pesanan Tertunda, Produk, Laporan, dan Ringkasan Aset.',
  },
  screenshots: [
    { src: '/images/app-screenshots/menu-pos.jpg', alt: 'Cuplikan menu POS: Kasir, Sinkronisasi Data, Transaksi, Pesanan Tertunda, Produk, dan Lainnya.', title: 'Menu POS', caption: 'Cuplikan navigasi kasir dan pengelolaan usaha. Bagian identitas toko dan laporan tidak ditampilkan.' },
    { src: '/images/app-screenshots/qris-dinamis.jpg', alt: 'Layar QRIS Dinamis pada tahap memasukkan nominal, tanpa kode QR pembayaran.', title: 'Input nominal QRIS Dinamis', caption: 'Tampilan sebelum kode pembayaran dibuat. Ketersediaan dan ketentuan layanan perlu dikonfirmasi.' },
    { src: '/images/app-screenshots/kasbon.jpg', alt: 'Layar Kasbon/Piutang dengan pemilih periode dan kondisi belum ada kasbon.', title: 'Kasbon / Piutang', caption: 'Pemilih periode dan kondisi daftar kasbon kosong pada screenshot yang diberikan.' },
  ],
};
export const whatsappHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

