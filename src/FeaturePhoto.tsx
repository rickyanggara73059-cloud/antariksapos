const featurePhotos = {
  'Kasir POS': { file: 'kasir-pos', width: 1100, height: 733, position: '46% 50%', alt: 'Foto ilustrasi: kasir melayani pelanggan melalui layar sentuh di meja kedai; bukan tampilan ANTARIKSA POS.' },
  'Produk': { file: 'produk', width: 900, height: 601, position: '43% 48%', alt: 'Foto ilustrasi: pengelola usaha menyiapkan barang dan kemasan di toko pakaian.' },
  'Laporan': { file: 'laporan', width: 900, height: 600, position: '50% 53%', alt: 'Foto ilustrasi: tangan memeriksa dokumen keuangan dengan pena dan kalkulator.' },
  'Mutasi': { file: 'mutasi', width: 850, height: 1275, position: '50% 78%', alt: 'Foto ilustrasi: seseorang meninjau dokumen keuangan di meja dengan laptop dan kartu.' },
  'QRIS Dinamis': { file: 'qris-dinamis', width: 900, height: 600, position: '50% 60%', alt: 'Foto ilustrasi: pelanggan mengarahkan smartphone ke QR pada perangkat di meja kasir; bukan kode pembayaran ANTARIKSA POS.' },
  'QRIS Statis': { file: 'qris-statis', width: 900, height: 1350, position: '45% 54%', alt: 'Foto ilustrasi: dua perangkat digunakan dalam aktivitas pembayaran QR di meja usaha; bukan QRIS resmi ANTARIKSA POS.' },
  'Kasbon': { file: 'kasbon', width: 900, height: 600, position: '50% 65%', alt: 'Foto ilustrasi: tangan mencatat perhitungan dalam buku di samping kalkulator dan laptop.' },
  'Transaksi Pending': { file: 'transaksi-pending', width: 850, height: 1273, position: '50% 57%', alt: 'Foto ilustrasi: pelanggan dan petugas berada pada tahap pembayaran di meja layanan; status transaksi tidak diperlihatkan.' },
  'Profil': { file: 'profil', width: 900, height: 600, position: '52% 54%', alt: 'Foto ilustrasi: seorang profesional menggunakan smartphone di meja kerja.' },
} as const;

export type FeaturePhotoTitle = keyof typeof featurePhotos;

export default function FeaturePhoto({ title }: { title: FeaturePhotoTitle }) {
  const photo = featurePhotos[title];
  return <div className="feature-photo">
    <img src={`/images/features/${photo.file}.jpg`} alt={photo.alt} width={photo.width} height={photo.height} style={{ objectPosition: photo.position }} loading="lazy" decoding="async" />
    <span className="feature-photo-label" aria-hidden="true">Foto ilustrasi</span>
  </div>;
}
