var item = {
  email: "dede.andarso@ppa.co.id",
};

var isNotDelete = false;

var listEmail = [
    "dede.andarso@ppa.co.id",
    "sulthon.aulia@ppa.co.id",
    "aditya.rendy@ppa.co.id",
    "basith.muhammad@ppa.co.id",
    "anindita.fitriyani@ppa.co.id",
    "rizki.aditia@sdn.co.id",
    "iqbal.zimamul@ppa.co.id",
    "ari.wibowo@ppa.co.id",
    "harwiyanto@ppa.co.id",
    "sunaryo@ppa.co.id",
    "dwi.fitriadi@ppa.co.id",
    "ardiananta@ppa.co.id",
    "hc.ba@ppa.co.id",
    "dhani@ppa.co.id",
    "rizki.ramadhan@ppa.co.id",
    "muzani@ppa.co.id",
    "m.armaidi@amm.id",
    "angga.heriresmawan@ppa.co.id",
    "suhud.hilmy@amm.id",
    "fredyrputra@yahoo.com",
    "didik.sugiantoro@ppa.co.id",
    "wawan.setianto@ppa.co.id",
];

for (var i = 0; i < listEmail.length; i++) {
    if (listEmail[i] === item.email) {
        isNotDelete = true;
        break;
    }
}

console.log(isNotDelete);
