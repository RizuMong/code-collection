// ==== Function
function formatTanggal(timestampInput) {
    if (timestampInput === null) {
        return '';
    }

    var date = timestampInput === undefined ? new Date() : new Date(timestampInput);

    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var formattedDay = ("0" + day).slice(-2);
    var formattedMonth = ("0" + month).slice(-2);

    return formattedDay + "-" + formattedMonth + "-" + year;
};

function getSafeValue(value) {
    if (value === undefined || value === null) return '';

    if (typeof value === 'object' && value !== null && value.hasOwnProperty('name')) {
        return value.name || '';
    }

    return value;
}

function _log(msg) {
  console.log(msg);
};

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
        "company_id": 27414,
        "created_at": 1749713670685,
        "created_by": 178566,
        "dob": -806482800000,
        "email": "kucing@mailinator.com",
        "first_name": "kucing",
        "full_name": "kucing hitam",
        "gender": "Pria",
        "golongan_id": {
            "id": "XV"
        },
        "grade_jabatan_id": {
            "id": "SxKzf2wTk1fEIJVY"
        },
        "id": "8gIceOkim6fKREei",
        "id_employee": "8gIceOkim6fKREei",
        "jabatan_id": {
            "id": "VMizIpm7KP76XqSx",
            "name": "3"
        },
        "jenis_golongan": "Non Struktural",
        "jenjang_pendidikan_diakui": "D3",
        "join_date": 1434042000000,
        "kepemilikan_rumah_dinas": "Tidak Ada",
        "last_name": "hitam",
        "level_jabatan_id": {
            "id": "eVm3aQPJaMWp6L5y",
            "name": "Senior Professional"
        },
        "level_organization_id": {
            "id": "1OBwOsxmjFGL7uVa",
            "name": "ILO123455"
        },
        "npk": "100621544",
        "organigram_id": 305,
        "pendidikan_diakui": "IYA",
        "perusahaan_id": {
            "id": "fUT3TuHqkE649U2y",
            "name": "Signea"
        },
        "position_id": {
            "id": "kAaSHHMtRcO4Kxt0",
            "name": "3 Contoh Unit Kerja 2"
        },
        "provinsi_id": {
            "id": "yILw2qtCtszJrRfV",
            "name": "Sumatera Utara"
        },
        "rumpun_id": {
            "id": "Oy9jGVaSD7HCJSyT",
            "name": "Rumpun Jabatan BPJS"
        },
        "sequence": 62,
        "status_jabatan_id": {
            "id": "SxKhJbWKSjFxIjeB",
            "name": "TESTINGDUPLICATE10"
        },
        "status_pegawai": "Tetap",
        "talenta_user_id": 3696889,
        "tgl_mulai_sewa": null,
        "tgl_selesai_sewa": null,
        "tmt_golongan": 1749713672673,
        "tmt_grade": 1749713672673,
        "tmt_kelompok_jabatan": 1749713672673,
        "tmt_level_jabatan": 1749713672673,
        "tmt_level_organisasi": 1749713672673,
        "tmt_perusahaan": 1749713672673,
        "tmt_posisi": 1749713672673,
        "tmt_rumpun_jabatan": 1749713672673,
        "tmt_status_jabatan": 1749713672673,
        "tmt_status_pegawai": 1749713672673,
        "tmt_unit_kerja": 1749713672673,
        "tmt_wilayah": 1749713672673,
        "unit_kerja_id": {
            "id": "8gIxTnIXBft6R4Ii",
            "name": "Contoh Unit Kerja 2"
        },
        "updated_at": 1749713674656,
        "updated_by": 178566,
        "user_company_id": 187617,
        "wilayah_id": {
            "id": "0dENx8XWPSxfTLnT",
            "name": "Sumatra Utara"
        },
        "zona_wilayah_id": {
            "id": "jFWZIh5q8MqVwTav",
            "name": "Sumatra"
        }
    }

// ==== Variable Data
var dataKaryawan = {
    NAMA_LENGKAP: getSafeValue(getDetailEmployee.full_name),
    TANGGAL_PREVIEW: formatTanggal(),
    NPK_KARYAWAN: getSafeValue(getDetailEmployee.npk),
    FOTO_PROFILE_KARYAWAN: getSafeValue(getDetailEmployee.foto_profil),
    STATUS_KARYAWAN: getSafeValue(getDetailEmployee.status_pegawai),
    TMT_MASUK: formatTanggal(getDetailEmployee.join_date),
    TANGGAL_EFEKTIF: formatTanggal(getDetailEmployee.join_date),
    TANGGAL_BERAKHIR: formatTanggal(getDetailEmployee.termination_date),
    JABATAN_KARYAWAN: getSafeValue(getDetailEmployee.jabatan_id && getDetailEmployee.jabatan_id.name),
    UNIT_KERJA_KARYAWAN: getSafeValue(getDetailEmployee.unit_kerja_id && getDetailEmployee.unit_kerja_id.name),
    POSISI_KARYAWAN: getSafeValue(getDetailEmployee.position_id.name),
    KATEGORI_GRADE_KARYAWAN: getSafeValue(getDetailEmployee.grade_jabatan_id.name), // kelompok jabatan based grade
    GRADE: getSafeValue(getDetailEmployee.grade_jabatan_id && getDetailEmployee.grade_jabatan_id.name),
    LEVEL_JABATAN: getSafeValue(getDetailEmployee.level_jabatan_id.name),
    GOLONGAN_KARYAWAN: getSafeValue(getDetailEmployee.golongan_id.name),
    BIDANG_GROUP_URUSAN_KARYAWAN: getSafeValue(), // get dari struktur organisasi atasan spv
    ATASAN_SPV_KARYAWAN: getSafeValue(), // get dari struktur organisasi atasan spv
    STATUS_JABATAN_KARYAWAN: getSafeValue(getDetailEmployee.status_jabatan_id.name),
    UNIT_USAHA_KARYAWAN: getSafeValue(), // belum ada kolomnya
    TANGGAL_MPP: getSafeValue(), // gak tau ambil dari yang mana
    TANGGAL_PENSIUN: getSafeValue(), // hitungnya seperti apa
    KEWARGANEGARAAN_KARYAWAN: getSafeValue(getDetailEmployee.kebangsaan_id.name),
    NOMOR_INDUK_KEPENDUDUKAN_KARYAWAN: getSafeValue(getDetailEmployee.ktp),
    TEMPAT_LAHIR_KARYAWAN: getSafeValue(getDetailEmployee.pob),
    TANGGAL_LAHIR_KARYAWAN: formatTanggal(getDetailEmployee.dob),
    JENIS_KELAMIN_KARYAWAN: getSafeValue(getDetailEmployee.gender),
    AGAMA_KARYAWAN: getSafeValue(getDetailEmployee.agama_id.name),
    STATUS_PERKAWINAN_KARYAWAN: getSafeValue(getDetailEmployee.status_perkawinan),
    SAPAAN_KARYAWAN: getSafeValue(getDetailEmployee.sapaan),
    TANGGAL_PERNIKAHAN_KARYAWAN: formatTanggal(getDetailEmployee.tanggal_pernikahan),
    EMAIL_KARYAWAN: getSafeValue(getDetailEmployee.email),
    TEMPAT_PERNIKAHAN_KARYAWAN: getSafeValue(), // belum ada

    // Content dalam table
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