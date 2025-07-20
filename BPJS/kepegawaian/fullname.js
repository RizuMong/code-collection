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


var getDetailEmployee = {
        "company_id": 27414,
        "created_at": 1747910942181,
        "created_by": 181258,
        "dob": 767725200000,
        "email": "isyanam@gmail.com",
        "first_name": "Isyana",
        "full_name": "Isyana Mulyadi",
        "gender": "Wanita",
        "golongan_id": {
            "id": "HZlmDmi5ZhvxVPGa",
            "name": "GOL1"
        },
        "grade_jabatan_id": {
            "id": "Io5kUtNXHwFSvUPu",
            "name": "Grade Jabatan 1"
        },
        "id": "AeCSDY7dVqATshA5",
        "id_employee": "AeCSDY7dVqATshA5",
        "jabatan_id": {
            "id": "n0cuwsWspeXQqEjd",
            "name": "Kepala Cabang Head Office"
        },
        "jenjang_pendidikan_diakui": "S2",
        "join_date": 1747846800000,
        "kepemilikan_rumah_dinas": "Kepemilikan BPJS Ketenagakerjaan",
        "last_name": "Mulyadi",
        "level_jabatan_id": {
            "id": "dawfk8QBRRZI4iSk",
            "name": "Kepala Cabang"
        },
        "level_organization_id": {
            "id": "s6SM7vFEdj4l8Wl2",
            "name": "Kantor Cabang Binjai 12"
        },
        "mk_diakui_bulan": 1,
        "mk_diakui_hari": 11,
        "mk_diakui_tahun": 0,
        "mk_golongan_bulan": 1,
        "mk_golongan_hari": 11,
        "mk_golongan_tahun": 0,
        "mk_grade_bulan": 1,
        "mk_grade_hari": 11,
        "mk_grade_tahun": 0,
        "mk_kelompok_jabatan_bulan": 1,
        "mk_kelompok_jabatan_hari": 11,
        "mk_kelompok_jabatan_tahun": 0,
        "mk_level_jabatan_bulan": 1,
        "mk_level_jabatan_hari": 11,
        "mk_level_jabatan_tahun": 0,
        "mk_level_organisasi_bulan": 1,
        "mk_level_organisasi_hari": 11,
        "mk_level_organisasi_tahun": 0,
        "mk_perusahaan_bulan": 1,
        "mk_perusahaan_hari": 11,
        "mk_perusahaan_tahun": 0,
        "mk_posisi_bulan": 1,
        "mk_posisi_hari": 11,
        "mk_posisi_tahun": 0,
        "mk_rumpun_jabatan_bulan": 1,
        "mk_rumpun_jabatan_hari": 11,
        "mk_rumpun_jabatan_tahun": 0,
        "mk_status_jabatan_bulan": 1,
        "mk_status_jabatan_hari": 11,
        "mk_status_jabatan_tahun": 0,
        "mk_status_pegawai_bulan": 1,
        "mk_status_pegawai_hari": 11,
        "mk_status_pegawai_tahun": 0,
        "mk_wilayah_bulan": 1,
        "mk_wilayah_hari": 11,
        "mk_wilayah_tahun": 0,
        "npk": "200072594",
        "organigram_id": 210,
        "pendidikan_diakui": "S2",
        "perusahaan_id": {
            "id": "HZl0yHfgSam1VF8z",
            "name": "BPJS Ketenagakerjaan"
        },
        "position_id": {
            "id": "6XxocKQIJSeygb7T",
            "name": "Kepala Cabang Head Office Binjai"
        },
        "provinsi_id": {
            "id": "yILw2qtCtszJrRfV",
            "name": "Sumatera Utara"
        },
        "rumpun_id": {
            "id": "uhbZTtPHIQ7E2rsp",
            "name": "Kepala Cabang"
        },
        "sequence": 7,
        "status_jabatan_id": {
            "id": "YjMn7y7kmZlbESeJ",
            "name": "Kepala Cabang"
        },
        "status_pegawai": "Kontrak",
        "tgl_mulai_sewa": null,
        "tgl_selesai_sewa": null,
        "tmt_golongan": 1747910945202,
        "tmt_grade": 1747910945202,
        "tmt_kelompok_jabatan": 1747910945202,
        "tmt_level_jabatan": 1747910945202,
        "tmt_level_organisasi": 1747910945202,
        "tmt_perusahaan": 1747910945202,
        "tmt_posisi": 1747910945202,
        "tmt_rumpun_jabatan": 1747910945202,
        "tmt_status_jabatan": 1747910945202,
        "tmt_status_pegawai": 1747910945202,
        "tmt_unit_kerja": 1747910945202,
        "tmt_wilayah": 1747910945202,
        "unit_kerja_id": {
            "id": "wG0Tazqc4tFHfQA7",
            "name": "Binjai"
        },
        "updated_at": 1751475907451,
        "updated_by": 0,
        "user_company_id": 187543,
        "wilayah_id": {
            "id": "0dENx8XWPSxfTLnT",
            "name": "Sumatra Utara"
        },
        "zona_wilayah_id": {
            "id": "jFWZIh5q8MqVwTav",
            "name": "Sumatra"
        }
}

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
    KEWARGANEGARAAN_KARYAWAN: getSafeValue(getDetailEmployee.kebangsaan_id && getDetailEmployee.kebangsaan_id.name),
    NOMOR_INDUK_KEPENDUDUKAN_KARYAWAN: getSafeValue(getDetailEmployee.ktp),
    TEMPAT_LAHIR_KARYAWAN: getSafeValue(getDetailEmployee.pob),
    TANGGAL_LAHIR_KARYAWAN: formatTanggal(getDetailEmployee.dob),
    JENIS_KELAMIN_KARYAWAN: getSafeValue(getDetailEmployee.gender),
    AGAMA_KARYAWAN: getSafeValue(getDetailEmployee.agama_id && getDetailEmployee.agama_id.name),
    STATUS_PERKAWINAN_KARYAWAN: getSafeValue(getDetailEmployee.status_perkawinan),
    SAPAAN_KARYAWAN: getSafeValue(getDetailEmployee.sapaan),
    TANGGAL_PERNIKAHAN_KARYAWAN: formatTanggal(getDetailEmployee.tanggal_pernikahan),
    EMAIL_KARYAWAN: getSafeValue(getDetailEmployee.email),
    TEMPAT_PERNIKAHAN_KARYAWAN: getSafeValue(), // belum ada
};

console.log(dataKaryawan);