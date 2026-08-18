var created_at = "2026-08-10T17:33:55.645+07:00";


function getYear(dateString) {
  return new Date(dateString).getFullYear();
};

console.log(getYear(created_at));