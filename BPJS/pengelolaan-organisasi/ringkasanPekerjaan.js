var ringkasanPekerjaan = "ABC56, TJD12";
var message = [];

if (!ringkasanPekerjaan || ringkasanPekerjaan.replace(/\s/g, "") === "") {
  message.push("Ringkasan Pekerjaan tidak boleh kosong atau tidak valid.");
} else {
  var pekerjaanList = [];
  var rawItems = ringkasanPekerjaan.split(",");

  for (var i = 0; i < rawItems.length; i++) {
    var item = rawItems[i].replace(/^\s+|\s+$/g, "");
    if (item !== "") {
      pekerjaanList.push(item);
    }
  }
}


for (var j = 0; j < pekerjaanList.length; j++) {
  console.log(pekerjaanList[j]);
};
