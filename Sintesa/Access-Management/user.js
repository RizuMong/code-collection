var generatePhoneID = (function () {
    var PREFIX = ['811', '812', '813', '821', '822', '823', '851', '852', '853',
        '814', '815', '816', '855', '856', '857', '858',
        '817', '818', '819', '859', '877', '878',
        '831', '832', '833', '838',
        '895', '896', '897', '898', '899',
        '881', '882', '883', '884', '885', '886', '887', '888', '889'];
    var used = {};

    return function () {
        var nomor;
        do {
            nomor = '0' + PREFIX[Math.floor(Math.random() * PREFIX.length)];
            for (var i = 0; i < 8; i++) nomor += Math.floor(Math.random() * 10);
        } while (used[nomor]);
        used[nomor] = true;
        return String(nomor);
    };
})();

console.log(generatePhoneID());
