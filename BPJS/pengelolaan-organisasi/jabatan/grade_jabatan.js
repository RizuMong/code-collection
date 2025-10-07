var grade_id = {
//   id: "12132",
  name: "11 - Spesialis",
//   name: "11 - ",
};

var tipe_jabatan = "";
var job_grade = "";

if (grade_id && typeof grade_id.name === "string") {
  var parts = grade_id.name.split(" - ").map(function(p) { return p.trim(); }).filter(Boolean);

  if (parts.length >= 2 && /^\d+$/.test(parts[0])) {
    job_grade = parts[0];
    tipe_jabatan = parts[1];
  }
  if (parts.length === 1 && /^\d+$/.test(parts[0])) {
    job_grade = parts[0];
  }
  if (parts.length >= 1 && /^\D+$/.test(parts[0])) {
    tipe_jabatan = parts[0];
  }
}

console.log("job_grade:", job_grade);
console.log("tipe_jabatan:", tipe_jabatan);


// buat kalau gak nemu data sesuai dengan parts nya dia maka return empty string
// jadi misal dia ngasih data "11-" atau "11 - " atau "11 - Spesialis" atau "11 - Spesialis - Senior"
// maka yang diambil cuma "11" dan "Spesialis" aja
// kalau misal dia ngasih data "11" atau "11-" atau "11 - " maka yang diambil cuma "11" aja
// kalau misal dia ngasih data " - Spesialis" atau " - Spesialis - Senior" maka yang diambil cuma "Spesialis" aja
// kalau misal dia ngasih data yang gak sesuai format misal "Spesialis - 11" atau "Spesialis" atau "Senior - Spesialis" maka return empty string untuk kedua variabel tersebut