// Informasi Tempat Tinggal dan Telepon
var columnInformasiTempatTinggal = [
  { key: "tipe", label: "Tipe" },
  { key: "alamat", label: "Alamat" },
  { key: "telepon", label: "Telepon" },
  { key: "kota_id.name", label: "Kota" },
  { key: "provinsi_id.name", label: "Provinsi" },
  { key: "negara_id.name", label: "Negara" },
  { key: "kode_pos", label: "Kode Pos" }
];

// Informasi Kontak Darurat
var columnInformasiKontakDarurat = [
  { key: "nama", label: "Nama" },
  { key: "hubungan", label: "Hubungan" },
  { key: "nomor_telepon_rumah", label: "Nomor Telepon Rumah" },
  { key: "nomor_telepon_lainnya", label: "Nomor Telepon Lainnya" },
  { key: "alamat", label: "Alamat" },

  // belum ada kolomnya
  { key: "--", label: "Kota/Kabupaten" },
  { key: "--", label: "Propinsi" },
  { key: "--", label: "Negara" },
  { key: "--", label: "Kode Pos" }
];

// Informasi Keluarga dan Tanggungan
var columnInformasiKeluargaTanggungan = [
  { key: "nama", label: "Nama" },
  { key: "hubungan", label: "Hubungan" },
  {
    label: "Tempat, Tanggal Lahir",
    combine: ["tempat_lahir", "tgl_lahir"], 
    types: ["string", "date"] 
  },
  { key: "status_ketergantungan", label: "Status Ketergantungan" },
  { key: "status", label: "Status" },
  { key: "pekerjaan", label: "Pekerjaan" },
];

// Informasi Relasi
var columnInformasiRelasi = [
  { key: "name", label: "Nama" },
  { key: "address", label: "Alamat" },
  { key: "telephone", label: "Telepon" },
  { key: "mobile_phone", label: "Ponsel" },
  { key: "email", label: "Email" },
  { key: "company_name", label: "Nama Perusahaan" },
  { key: "position", label: "Posisi" }
];

// Informasi Keahlian dan Minat (Berbahasa)
var columnInformasiKeahlianMinat = [
  { key: "deskripsi", label: "Deskripsi" },
  { key: "tingkat_baca", label: "Baca" },
  { key: "tingkat_menulis", label: "Menulis" },
  { key: "tingkat_mendengar", label: "Mendengar" },
  { key: "tingkat_bicara", label: "Bicara" }
];

// Pendidikan
var columnPendidikan = [
  { key: "jenjang_pendidikan", label: "Level" },
  { key: "universitas_id.name", label: "Nama" },
  { key: "subjurusan", label: "Subjurusan" },
  {
    label: "Periode",
    combine: ["tahun_mulai", "tahun_selesai"], 
    types: ["date", "date"],
    separator: " - "
  },
  { key: "kota_id.name", label: "Kota/Kabupaten" },
  { key: "kebangsaan_id.name", label: "Negara" },
  { key: "ipk", label: "IPK" },
  { key: "pendidikan_terakhir", label: "Pendidikan Terakhir" },
  { key: "pendidikan_diakui", label: "Pendidikan Diakui" },
];

// Perubahan Jabatan / Grade Sebelum HCIS (belum clear datanya)
var columnPerubahanJabatanSebelumHCIS = [
  { key: "--", label: "No" },
  { key: "--", label: "Nomor SK" },
  { key: "--", label: "TMT Jabatan" },
  { key: "--", label: "Keterangan SK" },
  { key: "--", label: "Golongan" },
  { key: "--", label: "Grade" },
  { key: "--", label: "Unit Kerja" },
  { key: "--", label: "Level Jabatan" },
];

// Pemberhentian sebelum HCIS (belum clear datanya)
var columnPemberhentianSebelumHCIS = [
  { key: "--", label: "No" },
  { key: "--", label: "NPK" },
  { key: "--", label: "Nomor SK" },
  { key: "--", label: "Tanggal Mulai" },
  { key: "--", label: "Tanggal Selesai" },
  { key: "--", label: "Keterangan" }
];

// Catatan Karir (belum clear datanya) rancu sama diatas
var columnCatatanKarir = [
  { key: "nomor_surat", label: "No. Surat" },
  { key: "tanggal_efektif", label: "TMT Masuk", type: "date" },
  { key: "grade_pegawai", label: "Grade" },
  { key: "golongan", label: "Golongan" },
  { key: "tipe_sk", label: "Tipe Perubahan Karir" },
  { key: "status_jabatan", label: "Status Jabatan" },
  { key: "level_jabatan", label: "Level Jabatan" },
  { key: "--", label: "Gaji Pokok" }, // belum ada
  { key: "posisi", label: "Posisi" },
  { key: "bidang", label: "Bidang / Group / Urusan" }, 
  { key: "--", label: "Unit Kerja" }, // belum ada
  { key: "status_pegawai", label: "Status Pegawai" },
  { key: "--", label: "Keterangan" }, // belum ada
];

// Catatan Penghargaan
var columnCatatanPenghargaan = [
  { key: "nomor_sk", label: "NO SK" },
  { key: "tanggal_mulai", label: "Tanggal Dari", type: "date" },
  { key: "tanggal_akhir", label: "Tanggal Sampai", type: "date"},
  { key: "--", label: "Jenis Penghargaan" }, // belum ada
  { key: "--", label: "Keterangan" } // belum ada
];

// Catatan Pelanggaran
var columnCatatanPelanggaran = [
  { key: "nomor_surat", label: "Nomor Surat" },
  { key: "--", label: "Tanggal SK" }, // belum ada
  { key: "tanggal_mulai", label: "Tanggal Mulai", type: "date" },
  { key: "tanggal_akhir", label: "Tanggal Berakhir", type: "date" },
  { key: "nama_pelanggaran", label: "Nama Pelanggaran" },
  { key: "--", label: "Periode Sanksi Pelanggaran" }, // belum ada
  { key: "--", label: "Unit Kerja" }, // belum ada
  { key: "--", label: "Keterangan" } // belum ada
];

// Informasi Asuransi
var columnInformasiAsuransi = [
  { key: "NO", label: "No." },
  { key: "nama", label: "Nama Agen Asuransi" },
  { key: "no_kpj", label: "No KPJ" },
  { key: "tgl_bergabung", label: "Tanggal Bergabung", type: "date" },
  { key: "tgl_selesai", label: "Tanggal Selesai", type: "date" }
];

// Informasi Rekening Bank
var columnInformasiRekeningBank = [
  { key: "NO", label: "No." },
  { key: "nama_bank", label: "Nama Bank" },
  { key: "cabang", label: "Cabang Bank" },
  { key: "nomor_rekening", label: "Rekening Bank" },
  { key: "nama_pemilik_rekening", label: "Nama Pemilik Rekening" },
  { key: "jenis_mata_uang", label: "Jenis Mata Uang" },
  { key: "jenis_simpanan", label: "Jenis Simpanan" }
];

// Ikatan Dinas (belum clear setupannya)
var columnIkatanDinas = [
  { key: "--", label: "NPK" },
  { key: "--", label: "Nama" },
  { key: "--", label: "Tanggal Mulai", type: "date" },
  { key: "--", label: "Tanggal Akhir", type: "date" },
  { key: "--", label: "Deskripsi" }
];

// Profil Psikologi
var columnProfilePsikologi = [
  { key: "NO", label: "No." },
  { key: "nama_tes", label: "Nama Tes" },
  { key: "tgl_tes", label: "Tanggal Tes" },
  { key: "penyelenggara", label: "Penyelenggara" },
  { key: "biaya", label: "Biaya Tes" },
  { key: "nilai", label: "Nilai Tes" },
  { key: "hasil", label: "Hasil Tes" },
];

// Informasi Kesehatan
var columnInformasiKesehatan = [];

// Informasi Kursus
var columnInformasiKursus = [
  { key: "NO", label: "No." },
  { key: "nama", label: "Nama Kursus" },
  { key: "institusi", label: "Institusi" },
  { key: "mulai_periode", label: "Periode Awal", type: "date" },
  { key: "selesai_periode", label: "Akhir Periode", type: "date" },
  { key: "kota_id.name", label: "Kota/Kabupaten" },
  { key: "sertifikasi", label: "Sertifikat"}
];

// Informasi Sertifikat
var columnInformasiSertifikat = [
  { key: "NO", label: "No." },
  { key: "nama", label: "Nama Sertifikasi" },
  { key: "penjelasan_sertifikasi", label: "Penjelasan Sertifikasi" },
  { key: "tanggal_sertifikat", label: "Tanggal Sertifikasi", type: "date" },
  { key: "batas_berlaku", label: "Batas Berlaku Sertifikasi", type: "date" }
];

// Catatan Pengalaman Kerja 
var columnCatatanPengalamanKerja = [
  { key: "nama", label: "Nama Perusahaan" },
  { key: "alamat", label: "Alamat" },
  {
    label: "Periode",
    combine: ["mulai_bekerja", "selesai_bekerja"], 
    types: ["date", "date"],
    separator: " - "
  },
  { key: "gaji", label: "Gaji Terakhir" }
];

// Informasi Aktivitas Organisasi 
var columnInformasiAktivasOrganisasi = [
  { key: "nama", label: "Nama Organisasi" },
  { key: "tipe_organisasi", label: "Tipe Organisasi" },
  {
    label: "Periode",
    combine: ["periode_awal", "periode_akhir"], 
    types: ["date", "date"],
    separator: " - "
  },
  { key: "jabatan", label: "Posisi" }
];

// Dokumen Yang Habis Masa Berlakunya (belum selesai get datanya)
var columnDocumentYangHabisMasaBerlaku = [
  { key: "--", label: "Nama" },
  { key: "--", label: "Nomor Dokumen" },
  { key: "--", label: "Tanggal Habis Masa Berlaku" },
];

// Informasi Lainnya
var columnInformasiLainnya = [
  { key: "--", label: "Informasi Beasiswa Perusahaa" },
  { key: "--", label: "Kekurangan / Kelemahan Yang Dimiliki" },
  { key: "--", label: "Waktu Senggang" },
  { key: "--", label: "Alasan Melamar" },
];

// Informasi Fasilitas
var columnInformasiFasilitas = [
  { key: "nama", label: "Nama Asset" },
  { key: "deskripsi", label: "Deskripsi Aset" },
  { key: "tgl_fasilitas", label: "Tanggal Terbit Aset", type: "date" },
  { key: "--", label: "Status Kepemilikan Aset" }, // belum ada
];

// Informasi Pelatihan
var columnInformasiPelatihan = [
  { key: "subyek", label: "Judul Pelatihan" },
  { key: "topik", label: "Topik" },
  {
    label: "Periode Pelatihan",
    combine: ["tgl_mulai", "tgl_selesai"], 
    types: ["date", "date"],
    separator: " - "
  },
  { key: "tipe_pelatihan", label: "Tipe Pelatihan" },
  { key: "penyelenggara", label: "Penyelenggara Pelatihan" },
  { key: "nomor_sertif", label: "Sertifikat" } 
];


TABLE_INFORMASI_TEMPAT_TINGGAL_DAN_TELEPON = generateTable(dataTable.informasiTempatTinggal, columnInformasiTempatTinggal);
TABLE_INFORMASI_KONTAK_DARURAT = generateTable(dataTable.informasiKontakDarurat, columnInformasiKontakDarurat);
TABLE_INFORMASI_KELUARGA_DAN_TANGGUNGAN = generateTable(dataTable.informasiKeluargaTanggungan, columnInformasiKeluargaTanggungan);
TABLE_INFORMASI_RELASI = generateTable(dataTable.informasiRelasi, columnInformasiRelasi);
TABLE_INFORMASI_KEAHLIAN_DAN_MINAT = generateTable(dataTable.informasiBahasa, columnInformasiKeahlianMinat);
TABLE_PENDIDIKAN = generateTable(dataTable.pendidikan, columnPendidikan);
TABLE_PERUBAHAN_JABATAN_GRADE_SEBELUM_HCIS = generateTable(dataTable.perubahanJabatanSebelumHCIS, columnPerubahanJabatanSebelumHCIS);
TABLE_PEMBERHENTIAN_SEBELUM_HCIS = generateTable(dataTable.pemberhentianSebelumHCIS, columnPemberhentianSebelumHCIS);
TABLE_CATATAN_PENGHARGAAN = generateTable(dataTable.catatanPenghargaan, columnCatatanPenghargaan);
TABLE_CATATAN_PELANGGARAN = generateTable(dataTable.catatanPelanggaran, columnCatatanPelanggaran);
TABLE_INFORMASI_ASURANSI = generateTable(dataTable.informasiAsuransi, columnInformasiAsuransi);
TABLE_INFORMASI_REKENING_BANK = generateTable(dataTable.informasiRekeningBank, columnInformasiRekeningBank);
TABLE_PROFIL_PSIKOLOGI = generateTable(dataTable.profilePsikologi, columnProfilePsikologi);
// TABLE_INFORMASI_KESAHATAN = generateTable(dataTable.informasiKesehatan, columnInformasiKesehatan);
TABLE_INFORMASI_KURSUS = generateTable(dataTable.informasiKursus, columnInformasiKursus);
TABLE_CATATAN_PENGALAMAN_KERJA = generateTable(dataTable.informasiAktivasOrganisasi, columnCatatanPengalamanKerja);
TABLE_INFORMASI_AKTIVITAS_ORGANISASI = generateTable(dataTable.informasiAktivasOrganisasi, columnInformasiAktivasOrganisasi);
TABLE_DOKUMEN_YANG_HABIS_MASA_BERLAKUNYA = generateTable(dataTable.documentYangHabisMasaBerlaku, columnDocumentYangHabisMasaBerlaku);
TABLE_INFORMASI_FASILITAS = generateTable(dataTable.informasiFasilitas, columnInformasiFasilitas);
TABLE_INFORMASI_PELATIHAN = generateTable(dataTable.informasiPelatihan, columnInformasiPelatihan);

// --- Belum di setup datanya
// TABLE_CATATAN_KARIR = generateTable(dataTable.catatanKarir, columnCatatanKarir);
// TABLE_IKATAN_DINAS = generateTable(dataTable.ikatanDinas, columnIkatanDinas);
// TABLE_INFORMASI_LAINNYA = generateTable(dataTable.informasiLainnya, columnInformasiLainnya);