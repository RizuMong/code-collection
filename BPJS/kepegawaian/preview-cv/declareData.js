// ==== Function
function getSafeValue(value) {
    if (value === undefined || value === null) {
        return '--';
    }

    if (typeof value === 'object') {
        if (value && value.hasOwnProperty('name') && value.name) {
            return value.name;
        } else {
            return '--';
        }
    }

    if (value === '') {
        return '--';
    }

    return value;
}

function formatTanggal(timestampInput) {
    if (timestampInput === null || timestampInput === undefined) {
        return '--';
    }

    var date = new Date(timestampInput);
    if (isNaN(date.getTime())) {
        return '--';
    }

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var formattedDay = ("0" + day).slice(-2);
    var formattedMonth = ("0" + month).slice(-2);

    return formattedDay + "-" + formattedMonth + "-" + year;
}

function getNestedValue(obj, path) {
    var keys = path.split(".");
    for (var i = 0; i < keys.length; i++) {
        if (!obj || typeof obj !== "object") return undefined;
        obj = obj[keys[i]];
    }
    return obj;
};

function generateTable(data, columns) {
    var html = "<tbody>";

    if (!data || data.length === 0) {
        html +=
            '<tr><td colspan="' +
            columns.length +
            '" class="no-data">' +
            "------------------------------ TIDAK ADA DATA ------------------------------" +
            "</td></tr>";
    } else {
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            html += "<tr>";

            for (var j = 0; j < columns.length; j++) {
                var col = columns[j];

                // handle kolom kosong
                if (col.key === "--") {
                    html += "<td></td>";
                    continue;
                }

                // handle auto-numbering
                if (col.key === "NO") {
                    html += "<td>" + (i + 1) + "</td>";
                    continue;
                }

                var value = "";

                // handle combine field
                if (col.combine && col.combine.length > 0) {
                    var parts = [];
                    for (var k = 0; k < col.combine.length; k++) {
                        var combineKey = col.combine[k];
                        var raw = getNestedValue(row, combineKey);
                        var part = raw;

                        // check tipe per item
                        if (col.types && col.types[k] === "date") {
                            part = formatTanggal(raw);
                        }

                        parts.push(part != null ? part : "-");
                    }

                    value = parts.join(col.separator || " ");
                } else {
                    value = getNestedValue(row, col.key);
                    if (col.type === "date") {
                        value = formatTanggal(value);
                    }
                }

                html += "<td>" + (value != null ? value : "-") + "</td>";
            }

            html += "</tr>";
        }
    }

    html += "</tbody>";
    return html;
};

var getDetailEmployee = {
        "agama_id": {
            "id": "RHvZyk4G0g68eJaw",
            "name": "Islam"
        },
        "code_user": "121212121",
        "company_id": 27414,
        "created_at": 1760415843868,
        "created_by": 178566,
        "dob": 971456400000,
        "email": "rizki.galon@mailinator.com",
        "first_name": "Rizki",
        "full_name": "Rizki Galon",
        "gender": "Laki-Laki",
        "golongan_id": {
            "id": "",
            "name": ""
        },
        "grade_jabatan_id": {
            "id": "izulQIvDjf7f"
        },
        "id": "cEj9ClfuQa9y",
        "id_employee": "cEj9ClfuQa9y",
        "jabatan_id": {
            "id": "FpK9hnBGaXkE"
        },
        "jenis_golongan": "Struktural",
        "jenjang_pendidikan_diakui": "D4/S1",
        "join_date": 1760374800000,
        "last_name": "Galon",
        "level_jabatan_id": {
            "id": "izulQIvDjf7f"
        },
        "nomor_ktp": "32012733938383838",
        "npk": "21121212",
        "organigram_id": 932,
        "pendidikan_diakui_id": {
            "id": "Sx5vOHzlsHEBIfJU",
            "name": "Bina Nusantara"
        },
        "perusahaan_id": {
            "id": "rvxyot4CtlnE"
        },
        "pob": "Sukabumi",
        "position_id": {
            "id": "Z3T341oMdUCw",
            "name": "Kepala Bidang Pelayanan (Kelas 3) Kacab Binjai"
        },
        "quota_cdt": 2,
        "rumpun_id": {
            "id": "yIxI01srP3X4"
        },
        "sequence": 200,
        "status_karyawan": "Active",
        "status_pegawai": "Tetap",
        "talenta_user_id": 4034064,
        "tipe_jabatan": "Stuktural",
        "tmt_golongan": 1760415846083,
        "tmt_grade": 1760415846083,
        "tmt_kelompok_jabatan": 1760415846083,
        "tmt_level_jabatan": 1760415846083,
        "tmt_level_organisasi": 1760415846083,
        "tmt_perusahaan": 1760415846083,
        "tmt_posisi": 1760415846083,
        "tmt_rumpun_jabatan": 1760415846083,
        "tmt_status_jabatan": 1760415846083,
        "tmt_status_pegawai": 1760415846083,
        "tmt_unit_kerja": 1760415846083,
        "tmt_wilayah": 1760415846083,
        "unit_kerja_core_id": {
            "id": "VMqVbCbX1mGk",
            "name": "Kantor Cabang Binjai"
        },
        "unit_kerja_id": {
            "id": "GkQkR5mUUcFd",
            "name": "Bidang Pelayanan Kantor Cabang Binjai"
        },
        "updated_at": 1760415848764,
        "updated_by": 178566,
        "user_company_id": 187937,
        "zona_wilayah_id": {
            "id": "VMqHmE7XFmft",
            "name": "3"
        }
}

function _log(msg) {
    console.log(msg);
}

function getSafeValue(obj, path) {
  try {
    if (typeof obj !== "object" || obj === null) return "--";
    var keys = path.split(".");
    var value = obj;
    for (var i = 0; i < keys.length; i++) {
      if (!value || typeof value !== "object" || !(keys[i] in value)) return "--";
      value = value[keys[i]];
    }
    if (value === undefined || value === null || value === "") return "--";
    if (typeof value === "object") return value.name ? value.name : "--";
    return value;
  } catch (e) {
    return "--";
  }
};

var dataKaryawan = {
  NAMA_LENGKAP: getSafeValue(getDetailEmployee, "full_name"),
  TANGGAL_PREVIEW: formatTanggal(),
  NPK_KARYAWAN: getSafeValue(getDetailEmployee, "npk"),
  FOTO_PROFILE_KARYAWAN: getSafeValue(getDetailEmployee, "foto_profil"),
  STATUS_KARYAWAN: getSafeValue(getDetailEmployee, "status_pegawai"),
  TMT_MASUK: formatTanggal(getSafeValue(getDetailEmployee, "join_date")),
  TANGGAL_EFEKTIF: formatTanggal(getSafeValue(getDetailEmployee, "join_date")),
  TANGGAL_BERAKHIR: formatTanggal(getSafeValue(getDetailEmployee, "termination_date")),
  JABATAN_KARYAWAN: getSafeValue(getDetailEmployee, "jabatan_id.name"),
  UNIT_KERJA_KARYAWAN: getSafeValue(getDetailEmployee, "unit_kerja_id.name"),
  POSISI_KARYAWAN: getSafeValue(getDetailEmployee, "position_id.name"),
  KATEGORI_GRADE_KARYAWAN: getSafeValue(getDetailEmployee, "grade_jabatan_id.name"),
  GRADE: getSafeValue(getDetailEmployee, "grade_jabatan_id.name"),
  LEVEL_JABATAN: getSafeValue(getDetailEmployee, "level_jabatan_id.name"),
  GOLONGAN_KARYAWAN: getSafeValue(getDetailEmployee, "golongan_id.name"),
  BIDANG_GROUP_URUSAN_KARYAWAN: getSafeValue(getDetailEmployee, "unit_kerja_id.name"),
  ATASAN_SPV_KARYAWAN: getSafeValue(getDetailEmployee, "atasan_spv.name"), // get dari struktur organisasi atasan spv
  STATUS_JABATAN_KARYAWAN: getSafeValue(getDetailEmployee, "status_jabatan_id.name"),
  UNIT_USAHA_KARYAWAN: getSafeValue(getDetailEmployee, "unit_usaha_id.name"),
  TANGGAL_MPP: getSafeValue(getDetailEmployee, "tanggal_mpp"),
  TANGGAL_PENSIUN: getSafeValue(getDetailEmployee, "tanggal_pensiun"),
  KEWARGANEGARAAN_KARYAWAN: getSafeValue(getDetailEmployee, "kebangsaan_id.name"),
  NOMOR_INDUK_KEPENDUDUKAN_KARYAWAN: getSafeValue(getDetailEmployee, "nomor_ktp"),
  TEMPAT_LAHIR_KARYAWAN: getSafeValue(getDetailEmployee, "pob"),
  TANGGAL_LAHIR_KARYAWAN: formatTanggal(getSafeValue(getDetailEmployee, "dob")),
  JENIS_KELAMIN_KARYAWAN: getSafeValue(getDetailEmployee, "gender"),
  AGAMA_KARYAWAN: getSafeValue(getDetailEmployee, "agama_id.name"),
  STATUS_PERKAWINAN_KARYAWAN: getSafeValue(getDetailEmployee, "status_perkawinan"),
  SAPAAN_KARYAWAN: getSafeValue(getDetailEmployee, "sapaan"),
  TANGGAL_PERNIKAHAN_KARYAWAN: formatTanggal(getSafeValue(getDetailEmployee, "tanggal_pernikahan")),
  EMAIL_KARYAWAN: getSafeValue(getDetailEmployee, "email"),
  TEMPAT_PERNIKAHAN_KARYAWAN: getSafeValue(getDetailEmployee, "tempat_pernikahan"),

  DESKRIPSI_KEAHLIAN_PEGAWAI: "",
  DESKRIPSI_DAERAH_YANG_DIAMATI: "",
  DESKRIPSI_JENIS_PEKERJAAN_YANG_DIMINATI: "",
  TINGGI_BADAN_KARYAWAN: "",
  BERAT_KARYAWAN: "",
  KONDISI_KESEHATAN_YANG_HARUS_DIPERHATIKAN_KARYAWAN: "",
  UKURAN_KEMEJA_KARYAWAN: "",
  GOLONGAN_DARAH_KARYAWAN: "",
  ALASAN_HARUS_MENJALANI_PERAWATAN_KARYAWAN: ""
};

// Table Data
var TABLE_INFORMASI_TEMPAT_TINGGAL_DAN_TELEPON = "";
var TABLE_INFORMASI_KONTAK_DARURAT = "";
var TABLE_INFORMASI_KELUARGA_DAN_TANGGUNGAN = "";
var TABLE_INFORMASI_RELASI = "";
var TABLE_INFORMASI_KEAHLIAN_DAN_MINAT = "";
var TABLE_PENDIDIKAN = "";
var TABLE_PERUBAHAN_JABATAN_GRADE_SEBELUM_HCIS = "";
var TABLE_PEMBERHENTIAN_SEBELUM_HCIS = "";
var TABLE_CATATAN_KARIR = "";
var TABLE_CATATAN_PENGHARGAAN = "";
var TABLE_CATATAN_PELANGGARAN = "";
var TABLE_INFORMASI_ASURANSI = "";
var TABLE_INFORMASI_REKENING_BANK = "";
var TABLE_IKATAN_DINAS = "";
var TABLE_PROFIL_PSIKOLOGI = "";
var TABLE_INFORMASI_KESAHATAN = "";
var TABLE_INFORMASI_KURSUS = "";
var TABLE_INFORMASI_SERTIFIKAT = "";
var TABLE_CATATAN_PENGALAMAN_KERJA = "";
var TABLE_INFORMASI_AKTIVITAS_ORGANISASI = "";
var TABLE_DOKUMEN_YANG_HABIS_MASA_BERLAKUNYA = "";
var TABLE_INFORMASI_LAINNYA = "";
var TABLE_INFORMASI_FASILITAS = "";
var TABLE_INFORMASI_PELATIHAN = "";

_log(dataKaryawan)