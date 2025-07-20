var now = new Date();

if (_field.join_date) {
    var start = new Date(_field.join_date);
    if (!isNaN(start)) {
        var diffMs = now.getTime() - start.getTime();
        var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        var years = now.getFullYear() - start.getFullYear();
        var months = now.getMonth() - start.getMonth();
        var days = now.getDate() - start.getDate();

        if (days < 0) {
            months -= 1;
            var lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            days += lastMonth;
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        _field.mk_diakui_tahun = years;
        _field.mk_diakui_bulan = years * 12 + months;
        _field.mk_diakui_hari = diffDays;
    }
};


// Loop untuk menghitung semua `mk_*`
for (var key in _field) {
    if (key.indexOf("tmt_") === 0 && _field[key]) {
        var startTmt = new Date(_field[key]);
        if (!isNaN(startTmt)) {
            var diffMs = now.getTime() - startTmt.getTime();
            var totalHari = Math.floor(diffMs / (1000 * 60 * 60 * 24));

            var tahunTmt = now.getFullYear() - startTmt.getFullYear();
            var bulanTmt = now.getMonth() - startTmt.getMonth();
            var hariTmt = now.getDate() - startTmt.getDate();

            if (hariTmt < 0) {
                bulanTmt -= 1;
                var lastMonthTmtDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
                hariTmt += lastMonthTmtDays;
            }
            if (bulanTmt < 0) {
                tahunTmt -= 1;
                bulanTmt += 12;
            }

            var baseKey = key.replace("tmt_", "mk_");
            _field[baseKey + "_tahun"] = tahunTmt;
            _field[baseKey + "_bulan"] = tahunTmt * 12 + bulanTmt;
            _field[baseKey + "_hari"] = totalHari;
        }
    }
}