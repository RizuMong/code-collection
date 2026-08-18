var get_recurring_holiday = [
    {
        "company_id": 28208,
        "created_at": 1771677475024,
        "created_by": 0,
        "created_by_project_user": "7Jy9G9DdwDi",
        "day": 20,
        "holiday_date": 1771520400000,
        "holiday_scope": "NATIONAL",
        "id": "OySdjjyJNL7T",
        "ids": "OySdjjyJNL7T",
        "is_active": "YES",
        "is_recurring": "YES",
        "month": 2,
        "name": "Hari Malas Sedunia",
        "updated_at": 1771677475080,
        "updated_by": 0,
        "updated_by_project_user": "7Jy9G9DdwDi",
        "valid_from_year": 2021,
        "valid_until_year": 2026,
        "year": 2026
    }
];

var get_non_recurring_holiday = [
    {
        "company_id": 28208,
        "created_at": 1771562179541,
        "created_by": 0,
        "created_by_project_user": "7Jy9G9DdwDi",
        "holiday_date": 1771261200000,
        "holiday_scope": "NATIONAL",
        "id": "T4a3M231RnNv",
        "ids": "T4a3M231RnNv",
        "is_active": "YES",
        "is_recurring": "NO",
        "name": "Tahun Baru Imlek",
        "updated_at": 1771562394764,
        "updated_by": 0,
        "updated_by_project_user": "7Jy9G9DdwDi",
        "valid_from_year": 2026,
        "valid_until_year": 2026
    }
];

// holiday manhours
// nanti validate apakah masih valid gak based on valid_from_year and valid_until_year
// buat kalau valid itu dihitung 8 manhours per 1 record
var start_date = 1769904000000;

var holiday_manhours = 0;
var selectedYear = new Date(start_date).getFullYear();

// helper function
function isHolidayValid(item, year) {
  if (item.is_active !== "YES") return false;

  if (item.valid_from_year && year < item.valid_from_year) return false;

  if (item.valid_until_year && year > item.valid_until_year) return false;

  return true;
}

// recurring holiday
for (var i = 0; i < get_recurring_holiday.length; i++) {
  var item = get_recurring_holiday[i];

  if (isHolidayValid(item, selectedYear)) {
    holiday_manhours += 8;
  }
}

// non-recurring holiday
for (var j = 0; j < get_non_recurring_holiday.length; j++) {
  var item2 = get_non_recurring_holiday[j];

  if (isHolidayValid(item2, selectedYear)) {
    holiday_manhours += 8;
  }
}

console.log(holiday_manhours);