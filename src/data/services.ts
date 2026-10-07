export interface MediaDocumentation {
  type: 'image' | 'video';
  src: string;
  title: string;
  caption?: string;
}

export interface ServiceItem {
  documentation?: MediaDocumentation[];
  slug: string;
  keyword: string;
  category: 'offline' | 'digital' | 'event' | 'crowd';
  categoryLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  description: string;
  intro: string;
  whyTitle: string;
  whyDescription: string;
  whyPoints: { title: string; desc: string }[];
  deliverablesTitle: string;
  deliverables: string[];
  benefitsTitle: string;
  benefits: string[];
  workflowTitle: string;
  workflow: { step: string; title: string; desc: string }[];
  targetIndustries: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceItem[] = [
  {
    slug: 'jasa-direct-sales',
    keyword: 'jasa direct sales',
    category: 'offline',
    categoryLabel: 'Sales Lapangan',
    title: 'Jasa Direct Sales',
    metaTitle: 'Jasa Direct Sales & Canvassing Lapangan B2B',
    metaDescription: 'Tingkatkan omzet dengan jasa direct sales terkelola dari PT Prospera Talenta. Tim sales canvassing terlatih siap penetrasi retail dan konsumen.',
    tagline: 'Penetrasi pasar retail, UMKM, dan perumahan secara agresif melalui tim canvassing lapangan terkelola.',
    description: 'Layanan jasa direct sales profesional untuk membantu penetrasi pasar retail, toko kelontong, dan konsumen door-to-door dengan sistem supervisi GPS.',
    intro: 'Sedang mencari mitra penyedia jasa direct sales yang agresif dan berorientasi target untuk bisnis Anda? PT Prospera Talenta menghadirkan solusi jasa direct sales terkelola yang dirancang khusus untuk memperluas distribusi produk secara cepat. Tim sales kami terjun langsung ke lapangan menyisir titik potensial guna mengakuisisi pelanggan baru secara nyata.',
    whyTitle: 'Mengapa Perusahaan Anda Membutuhkan Jasa Direct Sales?',
    whyDescription: 'Iklan digital memang mampu membangun kesadaran merek, namun transaksi nyata di lapangan sering kali membutuhkan interaksi tatap muka langsung. Oleh karena itu, jasa direct sales menjadi strategi paling efektif untuk menembus pasar retail dan general trade yang sulit dijangkau lewat internet.',
    whyPoints: [
      {
        title: 'Penetrasi Pasar Nyata',
        desc: 'Menjangkau toko kelontong, warung, pasar tradisional, dan area perumahan yang belum terjamah promosi digital.'
      },
      {
        title: 'Edukasi Produk Langsung',
        desc: 'Tenaga penjual menjelaskan fungsi dan keunggulan produk secara interaktif sehingga memicu keputusan pembelian instan.'
      },
      {
        title: 'Efisiensi Biaya Operasional',
        desc: 'Perusahaan Anda tidak perlu menanggung biaya rekrutmen dan pelatihan internal karena seluruh tim dikelola secara profesional.'
      }
    ],
    deliverablesTitle: 'Ruang Lingkup dan Tanggung Jawab Tim Jasa Direct Sales',
    deliverables: [
      'Penyusunan rencana rute harian (journey plan) yang terstruktur dan terukur',
      'Edukasi manfaat produk secara persuasif kepada pemilik toko dan konsumen akhir',
      'Pencatatan database pelanggan baru dan akuisisi merchant terverifikasi',
      'Penjualan produk di tempat dengan rekapitulasi nota serta omzet harian',
      'Laporan performa berkala dan evaluasi tingkat konversi mingguan'
    ],
    benefitsTitle: 'Keunggulan Memilih Jasa Direct Sales PT Prospera Talenta',
    benefits: [
      'Penetrasi langsung ke titik konsumen tanpa rantai perantara yang memperlambat arus kas',
      'Monitoring pergerakan tim secara transparan melalui absensi digital dan pelacakan GPS',
      'Model kerjasama fleksibel berbasis retainer dan target performa yang terukur',
      'Jaminan penggantian tenaga penjual apabila ada anggota tim yang berhalangan hadir'
    ],
    workflowTitle: 'Tahapan Eksekusi Penugasan Jasa Direct Sales Lapangan',
    workflow: [
      {
        step: '01',
        title: 'Analisis Produk & Target Area',
        desc: 'Kami memetakan demografi target pasar dan menyusun rute canvassing harian yang paling potensial.'
      },
      {
        step: '02',
        title: 'Pelatihan Product Knowledge',
        desc: 'Tim dibekali pemahaman produk mendalam, skrip komunikasi, serta teknik closing yang efektif.'
      },
      {
        step: '03',
        title: 'Eksekusi Lapangan & Supervisi',
        desc: 'Tim mulai bergerak menyisir rute target didampingi Team Leader untuk menjaga kedisiplinan kerja.'
      },
      {
        step: '04',
        title: 'Rekapitulasi & Laporan Harian',
        desc: 'Manajemen klien menerima laporan harian berisi data kunjungan, omzet transaksi, dan database prospek.'
      }
    ],
    targetIndustries: [
      'FMCG Makanan & Minuman',
      'Telekomunikasi & Kartu Perdana',
      'Distribusi Retail & Grosir',
      'Peralatan Rumah Tangga',
      'Fintech & Keagenan Keuangan'
    ],
        documentation: [
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner-4.webp',
        title: 'Penetrasi Canvassing Lapangan',
        caption: 'Tim direct sales berinteraksi langsung dengan pemilik gerai dan konsumen retail.'
      },
      {
        type: 'image',
        src: '/riset-pasar/jasa-riset-pasar-4.webp',
        title: 'Edukasi Produk Tatap Muka',
        caption: 'Demonstrasi keunggulan produk dan presentasi fitur langsung kepada calon pelanggan.'
      },
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner-7.webp',
        title: 'Penyisiran Rute Journey Plan',
        caption: 'Supervisi tim sales menyusuri area pemetaan harian dengan presensi berbasis GPS.'
      },
      {
        type: 'image',
        src: '/riset-pasar/jasa-riset-pasar-2.webp',
        title: 'Akuisisi Merchant & Pelanggan Baru',
        caption: 'Pendataan identitas prospek dan penutupan transaksi secara langsung di lapangan.'
      }
    ],
    faqs: [
      {
        question: 'Apa itu jasa direct sales dan bagaimana mekanisme kerjanya?',
        answer: 'Jasa direct sales adalah layanan penyediaan tenaga penjualan lapangan yang mendatangi calon konsumen atau toko retail secara langsung (door-to-door atau store-to-store) untuk mendemonstrasikan keunggulan produk dan melakukan transaksi penjualan seketika.'
      },
      {
        question: 'Bagaimana cara memantau kinerja tim jasa direct sales di lapangan?',
        answer: 'Setiap tim dipimpin oleh Supervisor lapangan yang membagikan laporan live tracking koordinat GPS, dokumentasi foto kunjungan, serta rekap nota penjualan secara real-time setiap hari.'
      },
      {
        question: 'Berapa lama minimal durasi kontrak untuk penugasan direct sales?',
        answer: 'Kami menyediakan durasi kontrak yang fleksibel, mulai dari proyek uji coba selama 1 bulan hingga program kemitraan jangka panjang tahunan.'
      }
    ]
  },
  {
    slug: 'jasa-kol-visit',
    keyword: 'Jasa KOL Visit',
    category: 'digital',
    categoryLabel: 'Digital & Traffic',
    title: 'Jasa KOL Visit',
    metaTitle: 'Jasa KOL Visit & Review On-Site Influencer',
    metaDescription: 'Dongkrak traffic dan keramaian outlet Anda dengan Jasa KOL Visit dari PT Prospera Talenta. Ratusan influencer siap hadir dan posting konten.',
    tagline: 'Undang puluhan influencer ke outlet Anda untuk menciptakan FOMO, review organik, dan ledakan traffic pengunjung.',
    description: 'Layanan Jasa KOL Visit profesional untuk mengorganisasi kunjungan influencer dan food vlogger ke outlet, resto, atau event Anda secara serentak.',
    intro: 'Ingin mendatangkan keramaian pengunjung dan menciptakan ledakan eksposur di media sosial untuk outlet Anda? PT Prospera Talenta menyediakan Jasa KOL Visit profesional yang menghubungkan brand Anda dengan jaringan influencer terpilih. Para kreator konten akan hadir langsung di lokasi bisnis Anda untuk mendokumentasikan pengalaman dan membagikannya ke ribuan pengikut aktif.',
    whyTitle: 'Mengapa Strategi Jasa KOL Visit Sangat Efektif?',
    whyDescription: 'Konsumen masa kini lebih mempercayai bukti visual autentik dari kreator favorit mereka dibanding iklan promosi biasa. Oleh sebab itu, strategi Jasa KOL Visit mampu memberikan bukti sosial (social proof) instan yang mendorong audiens untuk segera berkunjung dan mencoba produk Anda secara langsung.',
    whyPoints: [
      {
        title: 'Efek Keramaian & Antrean',
        desc: 'Menciptakan antrean alami dan kesan tempat populer yang memicu rasa penasaran masyarakat sekitar.'
      },
      {
        title: 'Ulasan Visual Autentik',
        desc: 'Menghasilkan video review reels dan TikTok yang memperlihatkan suasana outlet dan kualitas menu nyata.'
      },
      {
        title: 'Peningkatan Penelusuran Maps',
        desc: 'Penyematan tag lokasi bisnis mendorong peningkatan traffic penelusuran di Instagram Place dan Google Maps.'
      }
    ],
    deliverablesTitle: 'Ruang Lingkup Layanan Jasa KOL Visit Kami',
    deliverables: [
      'Kurasi profil influencer dan food vlogger sesuai segmen dan target audiens brand',
      'Koordinasi jadwal kunjungan (visit schedule) on-site yang tertata rapi tanpa mengganggu operasional',
      'Penyusunan brief kreatif, sudut pandang konten (angle), dan pesan promosi utama',
      'Produksi konten video vertikal berkualitas tinggi dengan penyematan tag lokasi gerai',
      'Kompilasi seluruh tautan postingan serta laporan analitik reach dan engagement'
    ],
    benefitsTitle: 'Keunggulan Jasa KOL Visit Bersama PT Prospera Talenta',
    benefits: [
      'Akses ke ratusan micro hingga macro influencer aktif di berbagai kota besar',
      'Eksekusi cepat dan terorganisir tanpa perlu menghubungi kreator satu per satu',
      'Konten review autentik dapat digunakan kembali sebagai aset iklan digital brand',
      'Garansi kehadiran talenta sesuai jadwal yang telah disepakati bersama'
    ],
    workflowTitle: 'Alur Manajemen Kampanye Jasa KOL Visit',
    workflow: [
      {
        step: '01',
        title: 'Penentuan Target & Kriteria KOL',
        desc: 'Kami mendiskusikan target pasar outlet Anda untuk menentukan niche dan demografi influencer yang paling tepat.'
      },
      {
        step: '02',
        title: 'Undangan & Penjadwalan Kunjungan',
        desc: 'Tim kami mengurus konfirmasi kehadiran, brief konten, dan pengaturan jadwal kunjungan bertahap.'
      },
      {
        step: '03',
        title: 'Pelaksanaan Visit & Pembuatan Konten',
        desc: 'KOL datang ke lokasi, merasakan produk, dan mengambil footage video kreatif sesuai panduan.'
      },
      {
        step: '04',
        title: 'Tayang Serentak & Laporan Hasil',
        desc: 'Konten dipublikasikan secara terkoordinasi untuk memicu algoritma viral, diakhiri dengan laporan impresi.'
      }
    ],
    targetIndustries: [
      'Restoran, Kafe & Kuliner (F&B)',
      'Klinik Kecantikan & Skincare',
      'Hotel, Resort & Destinasi Wisata',
      'Butik Fashion & Lifestyle',
      'Taman Hiburan & Event Festival'
    ],
        documentation: [
      {
        type: 'video',
        src: '/kol-visit/kol-visit-1.mp4',
        title: 'Review Kuliner & Suasana Outlet',
        caption: 'Dokumentasi kunjungan KOL on-site untuk mengulas menu dan atmosfer resto mitra.'
      },
      {
        type: 'video',
        src: '/kol-visit/kol-visit-2.mp4',
        title: 'Liputan Pengalaman Santap Langsung',
        caption: 'Pembuatan konten video vertikal autentik untuk mendorong traffic penonton Reels dan TikTok.'
      },
      {
        type: 'video',
        src: '/kol-visit/kol-visit-3.mp4',
        title: 'Aktivasi Keramaian Gerai On-Site',
        caption: 'Pemicu antrean dan eksposur visual yang memperkuat reputasi tempat di media sosial.'
      },
      {
        type: 'video',
        src: '/kol-visit/kol-visit-4.mp4',
        title: 'Ulasan Produk & Tagging Lokasi Gerai',
        caption: 'Penyampaian review positif dengan tag lokasi untuk mendongkrak pencarian Google Maps.'
      }
    ],
    faqs: [
      {
        question: 'Apa yang dimaksud dengan Jasa KOL Visit?',
        answer: 'Jasa KOL Visit adalah layanan pengorganisasian kedatangan Key Opinion Leader (influencer) ke lokasi fisik usaha klien untuk mencoba produk, merasakan atmosfer gerai, serta mengunggah ulasan di akun media sosial mereka.'
      },
      {
        question: 'Berapa banyak KOL yang bisa didatangkan dalam satu sesi event?',
        answer: 'Kami sanggup memobilisasi mulai dari 5 hingga lebih dari 50 KOL sekaligus, baik untuk acara grand opening serentak maupun kunjungan bertahap setiap minggu.'
      },
      {
        question: 'Apakah pihak klien bisa memilih profil influencer terlebih dahulu?',
        answer: 'Tentu saja. Kami akan memberikan daftar profil kandidat lengkap dengan metrik follower, engagement rate, dan riwayat konten untuk Anda setujui sebelum jadwal kunjungan ditetapkan.'
      }
    ]
  },
  {
    slug: 'jasa-riset-pasar',
    keyword: 'Jasa Riset Pasar',
    category: 'offline',
    categoryLabel: 'Riset & Data',
    title: 'Jasa Riset Pasar',
    metaTitle: 'Jasa Riset Pasar & Riset Konsumen Lapangan',
    metaDescription: 'Dapatkan data akurat sebelum ekspansi bisnis melalui Jasa Riset Pasar PT Prospera Talenta. Survei konsumen, uji produk, dan analisis kompetitor.',
    tagline: 'Pengumpulan data primer lapangan, analisis perilaku konsumen, dan validasi produk untuk keputusan bisnis yang tepat sasaran.',
    description: 'Layanan Jasa Riset Pasar independen untuk membantu perusahaan memetakan potensi pasar, preferensi konsumen, dan benchmark kompetitor secara valid.',
    intro: 'Sebelum mengalokasikan anggaran besar untuk produksi massal atau ekspansi cabang, Anda membutuhkan data pasar yang valid dan faktual. PT Prospera Talenta menghadirkan Jasa Riset Pasar terpercaya untuk membantu korporat dan pelaku bisnis memahami perilaku konsumen, preferensi harga, serta peta persaingan secara mendalam.',
    whyTitle: 'Mengapa Perusahaan Membutuhkan Jasa Riset Pasar Profesional?',
    whyDescription: 'Banyak peluncuran produk baru mengalami kegagalan akibat asumsi internal yang tidak mencerminkan kondisi lapangan yang sebenarnya. Selain itu, dinamika kebutuhan konsumen terus berkembang cepat. Oleh karena itu, Jasa Riset Pasar memberikan kepastian berbasis data agar investasi bisnis Anda tepat sasaran.',
    whyPoints: [
      {
        title: 'Validasi Produk Nyata',
        desc: 'Menguji ketertarikan calon konsumen terhadap rasa, kemasan, atau fitur produk sebelum peluncuran resmi.'
      },
      {
        title: 'Analisis Kompetitor Objektif',
        desc: 'Mengetahui kelebihan, kelemahan, serta strategi harga produk pesaing langsung dari sudut pandang konsumen.'
      },
      {
        title: 'Keputusan Bisnis Berbasis Fakta',
        desc: 'Mengurangi risiko kerugian finansial akibat salah menentukan target demografi atau strategi distribusi.'
      }
    ],
    deliverablesTitle: 'Ruang Lingkup dan Metodologi Jasa Riset Pasar',
    deliverables: [
      'Penyusunan instrumen kuesioner dan pedoman wawancara terstruktur bersama tim analis',
      'Pelaksanaan survei lapangan tatap muka dengan metodologi sampling yang ketat',
      'Uji coba produk langsung (blind test) dan uji preferensi rasa kepada responden target',
      'Audit ketersediaan display dan pemantauan harga produk kompetitor di pasar modern maupun tradisional',
      'Penyusunan laporan eksekutif lengkap dengan tabulasi data statistik, grafik, dan rekomendasi strategis'
    ],
    benefitsTitle: 'Keunggulan Jasa Riset Pasar PT Prospera Talenta',
    benefits: [
      'Data primer autentik dari responden manusia nyata tanpa manipulasi bot online',
      'Jangkauan wilayah survei yang luas hingga ke kota tier 2 dan tier 3 di Indonesia',
      'Enumerator terlatih yang memahami teknik wawancara tanpa menggiring opini responden',
      'Kerahasiaan data riset dan formula produk dijamin penuh lewat perjanjian hukum (NDA)'
    ],
    workflowTitle: 'Tahapan Pengumpulan dan Analisis Data Jasa Riset Pasar',
    workflow: [
      {
        step: '01',
        title: 'Perumusan Sasaran & Kuesioner',
        desc: 'Menentukan hipotesis riset, menyusun kuesioner, dan menetapkan kriteria demografi responden yang dituju.'
      },
      {
        step: '02',
        title: 'Pengumpulan Data di Lapangan',
        desc: 'Enumerator menyebar ke titik-titik strategis untuk mewawancarai responden sesuai kuota sampling.'
      },
      {
        step: '03',
        title: 'Pembersihan & Validasi Data',
        desc: 'Tim analis melakukan cross-check data untuk memastikan seluruh kuesioner terisi lengkap dan valid.'
      },
      {
        step: '04',
        title: 'Penyusunan Laporan & Rekomendasi',
        desc: 'Data diolah menjadi visualisasi wawasan bisnis dan diserahkan dalam bentuk presentasi eksekutif.'
      }
    ],
    targetIndustries: [
      'Manufaktur FMCG Makanan & Minuman',
      'Farmasi & Produk Perawatan Diri',
      'Industri Otomotif & Suku Cadang',
      'Pengembang Perumahan & Properti',
      'Perbankan, Asuransi & Fintech'
    ],
        documentation: [
      {
        type: 'image',
        src: '/riset-pasar/jasa-riset-pasar-1.webp',
        title: 'Wawancara Langsung Konsumen Lapangan',
        caption: 'Pendekatan personal surveyor untuk menggali preferensi merek dan persepsi produk.'
      },
      {
        type: 'image',
        src: '/riset-pasar/jasa-riset-pasar-2.webp',
        title: 'Pencatatan Data Responden Terverifikasi',
        caption: 'Survei tatap muka dengan target profil demografi yang telah dikurasi ketat.'
      },
      {
        type: 'image',
        src: '/riset-pasar/jasa-riset-pasar-3.webp',
        title: 'Uji Respon & Preferensi Produk Baru',
        caption: 'Pengambilan sampel reaksi pembeli terhadap rasa, kemasan, dan harga di area komersial.'
      },
      {
        type: 'image',
        src: '/riset-pasar/jasa-riset-pasar-4.webp',
        title: 'Survei Lapangan di Titik Keramaian',
        caption: 'Pengumpulan opini responden pada lokasi strategis seperti sentra niaga dan pasar retail.'
      },
      {
        type: 'image',
        src: '/riset-pasar/jasa-riset-pasar-5.webp',
        title: 'Validasi Data & Kontrol Kualitas Riset',
        caption: 'Pemeriksaan integritas jawaban responden sebelum diproses ke tabulasi analitik.'
      }
    ],
    faqs: [
      {
        question: 'Mengapa riset lapangan tatap muka lebih unggul dibanding survei online mandiri?',
        answer: 'Survei lapangan tatap muka memastikan identitas responden 100% riil sesuai kriteria demografi, memungkinkan demonstrasi produk secara langsung, serta menghasilkan tanggapan kualitatif yang jauh lebih mendalam.'
      },
      {
        question: 'Berapa lama waktu pengerjaan proyek Jasa Riset Pasar?',
        answer: 'Waktu pengerjaan umumnya memakan waktu antara 2 hingga 4 minggu kerja, tergantung pada jumlah target sampel responden dan sebaran wilayah kota yang diteliti.'
      },
      {
        question: 'Apakah laporan akhir menyertakan saran aksi bisnis yang aplikatif?',
        answer: 'Ya, laporan akhir kami tidak sekadar menyajikan angka mentah, melainkan kesimpulan komprehensif dan rekomendasi langkah taktis yang siap diterapkan oleh manajemen Anda.'
      }
    ]
  },
  {
    slug: 'jasa-mystery-shopper',
    keyword: 'Jasa Mystery Shopper',
    category: 'offline',
    categoryLabel: 'Audit & Kualitas',
    title: 'Jasa Mystery Shopper',
    metaTitle: 'Jasa Mystery Shopper & Audit Layanan Cabang',
    metaDescription: 'Audit standar pelayanan outlet Anda dengan Jasa Mystery Shopper PT Prospera Talenta. Evaluasi kepatuhan SOP, kasir, dan keramahan staf secara objektif.',
    tagline: 'Inspeksi rahasia standar pelayanan, integritas kasir, dan kepatuhan SOP gerai Anda melalui auditor independen.',
    description: 'Layanan Jasa Mystery Shopper terpercaya untuk menguji kepatuhan SOP, kejujuran transaksi kasir, dan keramahan pelayanan staf di cabang Anda.',
    intro: 'Ingin mengetahui bagaimana staf di cabang bisnis Anda melayani pelanggan saat manajemen pusat tidak ada di tempat? Melalui layanan Jasa Mystery Shopper dari PT Prospera Talenta, Anda mendapatkan evaluasi independen dan objektif terkait standar pelayanan, keramahan karyawan, kejujuran transaksi kasir, hingga kebersihan outlet secara nyata.',
    whyTitle: 'Pentingnya Audit Rutin Menggunakan Jasa Mystery Shopper',
    whyDescription: 'Penurunan omzet sebuah cabang sering kali bukan disebabkan oleh produk yang buruk, melainkan oleh pengalaman pelayanan yang mengecewakan pelanggan. Dengan demikian, Jasa Mystery Shopper menjadi instrumen esensial untuk mengidentifikasi celah operasional sebelum merusak citra merek Anda.',
    whyPoints: [
      {
        title: 'Penilaian Murni Tanpa Rekayasa',
        desc: 'Staf bertugas tanpa menyadari sedang dinilai, sehingga perilaku pelayanan yang terekam adalah kondisi sehari-hari yang sesungguhnya.'
      },
      {
        title: 'Pencegahan Kebocoran Kasir',
        desc: 'Mendeteksi potensi kecurangan transaksi, nota yang tidak dicetak, atau manipulasi diskon promo oleh oknum staf.'
      },
      {
        title: 'Standarisasi Kualitas Cabang',
        desc: 'Menjaga agar seluruh gerai waralaba atau cabang multi-kota Anda memberikan standar keramahan yang seragam.'
      }
    ],
    deliverablesTitle: 'Checklist dan Parameter Penilaian Jasa Mystery Shopper',
    deliverables: [
      'Penyusunan lembar penilaian audit (evaluation scorecard) bersama tim operasional klien',
      'Kunjungan rahasia berkala ke gerai-gerai sasaran sesuai skenario yang telah dirancang',
      'Pengujian skenario transaksi belanja, penukaran voucher, hingga simulasi komplain pelanggan',
      'Pengumpulan bukti rahasia berupa foto kondisi gerai, struk transaksi, dan rekaman audio percakapan',
      'Laporan komprehensif berisi skor persentase kepatuhan SOP per cabang serta dokumentasi temuan'
    ],
    benefitsTitle: 'Mengapa Memilih Jasa Mystery Shopper PT Prospera Talenta?',
    benefits: [
      'Auditor terlatih yang memahami etika pengamatan objektif dan bersikap senatural mungkin',
      'Jangkauan audit ke berbagai kota besar guna memudahkan pemantauan cabang luar daerah',
      'Format laporan terstruktur yang memudahkan manajemen mengambil tindakan perbaikan cepat',
      'Dapat dikombinasikan dengan benchmark audit ke gerai kompetitor terdekat'
    ],
    workflowTitle: 'Tahapan Pelaksanaan Kunjungan Rahasia Mystery Shopper',
    workflow: [
      {
        step: '01',
        title: 'Penyusunan Parameter & Skenario',
        desc: 'Menetapkan poin-poin penilaian krusial, seperti sambutan staf, kecepatan pelayanan, dan kebersihan.'
      },
      {
        step: '02',
        title: 'Penugasan Auditor Rahasia',
        desc: 'Auditor mempelajari skenario belanja tanpa diketahui oleh staf toko yang bertugas.'
      },
      {
        step: '03',
        title: 'Kunjungan & Pengumpulan Bukti',
        desc: 'Auditor bertransaksi di outlet, mengamati detail layanan, dan mengamankan bukti pendukung.'
      },
      {
        step: '04',
        title: 'Penyerahan Laporan Audit',
        desc: 'Laporan skor evaluasi dan foto temuan diserahkan kepada manajemen pusat dalam format digital.'
      }
    ],
    targetIndustries: [
      'Restoran, Kafe & Waralaba Makanan (F&B)',
      'Supermarket & Ritel Modern',
      'Klinik Kesehatan & Kecantikan',
      'Showroom Dealer & Bengkel Resmi Otomotif',
      'Perbankan & Lembaga Keuangan'
    ],
        documentation: [
      {
        type: 'image',
        src: '/mystery-shopper/jasa-mystery-shopper-1.webp',
        title: 'Audit Fasilitas & Kebersihan Gerai',
        caption: 'Pemeriksaan standar visual, kerapian rak, dan kenyamanan outlet ritel.'
      },
      {
        type: 'image',
        src: '/mystery-shopper/jasa-mystery-shopper-2.webp',
        title: 'Evaluasi Keramahan & Greeting Staff',
        caption: 'Uji kepatuhan greeting, senyum, dan etika komunikasi frontliner terhadap pembeli.'
      },
      {
        type: 'image',
        src: '/mystery-shopper/jasa-mystery-shopper-3.webp',
        title: 'Penilaian Pengetahuan Produk Pramuniaga',
        caption: 'Evaluasi kemampuan staf toko dalam menjelaskan spesifikasi dan keunggulan barang.'
      },
      {
        type: 'image',
        src: '/mystery-shopper/jasa-mystery-shopper-4.webp',
        title: 'Audit Kecepatan Pelayanan di Kasir',
        caption: 'Pencatatan waktu tunggu antrean transaksi dan ketepatan penyerahan struk belanja.'
      },
      {
        type: 'image',
        src: '/mystery-shopper/jasa-mystery-shopper-5.webp',
        title: 'Dokumentasi Kondisi Titik Display',
        caption: 'Verifikasi penataan produk dan materi promosi sesuai panduan merchandising pusat.'
      },
      {
        type: 'image',
        src: '/mystery-shopper/jasa-mystery-shopper-6.webp',
        title: 'Penyusunan Form Checklist Objektif',
        caption: 'Rekapitulasi scoring kepatuhan SOP cabang untuk laporan evaluasi manajemen.'
      }
    ],
    faqs: [
      {
        question: 'Apa fungsi utama Jasa Mystery Shopper bagi operasional bisnis?',
        answer: 'Fungsi utamanya adalah menguji apakah standar prosedur operasional (SOP), keramahan staf, kejujuran transaksi kasir, dan kebersihan cabang benar-benar dijalankan secara konsisten oleh karyawan di lapangan.'
      },
      {
        question: 'Bagaimana auditor menjaga agar identitasnya tidak dicurigai oleh karyawan toko?',
        answer: 'Auditor kami dibekali pelatihan perilaku konsumen alami, mengenakan pakaian santai sesuai profil pelanggan reguler, dan berbelanja secara wajar sesuai instruksi skenario.'
      },
      {
        question: 'Kapan laporan hasil kunjungan mystery shopper diserahkan kepada klien?',
        answer: 'Laporan digital lengkap disertai bukti struk belanja dan foto pendukung diserahkan paling lambat 2x24 jam setelah kunjungan selesai dilakukan.'
      }
    ]
  },
  {
    slug: 'jasa-spg-usher',
    keyword: 'Jasa SPG Usher',
    category: 'event',
    categoryLabel: 'Event & Promosi',
    title: 'Jasa SPG Usher',
    metaTitle: 'Jasa SPG Usher Profesional Event & Pameran',
    metaDescription: 'Butuh Jasa SPG Usher profesional untuk event, pameran, dan mall? PT Prospera Talenta sediakan talenta berpenampilan menarik, komunikatif, dan terlatih.',
    tagline: 'Penyediaan Sales Promotion Girl dan Usher representatif, anggun, komunikatif, dan berorientasi penjualan untuk pameran dan event korporat.',
    description: 'Penyedia Jasa SPG Usher profesional berpenampilan menarik dan komunikatif untuk pameran, peluncuran produk, mall activation, dan resepsi VIP.',
    intro: 'Keberhasilan memikat pengunjung dalam pameran dagang atau peluncuran produk sangat ditentukan oleh daya tarik garda terdepan booth Anda. PT Prospera Talenta menyediakan Jasa SPG Usher profesional dengan penampilan menarik, etika kerja tinggi, dan kemampuan komunikasi persuasif untuk merepresentasikan merek Anda secara berkelas.',
    whyTitle: 'Mengapa Memilih Jasa SPG Usher dari PT Prospera Talenta?',
    whyDescription: 'Merekrut SPG secara mandiri sering kali memicu risiko keterlambatan, pembatalan mendadak, atau staf yang tidak memahami produk. Oleh sebab itu, menggunakan Jasa SPG Usher profesional memberikan jaminan keandalan, kesiapan talenta cadangan, serta supervisi langsung di lokasi acara.',
    whyPoints: [
      {
        title: 'Penampilan Prima & Berkelas',
        desc: 'Talenta terkurasi sesuai standar tinggi badan, kerapian visual, dan dresscode yang merefleksikan citra premium brand Anda.'
      },
      {
        title: 'Komunikasi Persuasif',
        desc: 'Bukan sekadar membagikan brosur, talenta kami terlatih menyapa ramah dan mengarahkan pengunjung menuju meja transaksi.'
      },
      {
        title: 'Supervisi Penuh di Lokasi',
        desc: 'Setiap penugasan didampingi Team Leader yang bertanggung jawab atas absensi, kerapian booth, dan pencapaian target.'
      }
    ],
    deliverablesTitle: 'Klasifikasi dan Peran Tenaga Jasa SPG Usher Kami',
    deliverables: [
      'Penyediaan katalog foto dan video profil kandidat terverifikasi untuk diseleksi langsung oleh klien',
      'Pelaksanaan sesi briefing pemahaman materi produk (product knowledge) dan SOP pelayanan',
      'Pengawasan presensi dan kedisiplinan shift oleh Supervisor lapangan yang berdedikasi',
      'Penyambutan tamu undangan VIP, pembagian suvenir pameran, dan pemanduan registrasi pengunjung',
      'Rekapitulasi harian mengenai jumlah interaksi prospek, sampling produk, dan hasil penjualan'
    ],
    benefitsTitle: 'Keunggulan Layanan Jasa SPG Usher Terkelola',
    benefits: [
      'Akses ke database lebih dari 38.000 talenta aktif di kota-kota besar di Indonesia',
      'Jaminan penyediaan talenta cadangan (standby replacement) jika terjadi situasi darurat',
      'Durasi kontrak fleksibel mulai dari event harian akhir pekan hingga penugasan bulanan',
      'Kepatuhan hukum formal dengan perjanjian kerjasama legal dan penagihan invoice perusahaan'
    ],
    workflowTitle: 'Sistem Seleksi dan Pengawasan Jasa SPG Usher',
    workflow: [
      {
        step: '01',
        title: 'Kebutuhan Kriteria & Jadwal',
        desc: 'Klien menentukan spesifikasi kriteria fisik, kemampuan bahasa asing, dan tanggal event.'
      },
      {
        step: '02',
        title: 'Kurasi & Seleksi Portofolio',
        desc: 'Kami menyajikan katalog kompro kandidat terbaik untuk dipilih atau diajak sesi casting.'
      },
      {
        step: '03',
        title: 'Briefing SOP & Pelatihan',
        desc: 'Talenta terpilih mengikuti sesi briefing mengenai detail produk dan etika booth sebelum acara.'
      },
      {
        step: '04',
        title: 'Penugasan & Pengawasan Lapangan',
        desc: 'Talenta bertugas di lokasi didampingi Team Leader untuk memastikan kelancaran pameran.'
      }
    ],
    targetIndustries: [
      'Pameran Otomotif & Properti',
      'Industri Elektronik & Gadget',
      'Kosmetik, Skincare & Fashion',
      'Perbankan, Asuransi & Investasi',
      'Konser Musik, Expo & Seminar Korporat'
    ],
        documentation: [
      {
        type: 'image',
        src: '/spg/spg-event-1-fix.jpg',
        title: 'SPG Booth Pameran B2B & Konsumen',
        caption: 'Talenta SPG profesional bertugas di area booth pameran dan expo komersial.'
      },
      {
        type: 'image',
        src: '/spg/spg-event-2-fix.jpg',
        title: 'Usher Registrasi Acara Perusahaan',
        caption: 'Penyambutan tamu undangan formal, protokol VIP, dan pendataan registrasi.'
      },
      {
        type: 'image',
        src: '/spg/spg-event-3-fix.jpg',
        title: 'SPG Edukasi Produk & Sampling',
        caption: 'Demonstrasi keunggulan produk dan pembagian sampel langsung ke calon pembeli.'
      },
      {
        type: 'image',
        src: '/spg/spg-event-4-fix.jpg',
        title: 'Tim SPG Pameran & Aktivasi Mal',
        caption: 'Aktivasi gerai di pusat perbelanjaan dengan standar penampilan rapi dan prima.'
      },
      {
        type: 'image',
        src: '/spg/spg-event-5-fix.jpg',
        title: 'SPG Launching Produk & Roadshow',
        caption: 'Mendukung momentum peluncuran produk baru dengan daya tarik komunikasi persuasif.'
      },
      {
        type: 'image',
        src: '/spg/spg-event-6-fix.jpg',
        title: 'Penjualan Langsung di Stand Event',
        caption: 'Mendorong pencapaian target penjualan on-the-spot selama kegiatan berlangsung.'
      },
      {
        type: 'image',
        src: '/spg/spg-event-7-fix.jpg',
        title: 'Brand Ambassador Festival & Konser',
        caption: 'Menjaga citra brand tetap atraktif di tengah keramaian pengunjung event hiburan.'
      },
      {
        type: 'image',
        src: '/spg/spg-event-9-fix.jpg',
        title: 'Usher Gathering & Gala Dinner',
        caption: 'Pendampingan acara formal korporasi dengan keramahan dan etika profesional tinggi.'
      }
    ],
    faqs: [
      {
        question: 'Apa perbedaan antara SPG Event dan Usher?',
        answer: 'SPG Event berfokus aktif menawarkan produk, membagikan brosur atau sampling, dan mendorong penjualan di booth. Sementara Usher berfokus pada penyambutan tamu kehormatan, pemanduan kursi VIP, dan penyerahan penghargaan pada seremoni formal.'
      },
      {
        question: 'Apakah klien boleh memilih talenta dari foto kompro sebelum penugasan?',
        answer: 'Tentu saja. Kami selalu mengirimkan lembar kompro (composite card) foto dan portofolio kandidat yang lolos verifikasi awal untuk Anda pilih sesuai preferensi brand.'
      },
      {
        question: 'Bagaimana jika ada SPG yang berhalangan hadir saat hari event?',
        answer: 'Kami selalu menyiapkan talenta pengganti berstandar sebanding yang siap dimobilisasi dalam waktu singkat agar booth Anda tetap beroperasi maksimal.'
      }
    ]
  },
  {
    slug: 'jasa-sebar-kuesioner',
    keyword: 'Jasa Sebar Kuesioner',
    category: 'crowd',
    categoryLabel: 'Survei & Crowd',
    title: 'Jasa Sebar Kuesioner',
    metaTitle: 'Jasa Sebar Kuesioner Cepat & Responden Valid',
    metaDescription: 'Kumpulkan data responden akurat dengan Jasa Sebar Kuesioner PT Prospera Talenta. Jangkau ratusan hingga ribuan sampel valid tanpa bot di berbagai kota.',
    tagline: 'Penyebaran survei dan pengumpulan data responden lapangan secara cepat, terverifikasi, dan bebas data palsu.',
    description: 'Layanan Jasa Sebar Kuesioner untuk mengumpulkan responden nyata secara cepat dan akurat untuk riset akademis, survei kepuasan, maupun uji pasar.',
    intro: 'Membutuhkan ratusan atau ribuan data responden dalam waktu singkat untuk riset pasar, survei kepuasan pelanggan, atau penelitian akademis? Layanan Jasa Sebar Kuesioner dari PT Prospera Talenta hadir untuk menyelesaikan kendala pengumpulan data Anda. Tim enumerator kami menyebarkan kuesioner Anda langsung ke responden nyata yang sesuai dengan kriteria demografi sasaran.',
    whyTitle: 'Tantangan Pengumpulan Data dan Solusi Jasa Sebar Kuesioner',
    whyDescription: 'Menyebarkan kuesioner secara mandiri sering kali memakan waktu berminggu-minggu dan rentan diisi oleh akun fiktif atau bot. Oleh karena itu, menggunakan Jasa Sebar Kuesioner menjamin data yang Anda kumpulkan berasal dari manusia asli dengan profil demografi yang dapat diverifikasi.',
    whyPoints: [
      {
        title: 'Bebas Responden Fiktif',
        desc: 'Data diambil langsung secara tatap muka atau komunitas terverifikasi, sehingga terbebas dari manipulasi bot.'
      },
      {
        title: 'Target Demografi Presisi',
        desc: 'Menyasar profil usia, tingkat penghasilan, profesi, dan domisili kota yang spesifik sesuai kebutuhan studi Anda.'
      },
      {
        title: 'Kecepatan Pengumpulan Data',
        desc: 'Ratusan hingga ribuan kuesioner dapat terselesaikan dalam hitungan hari berkat jejaring enumerator yang luas.'
      }
    ],
    deliverablesTitle: 'Metode Penyebaran dalam Layanan Jasa Sebar Kuesioner',
    deliverables: [
      'Penyaringan responden (screening questions) ketat guna memastikan kesesuaian kriteria sampel',
      'Penyebaran kuesioner secara offline tatap muka langsung maupun koordinasi jejaring komunitas aktif',
      'Pemberian bingkisan atau insentif responden yang dikelola secara tertib dan transparan',
      'Verifikasi berkas jawaban untuk mengeliminasi respons yang tidak lengkap atau janggal',
      'Penyerahan tabulasi data mentah (raw data) dalam format Excel/SPSS disertai dokumentasi lapangan'
    ],
    benefitsTitle: 'Keuntungan Menggunakan Jasa Sebar Kuesioner PT Prospera Talenta',
    benefits: [
      'Jaringan enumerator lapangan di puluhan kota di Pulau Jawa, Sumatera, Bali, dan sekitarnya',
      'Kualitas data teruji melalui mekanisme spot-check nomor kontak dan dokumentasi foto penugasan',
      'Biaya per responden yang sangat terjangkau dibanding memasang iklan kuesioner berbayar sendiri',
      'Pemantauan progres jumlah pengisian kuota responden yang dilaporkan setiap hari'
    ],
    workflowTitle: 'Alur Eksekusi Pengumpulan Responden Jasa Sebar Kuesioner',
    workflow: [
      {
        step: '01',
        title: 'Pemeriksaan Kuesioner & Kuota',
        desc: 'Mempelajari susunan pertanyaan instrumen kuesioner dan menetapkan kuota profil responden yang ditargetkan.'
      },
      {
        step: '02',
        title: 'Briefing Enumerator Lapangan',
        desc: 'Enumerator memahami kriteria kualifikasi responden agar tidak terjadi kesalahan pengambilan data.'
      },
      {
        step: '03',
        title: 'Penyebaran & Wawancara Responden',
        desc: 'Tim mendatangi pusat keramaian, kampus, perkantoran, atau komunitas untuk mengisi kuesioner.'
      },
      {
        step: '04',
        title: 'Quality Control & Penyerahan Data',
        desc: 'Data yang terkumpul dicek keabsahannya, dirapikan ke dalam spreadsheet, dan diserahkan kepada klien.'
      }
    ],
    targetIndustries: [
      'Lembaga Konsultan Riset & Pemasaran',
      'Peneliti Akademik, Dosen & Mahasiswa',
      'Startup Digital & Pengembang Aplikasi',
      'Perusahaan FMCG & Ritel Konsumen',
      'Instansi Publik & Kebijakan Sosial'
    ],
        documentation: [
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner.webp',
        title: 'Pendampingan Pengisian Kuesioner',
        caption: 'Surveyor mendampingi responden mengisi instrumen kuesioner secara objektif.'
      },
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner-2.webp',
        title: 'Screening Kriteria Target Responden',
        caption: 'Memastikan responden memenuhi profil usia, profesi, dan kebiasaan belanja yang dicari.'
      },
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner-3.webp',
        title: 'Penjaringan Responden di Area Publik',
        caption: 'Penyebaran survei di pusat perbelanjaan, taman publik, dan pusat kegiatan masyarakat.'
      },
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner-4.webp',
        title: 'Survei Form Digital & Cetak',
        caption: 'Fleksibilitas metode input data real-time via smartphone/tablet maupun lembar fisik.'
      },
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner-5.webp',
        title: 'Wawancara Survei Tatap Muka',
        caption: 'Eksplorasi jawaban kualitatif responden untuk melengkapi data angka statistik.'
      },
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner-6.webp',
        title: 'Penyerahan Apresiasi & Souvenir',
        caption: 'Pemberian merchandise apresiasi kepada responden yang telah mengisi kuesioner lengkap.'
      },
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner-7.webp',
        title: 'Penyisiran Titik Responden Multi-Area',
        caption: 'Pergerakan tim surveyor menjangkau berbagai titik target secara terorganisir.'
      },
      {
        type: 'image',
        src: '/sebar-kuesioner/jasa-sebar-kuesioner-8.webp',
        title: 'Rekapitulasi Data Responden Harian',
        caption: 'Penyusunan dataset jawaban kuesioner siap olah untuk kebutuhan riset klien.'
      }
    ],
    faqs: [
      {
        question: 'Mengapa harus menggunakan Jasa Sebar Kuesioner dibanding membagikan tautan mandiri di media sosial?',
        answer: 'Membagikan tautan sendiri sering kali menghasilkan tingkat pengisian yang rendah dan demografi yang bias. Melalui Jasa Sebar Kuesioner, enumerator kami mencari responden yang persis dengan kriteria Anda dan memandu pengisian hingga selesai.'
      },
      {
        question: 'Bagaimana cara memastikan data responden bukan hasil manipulasi atau fiktif?',
        answer: 'Kami menerapkan kontrol mutu ganda, antara lain dokumentasi foto penugasan, pencatatan kontak responden untuk pemeriksaan acak (spot-checking), serta penyaringan waktu durasi pengisian.'
      },
      {
        question: 'Apakah layanan ini melayani pengumpulan responden di luar wilayah Jabodetabek?',
        answer: 'Tentu. Enumerator kami tersebar di berbagai kota besar di Pulau Jawa, Sumatera, Kalimantan, Sulawesi, hingga Bali.'
      }
    ]
  }
];
