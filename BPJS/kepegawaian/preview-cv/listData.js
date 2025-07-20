// Generate filter based on useFilterObject flag
function generateFilter(employeeId, useFilterObject) {
  return {
      _filter_version: 2,
      where_is_and: useFilterObject
          ? { "employee_id.id": employeeId }
          : { "employee_id": employeeId },
  };
}

// Common Variables
var sort = { created_at: -1 };
var companyId = payload.data.company_code;

// Helper function to fetch records
function fetchRecords(tableId, useFilterObject) {
  var filter = generateFilter(companyId, useFilterObject);
  return _findRecords(tableId, 1, 1000, sort, filter, "and") || [];
}

// Table ID Map
var tableMap = {
  informasiTempatTinggal: { id: "SxKzboBgClztIIMF", useFilterObject: false },
  informasiKontakDarurat: { id: "kAaQrNOjIdR8K7fj", useFilterObject: true },
  informasiKeluargaTanggungan: { id: "1OBdrnw92yWL7Nq1", useFilterObject: true },
  informasiRelasi: { id: "2BZQBEXges7QYiv4", useFilterObject: false },
  informasiBahasa: { id: "Io5oa1QLEXnFvbZP", useFilterObject: true },
  keahlianPegawai: { id: "6Xxbdvl2hZ30gnbv", useFilterObject: true },
  pendidikan: { id: "7Jj4SfO2T4H8dd47", useFilterObject: true },
  perubahanJabatanSebelumHCIS: { id: "kAaAJPaE7zqxKVw6", useFilterObject: true },
  pemberhentianSebelumHCIS: { id: "zYVEdkefBHFOcAG6", useFilterObject: true }, // masih rancu sama career record
  catatanPenghargaan: { id: "gboZCitApLJ9Har1", useFilterObject: true },
  catatanPelanggaran: { id: "SxKoXOlh0ERhIchb", useFilterObject: true },
  informasiAsuransi: { id: "izezrJ1k2tZUDjKd", useFilterObject: false },
  informasiRekeningBank: { id: "SxKzboBgClztIIMF", useFilterObject: false },
  profilePsikologi: { id: "YjMBlxRbT3MyEmHQ", useFilterObject: true },
  informasiKesehatan: { id: "s6SXinhuqobL8ffv", useFilterObject: false },
  informasiKursus: { id: "wG0FdtyXbnT7fnwx", useFilterObject: true },
  informasiSertifikat: { id: "Io5x4rRuLyUavcbQ", useFilterObject: false },
  catatanPengalamanKerja: { id: "YjMwAfj6QwpWEHFC", useFilterObject: false },
  informasiAktivasOrganisasi: { id: "xDsDxzn3N0DToyZg", useFilterObject: false },
  documentYangHabisMasaBerlaku: { id: "8gIMjTcFTSvBRyNI", useFilterObject: false }, // nested ambil lagi ke t_employee_document_detail
  informasiFasilitas: { id: "lNRNITG4yfs5izU5", useFilterObject: false },
  informasiPelatihan: { id: "Cmkx2XNjXrXjS1VT", useFilterObject: false },

  // --- Belum di setup
  // pemberhentianSebelumHCIS: { id: "id_data_manager", useFilterObject: true },
  // daerahDiminati: { id: "id_data_manager", useFilterObject: true },
  // jenisPekerjaanDiminati: { id: "id_data_manager", useFilterObject: true },
  // ikatanDinas: { id: "id_data_manager", useFilterObject: false },
  // informasiLainnya: { id: "id_data_manager", useFilterObject: false }
};

// Result Object
var results = {};
for (var key in tableMap) {
  if (tableMap.hasOwnProperty(key)) {
      results[key] = fetchRecords(tableMap[key].id, tableMap[key].useFilterObject);
  }
}
