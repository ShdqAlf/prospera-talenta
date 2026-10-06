export interface ServiceItem {
  slug: string;
  category: 'offline' | 'digital' | 'event' | 'crowd';
  categoryLabel: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  benefits: string[];
  targetIndustries: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceItem[] = [
  {
    slug: 'spg-spb-event',
    category: 'offline',
    categoryLabel: 'Sales Lapangan',
    title: 'Jasa SPG & SPB Profesional',
    tagline: 'Penyediaan Sales Promotion Girl & Boy berpenampilan menarik, komunikatif, dan terlatih untuk event, mall, & retail.',
    description: 'Kami menyediakan talenta SPG & SPB profesional untuk menjaga booth pameran, peluncuran produk, promosi instore, hingga roadshow skala nasional dengan supervisi penuh.',
    deliverables: [
      'Talenta terverifikasi sesuai kriteria brand (tinggi, penampilan, keahlian komunikasi)',
      'Briefing SOP produk & target penjualan pra-event',
      'Absensi digital & pengawasan lapangan oleh tim Supervisor/Team Leader',
      'Laporan harian jumlah interaksi, sampling, dan closing penjualan'
    ],
    benefits: [
      'Database 38.000+ talenta di seluruh kota besar Indonesia',
      'Hemat biaya operasional tanpa rekrutmen internal',
      'Cadangan talenta (standby replacement) jika terjadi kendala darurat'
    ],
    targetIndustries: ['FMCG', 'Otomotif', 'Elektronik & Gadget', 'Properti', 'Perbankan & Fintech'],
    faqs: [
      {
        question: 'Berapa minimal durasi kontrak untuk SPG/SPB?',
        answer: 'Kami melayani kebutuhan fleksibel: harian (untuk pameran/event akhir pekan), mingguan, hingga kontrak bulanan atau jangka panjang.'
      },
      {
        question: 'Apakah bisa memilih foto dan profil talenta sebelum penugasan?',
        answer: 'Ya, kami menyediakan katalog kompro/polaroid talenta yang lolos kurasi awal untuk Anda seleksi.'
      }
    ]
  },
  {
    slug: 'direct-sales-canvassing',
    category: 'offline',
    categoryLabel: 'Sales Lapangan',
    title: 'Jasa Direct Sales & Canvassing',
    tagline: 'Penetrasi pasar door-to-door, toko retail, dan pasar tradisional dengan tim lapangan agresif berorientasi target.',
    description: 'Ekspansi distribusi produk Anda lebih cepat dengan tim direct sales terlatih yang menyisir area perumahan, perkantoran, dan titik UMKM secara masif.',
    deliverables: [
      'Rencana rute harian (journey plan/routing sheet)',
      'Edukasi produk langsung kepada calon pembeli end-user atau pemilik toko',
      'Pencatatan database prospek dan akuisisi pelanggan baru',
      'Rekap omzet harian & weekly strategic review'
    ],
    benefits: [
      'Penetrasi langsung ke titik konsumen yang tidak tersentuh iklan digital',
      'Model kompensasi fleksibel berbasis retainer + target performance',
      'Monitoring pergerakan tim via koordinat lokasi GPS'
    ],
    targetIndustries: ['FMCG Makanan & Minuman', 'Telekomunikasi / Kartu Perdana', 'Distribusi Retail', 'Peralatan Rumah Tangga'],
    faqs: [
      {
        question: 'Bagaimana cara memantau kerja tim sales di lapangan?',
        answer: 'Setiap tim dipimpin oleh Supervisor yang membagikan laporan live tracking, foto kunjungan, serta rekap nota penjualan secara real-time.'
      }
    ]
  },
  {
    slug: 'sales-aplikasi-fintech',
    category: 'offline',
    categoryLabel: 'Sales Lapangan',
    title: 'Jasa Akuisisi User & Sales Aplikasi',
    tagline: 'Aktivasi download, registrasi, KYC, dan transaksi pertama aplikasi mobile di titik keramaian.',
    description: 'Solusi B2B untuk startup, fintech, e-wallet, dan platform digital yang membutuhkan pertumbuhan Monthly Active User (MAU) dan instalasi aplikasi organik terverifikasi di lapangan.',
    deliverables: [
      'Edukasi calon pengguna di kampus, pasar, stasiun, mall, dan pemukiman',
      'Bimbingan registrasi akun, verifikasi data (KYC), hingga first transaction',
      'Pemberian gimmick / merchandise promosi sesuai mekanisme klien',
      'Laporan analitik user acquisition harian dengan data valid'
    ],
    benefits: [
      'Biaya akuisisi per user (CAC) lebih terukur dan efisien',
      'Tingkat retensi user lebih tinggi karena mendapat panduan langsung',
      'Bebas dari fraud bot karena dikerjakan tatap muka secara legal'
    ],
    targetIndustries: ['Fintech Lending & Payment', 'Bank Digital', 'E-commerce & Marketplace', 'Aplikasi Transportasi & Delivery'],
    faqs: [
      {
        question: 'Apakah user yang diakuisisi dijamin akun asli?',
        answer: 'Tentu. Tim lapangan kami memastikan calon pengguna mengunduh dari toko resmi (Play Store / App Store) dan menyelesaikan verifikasi OTP pribadi.'
      }
    ]
  },
  {
    slug: 'mystery-shopper-audit',
    category: 'offline',
    categoryLabel: 'Sales Lapangan',
    title: 'Jasa Mystery Shopper & Audit Layanan',
    tagline: 'Evaluasi independen standar pelayanan cabang, kejujuran staf, dan pengalaman pelanggan Anda secara objektif.',
    description: 'Evaluasi kinerja outlet ritel, restoran, showroom, dan cabang bank Anda menggunakan talenta terlatih yang berperan sebagai pembeli anonim.',
    deliverables: [
      'Penyusunan checklist penilaian bersama tim internal Anda',
      'Kunjungan rahasia berkala ke cabang yang ditentukan',
      'Rekaman bukti audio/foto/video rahasia (sesuai regulasi SOP)',
      'Laporan komprehensif kepatuhan SOP, keramahan staf, dan kebersihan outlet'
    ],
    benefits: [
      'Menemukan celah penurunan omzet akibat kelemahan layanan frontline',
      'Menilai efektivitas training karyawan di lapangan secara transparan',
      'Tolak ukur kompetitif dengan audit benchmark kompetitor'
    ],
    targetIndustries: ['F&B Franchise & Restoran', 'Ritel Modern & Supermarket', 'Perbankan & Multifinance', 'Hospitality & Klinik Kecantikan'],
    faqs: [
      {
        question: 'Berapa lama laporan audit mystery shopper diserahkan?',
        answer: 'Laporan digital disertai bukti pendukung diserahkan maksimal 2x24 jam setelah kunjungan selesai.'
      }
    ]
  },
  {
    slug: 'clipper-short-video',
    category: 'digital',
    categoryLabel: 'Digital Sales & Traffic',
    title: 'Jasa Clipper Video TikTok & Reels',
    tagline: 'Distribusi massal potongan video produk viral di ratusan akun TikTok, Instagram Reels, dan YouTube Shorts.',
    description: 'Banjiri feed algoritma media sosial dengan ratusan video konten produk Anda yang dipotong dari sesi live, podcast, atau video edukasi untuk menjaring traffic & penjualan affiliate.',
    deliverables: [
      'Kurasi momen terbaik (hook & punchline) dari materi video klien',
      'Editing vertikal 9:16 dengan caption dinamis, hook teks menarik, dan B-roll',
      'Posting terjadwal di puluhan hingga ratusan akun clipper aktif',
      'Penyematan link keranjang kuning TikTok Shop atau link bio affiliasi'
    ],
    benefits: [
      'Mendapatkan jutaan impresi organik tanpa biaya iklan berulang',
      'Membangun awareness instan di kalangan Gen-Z dan milenial',
      'Skema scaling cepat hingga 500+ video per bulan'
    ],
    targetIndustries: ['Brand Skincare & Fashion', 'Kursus Online / Edukasi', 'Suplemen Kesehatan', 'Brand Consumer Goods'],
    faqs: [
      {
        question: 'Apakah materi video mentah harus disediakan dari pihak klien?',
        answer: 'Klien dapat menyediakan rekaman live streaming, webinar, atau materi promosi. Tim kami yang akan memilih titik hook terbaik dan melakukan editing.'
      }
    ]
  },
  {
    slug: 'buzzer-dan-kol-activation',
    category: 'digital',
    categoryLabel: 'Digital Sales & Traffic',
    title: 'Jasa Buzzer & Micro Influencer',
    tagline: 'Aktivasi opini positif publik, perbincangan medsos, dan kampanye viral terkoordinasi.',
    description: 'Mobilisasi jaringan akun aktif untuk menciptakan amplifikasi kampanye, meningkatkan engagement postingan brand, dan mengarahkan opini positif secara natural.',
    deliverables: [
      'Penyusunan alur narasi (angle campaign) dan hashtag unik',
      'Penyebaran postingan/komentar oleh ratusan akun riil',
      'Trending topic push di platform X (Twitter) atau interaksi massal Instagram/TikTok',
      'Laporan performa reach, impressions, dan engagement rate'
    ],
    benefits: [
      'Membantu mendongkrak visibilitas peluncuran produk baru',
      'Meredam sentimen negatif dengan narasi berimbang yang konstruktif',
      'Eksekusi cepat dalam hitungan jam untuk momentum penting'
    ],
    targetIndustries: ['Event & Hiburan', 'Brand Retail Nasional', 'Kampanye Publik & CSR', 'Platform Digital'],
    faqs: [
      {
        question: 'Apakah akun yang digunakan adalah akun bot?',
        answer: 'Tidak. Kami menggunakan jaringan talenta asli (real human) yang tergabung dalam komunitas kami dengan riwayat akun organik.'
      }
    ]
  },
  {
    slug: 'rating-review-google-marketplace',
    category: 'digital',
    categoryLabel: 'Digital Sales & Traffic',
    title: 'Jasa Optimasi Rating & Review',
    tagline: 'Tingkatkan reputasi profil Google Maps, Play Store, dan toko Marketplace dengan ulasan organik positif.',
    description: 'Reputasi online adalah faktor penentu konversi pelanggan 88%. Kami menggerakkan pengguna riil untuk memberikan rating bintang lima dan testimoni autentik untuk bisnis Anda.',
    deliverables: [
      'Ulasan natural dari perangkat unik (bukan emulator atau bot)',
      'Foto ulasan autentik produk atau lokasi usaha untuk reputasi maksimal',
      'Distribusi ulasan bertahap agar aman dari filter spam algoritma',
      'Monitoring berkala kenaikan skor rating Google Business Profile'
    ],
    benefits: [
      'Meningkatkan peringkat Lokal SEO di pencarian Google Maps sekitar',
      'Meningkatkan rasa percaya (trust) calon pembeli baru hingga 90%',
      'Membantu menutup rating negatif dari kompetitor tidak sehat'
    ],
    targetIndustries: ['Klinik & Rumah Sakit', 'Hotel & Restoran', 'Kantor Jasa Profesional', 'Seller Marketplace Shopee/Tokopedia'],
    faqs: [
      {
        question: 'Apakah ulasan aman dari penghapusan Google?',
        answer: 'Ya, kami menggunakan jadwal posting berjarak (drip-feed) dari akun pengguna riil dengan Local Guide aktif untuk menjamin retensi ulasan.'
      }
    ]
  },
  {
    slug: 'host-live-streaming',
    category: 'digital',
    categoryLabel: 'Digital Sales & Traffic',
    title: 'Jasa Live Streamer & Host TikTok/Shopee',
    tagline: 'Host live streaming energik dan persuasif untuk memacu omzet jualan live 24/7 di marketplace.',
    description: 'Dapatkan tim host live streaming profesional yang memahami teknik soft-selling, penguasaan promo flash sale, dan interaksi interaktif untuk mendongkrak GMV toko Anda.',
    deliverables: [
      'Host terlatih dengan kemampuan komunikasi ceria & persuasif',
      'Penyusunan script flow penjualan dan jadwal voucher diskon',
      'Dukungan tim operator teknis & moderator komentar live',
      'Laporan metrik penjualan live: Viewer, Engagement, GMV, dan Conversion Rate'
    ],
    benefits: [
      'Toko Anda bisa live 8-16 jam per hari tanpa beban rekrut staf in-house',
      'Peningkatan retensi penonton dan pembelian impulsif',
      'Dapat menggunakan studio klien atau talenta yang bersedia remote/onsite'
    ],
    targetIndustries: ['Beauty & Personal Care', 'Fashion & Aksesoris', 'Makanan Ringan & Minuman', 'Home Living'],
    faqs: [
      {
        question: 'Apakah host live disediakan dengan perlengkapan studio?',
        answer: 'Kami dapat menyediakan talenta host untuk hadir di studio kantor Anda, atau mengoperasikan live dari setup yang disepakati.'
      }
    ]
  },
  {
    slug: 'crew-event-organizer',
    category: 'event',
    categoryLabel: 'Event & Field Ops',
    title: 'Jasa Crew Event, Ticketing & Usher',
    tagline: 'Tim operasional lapangan siap siaga untuk konser, pameran expo, gathering korporat, dan festival.',
    description: 'Kelancaran event membutuhkan tim crew yang disiplin dan sigap. Kami menyuplai ratusan crew terlatih untuk ticketing, penukaran wristband, usher VIP, stage hand, hingga crowd control.',
    deliverables: [
      'Tim crew berseragam rapi sesuai dresscode dan aturan event',
      'Koordinator lapangan yang berpengalaman menangani puluhan event',
      'Briefing teknis dan simulasi crowd management sebelum gate dibuka',
      'Manajemen logistik perlengkapan event dan pengawasan flow pengunjung'
    ],
    benefits: [
      'Mengurangi risiko kekacauan antrean di pintu masuk event',
      'Dukungan kuantitas personel besar dalam waktu persiapan singkat',
      'Kesiapan koordinasi intensif bersama pihak keamanan dan EO utama'
    ],
    targetIndustries: ['Promotor Konser & Musik', 'Penyelenggara Expo & Seminar', 'Instansi BUMN & Pemerintahan', 'Perusahaan Korporat'],
    faqs: [
      {
        question: 'Berapa jumlah maksimal crew yang bisa disediakan dalam 1 event?',
        answer: 'Kami sanggup menyuplai 5 hingga 500+ crew sekaligus untuk event skala festival besar di berbagai kota di Indonesia.'
      }
    ]
  },
  {
    slug: 'aktivasi-komunitas-crowd',
    category: 'crowd',
    categoryLabel: 'Crowd & Community',
    title: 'Jasa Aktivasi Komunitas & Massa',
    tagline: 'Mobilisasi komunitas pelajar, mahasiswa, UMKM, dan komunitas hobi untuk aktivasi brand Anda.',
    description: 'Jangkau basis massa autentik melalui kemitraan dengan jaringan komunitas terstruktur kami. Sangat ideal untuk kuesioner riset pasar massal, roadshow kampus, uji coba produk, dan viralitas organik.',
    deliverables: [
      'Akses ke jejaring komunitas (Mahasiswa, Komunitas Otomotif, UMKM, Pengemudi)',
      'Pengisian kuesioner riset pasar kuantitatif dengan data demografi valid',
      'Kehadiran massa terkoordinasi untuk event peluncuran produk baru',
      'Dokumentasi lengkap dan validasi data partisipan'
    ],
    benefits: [
      'Validitas data tinggi karena berasal dari demografi spesifik',
      'Membangun loyalitas brand sejak dini di segmen anak muda & pelaku usaha',
      'Biaya aktivasi jauh lebih efisien dibanding sampling acak di jalan'
    ],
    targetIndustries: ['Lembaga Riset & Konsultan', 'Brand FMCG', 'Perusahaan Transportasi & Logistik', 'Aplikasi Edukasi'],
    faqs: [
      {
        question: 'Bagaimana cara memastikan partisipan komunitas hadir sesuai kuota?',
        answer: 'Kami menerapkan sistem presensi berbasis barcode dan registrasi awal yang dikoordinir langsung oleh PIC ketua komunitas masing-masing.'
      }
    ]
  }
];
