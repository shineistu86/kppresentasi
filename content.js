/* Seluruh isi materi presentasi. Format teks: **tebal**, baris diawali "- " menjadi butir daftar. */
window.CONTENT = {
  story: [
    "BAPENDA punya **50.000 gambar batas tanah**, tetapi masih dalam bentuk **kode komputer** (WKB).",
    "Saya **menerjemahkan** kodenya, **merapikan** yang rusak, lalu **mengukur** setiap tanah: seberapa luas dan seberapa rapi bentuknya.",
    "Tanah-tanah itu lalu saya **kelompokkan otomatis** dengan K-Means. Hasilnya **2 kelompok**: yang **rapi-kotak** (82,5%) dan yang **panjang/ribet** (17,5%).",
    "Terakhir, semuanya saya tampilkan di **peta web interaktif**, supaya pegawai BAPENDA tinggal klik."
  ],
  storyLimit: "Kelompok ini **bukan vonis**. Ini hanya **tanda awal** untuk membantu memilih tanah mana yang perlu dicek lebih dulu.",

  pipeline: [
    { n: "50.000", t: "polygon dibaca" },
    { n: "19", t: "diperbaiki" },
    { n: "49.994", t: "berhasil diukur" },
    { n: "27 → 16 → 3", t: "fitur" },
    { n: "K = 2", t: "kelompok" },
    { n: "0,5903", t: "Silhouette" }
  ],

  glossary: [
    ["Polygon", "Garis batas satu bidang tanah di peta", "Gambar pagar tanah dilihat dari atas"],
    ["WKB", "Cara komputer menyimpan bentuk polygon dalam kode angka-huruf", "Resep masakan yang ditulis dalam sandi; harus diterjemahkan dulu"],
    ["Parsing", "Menerjemahkan kode WKB menjadi bentuk yang bisa dihitung", "Membaca sandi menjadi resep biasa"],
    ["Geometri tidak valid", "Garis batas yang rusak, misalnya memotong dirinya sendiri", "Pagar yang digambar seperti angka 8"],
    ["buffer(0)", "Perintah untuk merapikan garis yang rusak", "Penghapus + penggaris otomatis"],
    ["Reproyeksi UTM 48S", "Mengubah satuan peta dari derajat menjadi meter", "Bumi itu bulat; supaya bisa mengukur m², petanya harus \"diratakan\" dulu"],
    ["Morfometri", "Mengukur ukuran dan bentuk", "Mengukur tinggi badan dan bentuk wajah, tapi untuk tanah"],
    ["Deskriptor / fitur", "Satu jenis ukuran, misalnya luas atau jumlah sudut", "Satu kolom di rapor"],
    ["log_area", "Luas yang \"dipadatkan\" supaya tanah raksasa tidak mendominasi", "Seperti menghitung jumlah digit: 100 dan 100.000 jadi tidak terlalu jauh"],
    ["compactness", "Seberapa padat/bulat bentuk tanah (0–1)", "Lingkaran = 1, persegi ≈ 0,79, tanah panjang-tipis mendekati 0"],
    ["shape_index", "Seberapa ribet tepi tanah (mulai dari 1)", "Kebalikan compactness; makin besar makin berliku"],
    ["Elongation", "Seberapa memanjang", "Penggaris = memanjang, buku tulis = hampir kotak"],
    ["Solidity", "Seberapa \"penuh\" bentuknya, tanpa lekukan ke dalam", "Kalau tanah dibungkus karet gelang, berapa bagian yang benar-benar terisi"],
    ["Korelasi", "Dua fitur yang sebenarnya menceritakan hal yang sama", "Menanyakan umur dan tahun lahir; cukup salah satu"],
    ["Percentile clipping", "Memotong nilai yang terlalu ekstrem di ujung atas", "Memasang plafon; yang lebih tinggi dipotong setinggi plafon, datanya tetap ada"],
    ["RobustScaler", "Menyamakan skala semua fitur supaya adil", "Menukar rupiah, dolar, dan yen ke satu mata uang dulu sebelum dibandingkan"],
    ["PCA", "Merangkum banyak ukuran menjadi 2 sumbu utama untuk dilihat", "Memotret benda 3D dari sudut terbaik supaya jelas di foto 2D"],
    ["K-Means", "Cara komputer mengelompokkan data yang mirip secara otomatis", "Menaruh 2 magnet; tiap tanah menempel ke magnet terdekat; magnet digeser ke tengah anggotanya; ulangi sampai diam"],
    ["K", "Jumlah kelompok", "K = 2 berarti 2 kelompok"],
    ["Elbow (Inertia)", "Seberapa rapat isi kelompok; dipakai untuk melihat titik \"siku\"", "Makin banyak kelompok makin rapat, tapi suatu saat tambahannya tidak berarti lagi"],
    ["Silhouette", "Nilai −1 sampai 1: seberapa \"betah\" anggota di kelompoknya", "Murid yang duduk di kelas yang tepat; 0,59 = cukup baik"],
    ["CHI", "Makin tinggi makin bagus", "Jarak antarkelompok dibanding kerapatan di dalam kelompok"],
    ["DBI", "Makin rendah makin bagus", "Seberapa mirip kelompok satu dengan yang lain (harusnya tidak mirip)"],
    ["ARI", "Seberapa sama dua hasil pengelompokan (1 = identik)", "Mengocok undian 5 kali, hasil kelompoknya tetap sama"],
    ["Feature ablation", "Mencoba melepas sebagian fitur untuk melihat pengaruhnya", "Masak tanpa garam untuk tahu seberapa penting garam"],
    ["K-Medoids", "Mirip K-Means, tetapi pusat kelompok harus data asli", "Ketua kelas harus murid sungguhan, bukan \"murid rata-rata\" khayalan"],
    ["JCR", "Persentase pasangan tanah bertetangga yang satu kelompok", "Kalau rumah sebelah mirip, berarti bentuk tanah cenderung berkumpul"],
    ["KNN / Queen", "Cara menentukan siapa \"tetangga\"", "KNN = 2 tanah terdekat; Queen = yang batasnya bersentuhan, walau hanya ujung sudut"],
    ["GeoJSON", "Format file peta yang bisa dibaca website", "File \"peta siap pakai\" untuk web"],
    ["OpenLayers", "Alat (library) untuk membuat peta di website", "Seperti Google Maps versi rakit sendiri"],
    ["Web Worker", "Asisten di belakang layar yang memuat data besar", "Pelayan dapur memasak supaya pelayan depan tetap bisa melayani tamu"],
    ["Median", "Nilai tengah setelah diurutkan", "Dari 5 orang yang diurutkan tingginya, ambil orang ke-3"],
    ["Rata-rata (mean)", "Jumlah semua dibagi banyaknya", "Gampang \"ketarik\" kalau ada satu yang ekstrem"]
  ],

  slides: [
    {
      no: 1, title: "Cover", dur: "± 30 detik",
      baby: "\"Halo, ini saya, ini judul kerja praktik saya.\"",
      say: [
        "Assalamualaikum warahmatullahi wabarakatuh. Selamat pagi, Bapak/Ibu Dosen Penguji dan Dosen Pembimbing.",
        "Saya **Hisyam Eka Pramudita**, NIM **2307016**, dari Program Studi Sistem Informasi. Pada kesempatan ini saya akan memaparkan hasil kerja praktik saya yang berjudul **\"Perancangan Dashboard Analisis dan Profil Morfometri Polygon Bidang Tanah Berbasis K-Means Clustering di BAPENDA Garut\"**, dengan dosen pembimbing Bapak Heri Suhendar dan pembimbing lapangan Bapak R. Rahmat Fadli Sadikin."
      ],
      nums: [],
      bridge: "Saya mulai dari latar belakang masalahnya."
    },
    {
      no: 2, title: "Latar Belakang", dur: "± 1 menit",
      baby: "BAPENDA punya 50.000 gambar batas tanah, tapi masih berupa kode, belum diukur, dan terlalu banyak kalau dicek satu-satu.",
      say: [
        "BAPENDA Garut mengelola Pajak Bumi dan Bangunan melalui sistem SAPADA. Di dalamnya ada data **50.000 polygon** atau garis batas bidang tanah, dari **132 dari 442 desa/kelurahan**.",
        "Masalahnya ada tiga.",
        "- **Pertama**, bentuk tanahnya masih tersimpan sebagai **kode biner WKB**, jadi belum bisa langsung dianalisis.",
        "- **Kedua**, belum ada **ukuran numerik** tentang ukuran dan bentuk tiap bidang, misalnya seberapa luas dan seberapa rapi bentuknya.",
        "- **Ketiga**, kalau 50.000 bidang dicek **manual satu per satu**, jelas tidak efisien, dan belum ada **peta interaktif** untuk melihatnya."
      ],
      nums: ["50.000 polygon", "132 dari 442 desa"],
      bridge: "Dari tiga masalah itu, saya turunkan tiga tujuan."
    },
    {
      no: 3, title: "Tujuan dan Batasan", dur: "± 1 menit",
      baby: "Tiga tugas saya: terjemahkan dan ukur, kelompokkan, lalu tampilkan di peta. Hasilnya cuma tanda awal, bukan keputusan.",
      say: [
        "Tujuannya ada tiga, dan setiap tujuan menjawab satu masalah tadi.",
        "- **Satu**, membaca dan memvalidasi 50.000 polygon, mengubahnya ke satuan meter, lalu mengukur **27 deskriptor** bentuk.",
        "- **Dua**, mengelompokkan polygon itu dengan **K-Means** berdasarkan ukuran dan bentuk, lalu menguji apakah hasilnya stabil.",
        "- **Tiga**, menampilkan hasilnya di **dashboard peta web** berbasis OpenLayers.",
        "Ruang lingkupnya: penggunanya Bidang Teknologi dan Informasi BAPENDA, datanya 50.000 polygon di 132 desa, dan waktunya **1 Agustus sampai 4 September 2026**.",
        "Yang penting saya garis bawahi ada di kotak merah: hasil pengelompokan ini hanya **penanda awal berdasarkan bentuk geometri**. Hasil ini **bukan** penentu jenis lahan, fungsi bangunan, nilai pajak, atau alat pendeteksi bangunan yang tidak terdaftar."
      ],
      nums: ["27 deskriptor", "K diuji 2–10", "1 Agu – 4 Sep 2026"],
      bridge: "Pekerjaan ini saya lakukan di BAPENDA Garut, berikut gambaran instansinya."
    },
    {
      no: 4, title: "Gambaran Instansi", dur: "± 45 detik",
      baby: "Saya kerja di kantor pajak daerah Garut, di bagian IT.",
      say: [
        "Kerja praktik saya laksanakan di **BAPENDA Kabupaten Garut**, Jalan Otista Nomor 278. BAPENDA adalah unsur pelaksana pemerintah daerah di bidang **pendapatan daerah**, termasuk PBB-P2, berdasarkan UU Nomor 1 Tahun 2022, PMK 85 Tahun 2024, dan Perda Garut Nomor 8 Tahun 2023 yang diubah dengan Perda Nomor 1 Tahun 2025.",
        "Saya ditempatkan di **Bidang Teknologi dan Informasi**, tepatnya **Subbidang Pendataan, Penilaian, dan Sistem Informasi Perpajakan**, yang mengelola basis data termasuk SAPADA. Tugas saya mengolah data WKB, menghitung morfometri, menjalankan K-Means, dan membuat dashboard web.",
        "Kerja praktik berlangsung di bawah bimbingan Bapak R. Rahmat Fadli Sadikin, dengan **nilai rata-rata kinerja 95,1**."
      ],
      nums: ["Jl. Otista 278", "Nilai 95,1"],
      bridge: "Selanjutnya, bagaimana pekerjaan itu saya bagi selama lima minggu."
    },
    {
      no: 5, title: "Aktivitas dan Tools", dur: "± 1 menit",
      baby: "Kerjanya dibagi 4 tahap selama 5 minggu, dan tiap tahap ada tanda selesai (M1, M2, M3).",
      say: [
        "Pekerjaan saya bagi menjadi **4 tahap** dengan total **22 aktivitas** selama lima minggu.",
        "- **Tahap 1, persiapan data**, 3–11 Agustus: membaca 50.000 WKB, memperbaiki 19 polygon, dan mengubah proyeksinya. Ditutup dengan **M1, data siap**, pada 11 Agustus.",
        "- **Tahap 2, ekstraksi dan seleksi fitur**, 12–24 Agustus: menghitung 27 deskriptor, lalu menyaringnya menjadi **16 fitur untuk profiling** dan **3 fitur inti untuk K-Means**.",
        "- **Tahap 3, clustering dan evaluasi**, 25–31 Agustus, ditutup dengan **M2, validasi selesai**.",
        "- **Tahap 4, penyajian**, 1–4 September: peta, ekspor GeoJSON, dan web OpenLayers, ditutup dengan **M3, luaran selesai**.",
        "Tools-nya: **Python di Google Colab**, **GeoPandas** dan **Shapely** untuk data peta, **Scikit-Learn** untuk K-Means, **Libpysal** untuk analisis tetangga, dan **OpenLayers** untuk dashboard."
      ],
      nums: ["4 tahap", "22 aktivitas", "M1 11 Agu", "M2 31 Agu", "M3 4 Sep"],
      note: "Kalau ditanya \"kenapa minggu 3 hanya 4 hari?\": 17 Agustus libur.",
      bridge: "Sekarang saya jelaskan alur metodenya langkah demi langkah."
    },
    {
      no: 6, title: "Alur Metode", dur: "± 1,5 menit",
      baby: "Baca kode → rapikan → ukur 27 hal → pilih 3 ukuran terpenting → kelompokkan jadi 2 → cek hasilnya dan tampilkan di peta.",
      say: [
        "Alurnya ada enam langkah. Angka besar di setiap kartu adalah hasil utama langkah tersebut.",
        "- **Satu, parsing WKB.** Seluruh **50.000** objek berhasil dibaca, tidak ada yang gagal.",
        "- **Dua, validasi dan proyeksi.** Ada **19** polygon yang garisnya rusak, misalnya memotong dirinya sendiri. Semuanya saya perbaiki dengan buffer(0). Lalu datanya saya ubah ke UTM Zona 48S supaya satuannya meter.",
        "- **Tiga, ekstraksi fitur.** Saya hitung **27** ukuran bentuk. Ada 6 polygon yang gagal dihitung, jadi yang lanjut **49.994 polygon**, atau 99,988%.",
        "- **Empat, seleksi fitur.** Dari 27, saya buang yang isinya kembar atau tidak bervariasi, sehingga tersisa **16** untuk profiling. Dari situ dipilih **3 fitur inti** untuk K-Means, lalu skalanya disamakan dengan RobustScaler.",
        "- **Lima, K-Means** dengan **K = 2**, menghasilkan Cluster 0 sebesar 82,5% dan Cluster 1 sebesar 17,5%.",
        "- **Enam, evaluasi dan dashboard.** Silhouette-nya **0,5903**, kategori cukup baik, lalu hasilnya ditampilkan di peta web."
      ],
      nums: ["50.000", "19 diperbaiki", "49.994 (6 gagal)", "27 → 16 → 3", "K = 2", "0,5903"],
      bridge: "Pada slide berikutnya saya jelaskan apa saja tiga fitur inti itu dan kenapa K = 2."
    },
    {
      no: 7, title: "Cara Kerja Solusi", dur: "± 2 menit", key: true,
      baby: "Setiap tanah dinilai dengan 3 angka: seberapa luas, seberapa padat, dan seberapa ribet tepinya. Komputer mencoba 2 sampai 10 kelompok, dan 2 kelompok paling rapi.",
      say: [
        "Setiap bidang tanah saya wakili dengan **tiga fitur inti**.",
        "- **Pertama, log_area**, untuk **ukuran**. Luas tanah sangat timpang: kebanyakan kecil, tetapi ada beberapa yang sangat besar. Karena itu luasnya saya ubah dengan logaritma, ln(1 + luas). Kemencengan distribusi turun dari **48,85 menjadi 0,40**, sehingga tanah raksasa tidak mendominasi.",
        "- **Kedua, compactness**, untuk **kepadatan bentuk**. Nilainya 0 sampai 1. Lingkaran bernilai 1, persegi sekitar 0,79, dan makin kecil berarti makin memanjang atau berliku.",
        "- **Ketiga, shape_index**, untuk **kerumitan tepi**. Nilainya mulai dari 1, makin besar makin rumit. Secara rumus, shape_index adalah 1 dibagi akar compactness, jadi keduanya sama-sama mewakili bentuk.",
        "Di kiri bawah ada **PCA**. Kalau tiga fitur ini dirangkum, sumbu pertama, yaitu **bentuk**, menjelaskan **78,7%** variasi, dan sumbu kedua, yaitu **ukuran**, **20,5%**. Totalnya 99,2%.",
        "Di kanan, saya menguji **K dari 2 sampai 10**. Silhouette tertinggi ada di **K = 2**, yaitu **0,5903**, termasuk kategori **cukup baik**. Pada K = 3 nilainya langsung turun ke 0,4516.",
        "Di kotak paling bawah adalah **feature ablation**. Kalau hanya memakai fitur bentuk, Silhouette-nya memang lebih tinggi, 0,7070, tetapi ukuran tanah jadi diabaikan. Saya tetap memakai gabungan ketiganya agar ukuran ikut terwakili. Hasilnya, kelompok yang terbentuk hampir sama dengan versi bentuk saja, dengan ARI 0,97."
      ],
      nums: ["Skewness 48,85 → 0,40", "PC1 78,7%", "PC2 20,5%", "K = 2 → 0,5903", "K = 3 → 0,4516", "Shape 0,7070", "ARI 0,97"],
      note: "Bahasa bayi untuk ablation: \"Garamnya dilepas, rasanya hampir sama. Berarti yang paling menentukan rasa adalah bumbu lain, yaitu bentuk.\"",
      bridge: "Lalu seperti apa dua kelompok yang terbentuk? Ini hasilnya."
    },
    {
      no: 8, title: "Hasil: Dua Kelompok", dur: "± 2 menit", key: true, clusters: true,
      baby: "Kelompok 0 = tanah kotak-rapi, ada banyak (82,5%). Kelompok 1 = tanah panjang, sudutnya banyak, lebih ribet, dan sedikit lebih luas (17,5%).",
      say: [
        "K-Means membagi 49.994 polygon menjadi dua kelompok. Angka di tabel adalah **median**, atau nilai tengah, dari output notebook.",
        "**Cluster 0** adalah mayoritas: **41.244 bidang, 82,5%**. Bentuknya **kompak dan reguler**. Compactness-nya 0,73, solidity 1,00 yang berarti hampir tidak ada lekukan ke dalam, elongation 1,27 yang artinya hampir kotak, dan rata-rata hanya **5 titik sudut**.",
        "**Cluster 1** adalah minoritas: **8.750 bidang, 17,5%**. Bentuknya lebih **kompleks dan memanjang**. Compactness-nya 0,46, solidity 0,87, elongation 1,81, sekitar **10 titik sudut**, dan cenderung **lebih luas**, dengan median 285 m² dibanding 168 m².",
        "Di peta kiri, merah adalah Cluster 0 dan biru adalah Cluster 1.",
        "Empat kartu di bawah adalah bukti kualitasnya:",
        "- **Silhouette 0,5903**: pemisahannya cukup baik.",
        "- **ARI 0,9987**: saya jalankan ulang dengan 5 angka acak berbeda dan hasilnya hampir identik, jadi **stabil**.",
        "- **+0,072**: pada sampel 5.000 polygon, K-Means lebih baik daripada K-Medoids, 0,5901 dibanding 0,5177.",
        "- **JCR 0,7635**: sekitar 76% pasangan tanah bertetangga berada di kelompok yang sama. Jadi bentuk tanah cenderung berkumpul per kawasan. Angka ini **deskriptif**, bukan uji signifikansi."
      ],
      nums: ["C0 41.244 (82,5%)", "C1 8.750 (17,5%)", "Compactness 0,73 vs 0,46", "Titik sudut 5 vs 10", "Luas 168 vs 285 m²", "0,5903", "0,9987", "0,7635"],
      note: "Kenapa median, bukan rata-rata? Rata-rata gampang ketarik oleh satu tanah raksasa. Median adalah nilai tengah, jadi lebih jujur.",
      warn: "Kalau laporan belum direvisi: angka di laporan 4.1.3.7 (elongation C1 2,1, edge_cv 0,38/0,52, solidity 0,99) berbeda dengan slide. Jika ditanya, jawab: \"Di slide saya memakai median langsung dari output notebook. Di laporan ada beberapa angka yang tertukar dengan nilai rata-rata, misalnya elongation C1 2,1 itu rata-ratanya; mediannya 1,81. Sudah saya catat untuk revisi.\"",
      bridge: "Agar hasil ini bisa dipakai pegawai BAPENDA tanpa membuka kode, saya buatkan dashboard."
    },
    {
      no: 9, title: "Hasil: Dashboard Spasial", dur: "± 1 menit",
      baby: "Ini peta di website. Bisa pilih kelompok, pilih desa, ganti latar peta, dan klik tanah untuk melihat datanya.",
      say: [
        "Hasilnya saya sajikan di dashboard web berbasis **OpenLayers**, yang bisa dibuka di **kpdashboard.vercel.app** atau lewat QR code di kanan bawah.",
        "Fiturnya ada tiga, sesuai nomor di gambar.",
        "- **Satu**, filter cluster dan desa. Di dashboard, Cluster 0 berwarna **biru** dan Cluster 1 **oranye**, dan peta bisa difokuskan ke salah satu dari 132 desa.",
        "- **Dua**, pilihan peta dasar: OpenStreetMap atau citra satelit Esri, ditambah batas desa.",
        "- **Tiga**, panel atribut: kalau satu bidang diklik, muncul luas, compactness, solidity, jumlah titik sudut, dan atribut lainnya.",
        "Dari sisi arsitektur, datanya berupa **file GeoJSON statis** berisi 49.994 polygon, dimuat lewat **Web Worker** supaya halaman tidak macet. Dashboard ini **belum terhubung langsung** ke database SAPADA."
      ],
      nums: ["49.994 polygon", "kpdashboard.vercel.app"],
      note: "Kalau ditanya warnanya beda dengan slide 8: grafik notebook memakai merah/biru, dashboard memakai biru/oranye. Warnanya akan diseragamkan saat revisi notebook.",
      bridge: "Selama pengerjaan tentu ada kendala, berikut empat yang utama."
    },
    {
      no: 10, title: "Kendala dan Solusi", dur: "± 1 menit",
      baby: "Ada tanah yang garisnya rusak, ada yang gagal diukur, angkanya terlalu timpang, dan datanya cuma sebagian desa. Masing-masing ada solusinya.",
      say: [
        "Ada empat kendala utama.",
        "- **Satu**, **19 polygon** garisnya rusak, misalnya memotong dirinya sendiri. Solusinya buffer(0), dan hasilnya seluruh 50.000 objek lolos validasi.",
        "- **Dua**, **6 polygon** tidak bisa dihitung fiturnya secara lengkap. ID-nya saya catat lalu saya keluarkan, sehingga yang dianalisis 49.994 polygon, atau 99,988%.",
        "- **Tiga**, distribusi fitur **sangat miring**, contohnya shape_index dengan skewness 223,58, dan banyak fitur yang isinya kembar. Solusinya: log_area, pemotongan nilai ekstrem di persentil 99 dan 99,5, filter korelasi di atas 0,85, dan RobustScaler. Hasilnya 16 fitur untuk profiling dan 3 fitur inti untuk K-Means.",
        "- **Empat**, data **hanya mencakup 132 dari 442 desa**, dan file petanya besar. Solusinya, data dimuat lewat Web Worker, dan hasil analisis **tidak saya generalisasi** ke 310 desa lainnya."
      ],
      nums: ["19", "6", "99,988%", "Skewness 223,58", "310 desa belum tercakup"],
      bridge: "Dari semua itu, kesimpulan dan saran saya adalah sebagai berikut."
    },
    {
      no: 11, title: "Kesimpulan dan Saran", dur: "± 1,5 menit",
      baby: "Ketiga tugas berhasil. Saran: pakai Kelompok 1 sebagai daftar cek awal, tambah data desa lain, dan sambungkan ke sistem pajak.",
      say: [
        "Kesimpulannya, **ketiga tujuan tercapai**.",
        "- **Pertama**, 50.000 polygon berhasil divalidasi dan diproyeksikan, 27 deskriptor dihitung pada 49.994 polygon, lalu 3 fitur inti dipakai untuk K-Means.",
        "- **Kedua**, terbentuk **dua cluster yang stabil**: Cluster 0 yang kompak-reguler sebesar 82,5% dan Cluster 1 yang kompleks-memanjang sebesar 17,5%, dengan Silhouette 0,5903, ARI 0,9987, dan JCR 0,7635.",
        "- **Ketiga**, dashboard spasial web sudah **dipublikasikan** dan bisa diakses.",
        "Sarannya ada tiga.",
        "- **Satu**, Cluster 1 bisa dipakai sebagai **penanda awal** untuk memprioritaskan pemeriksaan data spasial. Bentuk yang memanjang belum tentu salah digitasi; bisa jadi memang karena kondisi geografis, misalnya lahan di perbukitan atau sepanjang sungai.",
        "- **Dua**, **lengkapi data** dari 310 desa yang belum tercakup.",
        "- **Tiga**, **integrasikan** hasil ini dengan atribut SAPADA seperti NJOP, ZNT, dan luas di SPPT, serta pindahkan penyimpanan dari file GeoJSON ke database **PostGIS**."
      ],
      nums: [],
      bridge: "Terakhir, berikut dokumentasi selama kerja praktik."
    },
    {
      no: 12, title: "Dokumentasi", dur: "± 30 detik",
      baby: "Ini bukti-bukti bahwa saya benar-benar mengerjakannya.",
      say: [
        "Ini dokumentasi hasil pekerjaan: tampilan dashboard, boxplot profil cluster, proyeksi PCA, grafik feature ablation, **berita acara 6 sesi bimbingan lapangan**, dan **lembar penilaian kinerja** dengan rata-rata 95,1.",
        "Luaran yang saya serahkan adalah notebook analisis, dataset CSV dan GeoJSON, serta dashboard web."
      ],
      nums: ["6 sesi bimbingan", "Nilai 95,1"],
      bridge: "Langsung ke slide penutup."
    },
    {
      no: 13, title: "Terima Kasih", dur: "± 15 detik",
      baby: "Selesai, terima kasih, silakan bertanya.",
      say: [
        "Demikian yang dapat saya sampaikan. Dashboard-nya bisa dicoba langsung melalui QR code ini. Terima kasih atas perhatian Bapak dan Ibu. Saya persilakan apabila ada pertanyaan."
      ],
      nums: [],
      note: "Setelah itu diam dan dengarkan. Jangan buru-buru pindah ke slide lampiran.",
      bridge: null
    },
    {
      no: 14, title: "Lampiran A – Alur Seleksi Fitur", dur: "Cadangan", backup: true,
      ask: "\"27 fitur jadi 3 itu bagaimana?\" / \"Fitur apa yang dibuang?\"",
      baby: "27 ukuran → buang 2 yang nilainya hampir selalu sama → buang 9 yang isinya kembar → tersisa 16. Dari 16 itu dipilih 1 ukuran luas dan 2 ukuran bentuk.",
      say: [
        "Ada dua jalur. Untuk profiling: dari 27 fitur, 2 dibuang karena nilainya hampir tidak bervariasi, yaitu largest_component_ratio dan component_count. Lalu 9 dibuang karena redundan: 8 karena korelasinya di atas 0,85, dan area karena sudah diwakili log_area. Tersisa **16 fitur**.",
        "Untuk K-Means dipilih **3 fitur inti**: satu untuk ukuran (log_area) dan dua untuk bentuk (compactness dan shape_index).",
        "Compactness dan shape_index sengaja dipertahankan walaupun korelasinya 0,978. Konsekuensinya, dimensi bentuk berbobot lebih besar daripada ukuran."
      ],
      nums: ["27 → 25 → 16 → 3", "|r| > 0,85", "|r| = 0,978"],
      bridge: null
    },
    {
      no: 15, title: "Lampiran B – Ablation & K-Medoids", dur: "Cadangan", backup: true,
      ask: "\"Kenapa tidak pakai Shape saja?\" / \"Kenapa K-Means, bukan K-Medoids?\"",
      baby: "Bentuk saja memang nilainya paling tinggi, tapi luasnya diabaikan. Gabungan dipilih supaya luas ikut dihitung, walaupun hasil kelompoknya hampir sama dengan bentuk saja. K-Means menang dari K-Medoids di semua metrik dan jauh lebih cepat.",
      say: [
        "Konfigurasi Shape memang memberi Silhouette tertinggi, **0,7070**, tetapi tidak memakai ukuran bidang. Combined dipilih karena tujuan profilnya mencakup ukuran dan bentuk.",
        "Jujurnya, partisi Combined hampir sama dengan Shape, **ARI 0,97**. Jadi pemisahan cluster terutama ditentukan oleh bentuk; log_area hanya sedikit menggeser batasnya.",
        "Untuk K-Medoids, pada sampel 5.000 K-Means lebih baik di ketiga metrik, lebih cepat (**0,04 vs 0,78 detik**), dan JCR Queen-nya lebih tinggi (**0,7588 vs 0,6331**).",
        "Catatan: K-Medoids dilatih dengan jarak Manhattan, sedangkan metriknya dihitung dengan jarak Euclidean, jadi perbandingannya sedikit menguntungkan K-Means."
      ],
      nums: ["Size 0,5778", "Shape 0,7070", "Combined 0,5903", "ARI Shape 0,9732", "0,04 vs 0,78 s"],
      bridge: null
    },
    {
      no: 16, title: "Lampiran C – Profil Cluster Lengkap", dur: "Cadangan", backup: true,
      ask: "\"Kenapa angkanya beda dengan rata-rata?\" / \"Datanya lengkap?\"",
      baby: "Ini angka lengkapnya, median dan rata-rata. Polanya sama saja: Kelompok 1 selalu kurang padat, lebih panjang, sudutnya lebih banyak, dan lebih luas.",
      say: [
        "Slide utama memakai **median** karena distribusinya miring ke kanan.",
        "Contohnya luas Cluster 0: rata-ratanya **344 m²**, tetapi mediannya **168 m²**, karena rata-rata tertarik oleh sebagian kecil bidang yang sangat luas.",
        "Baik dilihat dari median maupun rata-rata, arahnya sama: Cluster 1 kurang kompak, lebih memanjang, lebih banyak titik sudut, dan cenderung lebih luas."
      ],
      nums: ["Rata-rata luas C0 344 m²", "Median 168 m²"],
      bridge: null
    }
  ],

  faq: [
    ["Kenapa K = 2, bukan lebih?", "Karena dari K = 2 sampai 10, Silhouette tertinggi ada di K = 2, yaitu 0,5903, kategori cukup baik. Mulai K = 3, nilainya turun ke kategori lemah (di bawah 0,5)."],
    ["Silhouette 0,59 itu bagus atau tidak?", "Termasuk kategori reasonable atau cukup baik, yaitu rentang 0,51–0,70. Belum sempurna, karena bentuk tanah di dunia nyata memang bergradasi, tidak terpisah tegas."],
    ["Compactness dan shape_index berkorelasi 0,978, kenapa dipakai dua-duanya?", "Betul, secara rumus shape_index = 1/√compactness, jadi informasinya sangat mirip. Keduanya saya pertahankan sebagai wakil dimensi bentuk. Konsekuensinya, bentuk berbobot lebih besar daripada ukuran dalam K-Means. Ini saya akui sebagai keterbatasan, dan bisa diuji lagi dengan memakai salah satunya saja."],
    ["Kenapa tidak pakai konfigurasi Shape yang Silhouette-nya 0,7070?", "Tujuan saya membuat profil yang mencakup ukuran dan bentuk, bukan hanya mengejar angka tertinggi. Lagi pula, hasil kelompok Combined hampir sama dengan Shape (ARI 0,97), jadi kualitas pemisahannya tidak banyak berubah, sedangkan informasi luas tetap ikut."],
    ["Kenapa RobustScaler, bukan StandardScaler?", "Karena datanya banyak nilai ekstrem. StandardScaler memakai rata-rata yang mudah ketarik oleh nilai ekstrem; RobustScaler memakai median dan IQR yang lebih tahan."],
    ["Kenapa harus diubah ke UTM?", "Data aslinya dalam derajat lintang-bujur. Kalau luas dihitung langsung dari derajat, hasilnya tidak dalam m² dan bisa terdistorsi. UTM Zona 48S memakai satuan meter dan cocok untuk wilayah Garut."],
    ["Apakah Cluster 1 berarti datanya salah?", "Tidak. Cluster 1 hanya berarti bentuknya berbeda dari mayoritas. Bisa karena kondisi geografis, misalnya lahan di perbukitan atau tepi sungai, atau karena pola pembagian lahan. Hasil ini hanya penanda awal untuk memilih mana yang dicek lebih dulu."],
    ["JCR 0,76 artinya apa?", "Dari setiap 100 pasangan tanah yang bertetangga, sekitar 76 berada di kelompok yang sama. Artinya bentuk tanah cenderung mengumpul per kawasan. Tapi ini hanya deskriptif; saya tidak melakukan uji signifikansi statistik."],
    ["Kenapa Silhouette dihitung pakai sampel 5.000?", "Menghitung Silhouette pada 49.994 data sangat berat, karena harus membandingkan jarak setiap pasangan data. Jadi dipakai sampel acak 5.000 dengan seed tetap (42) supaya hasilnya bisa diulang. CHI dan DBI tetap dihitung pada seluruh data."],
    ["Apa itu ARI 0,9987?", "K-Means dimulai dari titik acak. Saya jalankan ulang dengan 5 seed berbeda (1, 10, 100, 2026, 999), lalu hasilnya dibandingkan dengan model utama. Rata-ratanya 0,9987, hampir identik. Jadi hasilnya tidak bergantung pada keberuntungan titik awal."],
    ["6 polygon yang gagal itu kenapa?", "Fungsi ekstraksi tidak menghasilkan fitur lengkap untuk 6 polygon itu, kemungkinan karena luas atau kelilingnya nol atau bentuknya bermasalah. ID-nya tercatat (95, 96, 404, 13907, 13909, 14130), dan saya keluarkan supaya semua data di model punya nilai lengkap."],
    ["Kenapa dashboard belum terhubung ke database SAPADA?", "Karena keterbatasan waktu dan akses selama KP, data diekspor ke GeoJSON statis. Itu sebabnya salah satu saran saya adalah pindah ke PostGIS supaya data bisa diperbarui otomatis."],
    ["Kenapa K-Means, bukan metode lain?", "K-Means cepat untuk data besar dan hasilnya mudah ditafsirkan. Saya juga sudah membandingkannya dengan K-Medoids: pada sampel 5.000, K-Means lebih baik di Silhouette, CHI, dan DBI, serta jauh lebih cepat (0,04 vs 0,78 detik)."],
    ["Apa manfaat nyata untuk BAPENDA?", "Pegawai bisa melihat persebaran bentuk tanah per desa di peta, lalu memakai Cluster 1 sebagai daftar prioritas pemeriksaan, tanpa harus mengecek 50.000 bidang satu per satu."],
    ["Kalau saya tidak tahu jawabannya?", "Jangan mengarang. Katakan: \"Terima kasih atas masukannya, Pak/Bu. Hal itu belum saya uji dalam kerja praktik ini, dan bisa menjadi pengembangan selanjutnya.\""]
  ],

  cheat: [
    ["Polygon awal", "50.000"],
    ["Desa tercakup", "132 / 442"],
    ["Diperbaiki buffer(0)", "19"],
    ["Gagal ekstraksi", "6"],
    ["Dianalisis", "49.994 (99,988%)"],
    ["Fitur", "27 → 16 → 3"],
    ["Fitur inti", "log_area · compactness · shape_index"],
    ["Skewness luas", "48,85 → 0,40"],
    ["PCA", "PC1 78,7% · PC2 20,5%"],
    ["K terbaik", "K = 2"],
    ["Silhouette", "0,5903"],
    ["CHI / DBI", "58.900,11 / 0,7180"],
    ["ARI multi-seed", "0,9987 ± 0,0015"],
    ["Cluster 0", "41.244 (82,5%)"],
    ["Cluster 1", "8.750 (17,5%)"],
    ["Median compactness", "0,73 vs 0,46"],
    ["Median titik sudut", "5 vs 10"],
    ["Median luas", "168 vs 285 m²"],
    ["Ablation", "Size 0,5778 · Shape 0,7070 · Combined 0,5903"],
    ["K-Means vs K-Medoids", "0,5901 vs 0,5177"],
    ["JCR", "KNN 0,7635 · Queen 0,7588"],
    ["Milestone", "M1 11 Agu · M2 31 Agu · M3 4 Sep"],
    ["Nilai kinerja", "95,1"]
  ],

  tips: [
    ["Latihan pakai jembatan", "Bagian yang paling sering membuat macet adalah perpindahan antarslide. Hafalkan kalimat jembatan di setiap slide."],
    ["Slide 7 dan 8 adalah inti", "Kalau waktunya mepet, slide 4, 10, dan 12 bisa dipersingkat, tapi jangan slide 7 dan 8."],
    ["Tunjuk layar", "Saat menyebut angka, tunjuk kartu atau tabelnya supaya penguji ikut melihat."],
    ["Ucapkan batasan dengan percaya diri", "Kalimat \"ini penanda awal, bukan penentu\" justru menunjukkan Anda paham."],
    ["Kalau grogi, pegang cerita 30 detik", "Semua slide hanyalah rincian dari cerita itu."],
    ["Siapkan dashboard di tab browser", "Berjaga-jaga kalau diminta demo. Uji koneksi internet ruang sidang lebih dulu."],
    ["Latihan dengan timer minimal 2 kali", "Targetnya 12–15 menit. Kalau lebih dari 15 menit, persingkat slide 4 dan 5."]
  ]
};
