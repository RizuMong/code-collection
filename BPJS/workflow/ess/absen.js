var req = {
        "body": {
            "company_id": 1202,
            "coordinate": "-6.2260729,106.8181516",
            "datetime": "2025-06-18T10:17:38+07:00",
            "description": "",
            "email": "fatkurrizal12@gmail.com",
            "employee_id": "PRMT-0043",
            "location": {
                "address": "Jl Sudirman Raya Kav. 21, Jakarta Pusat, DKI Jakarta",
                "branch_id": 0,
                "latitude": "0",
                "location_gps_id": -1,
                "location_gps_name": "Pusat",
                "location_setting_id": -1,
                "location_setting_name": "Pusat",
                "longitude": "0",
                "radius": 80
            },
            "schedule_break_in": "12:00:00",
            "schedule_break_out": "13:00:00",
            "schedule_in": "09:00:00",
            "schedule_out": "18:00:00",
            "shift_id": 6523,
            "shift_name": "OFFICE",
            "source": "mobileapp",
            "type": "clock_in",
            "user_id": 3581344
        }}

var dateTime = req.body.datetime;
var email = req.body.email;
var dateTimestamp = dateTime ? new Date(dateTime).getTime() : null;
var typeAttendance = req.body.type;

var attendanceLocation = {
    name: "Lokasi Absen Karyawan",
    latitude: Number(req.body.location.latitude),
    longitude: Number(req.body.location.longitude)
};

var datePart = dateTime.split('T')[0];
var datePieces = datePart.split('-');

var year = parseInt(datePieces[0], 10);
var month = parseInt(datePieces[1], 10);
var day = parseInt(datePieces[2], 10);

console.log({
    dateTime: dateTime,
    dateTimestamp: dateTimestamp,
    typeAttendance: typeAttendance,
    attendanceLocation: attendanceLocation,
    year: year,
    month: month,
    day: day  
});
