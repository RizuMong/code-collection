try {
    if (!req.query || !req.query.user_id || !req.query.user_id[0]) {
        throw new Error("Parameter 'user_id' wajib diisi");
    };

    if (!req.header || !req.header.Authorization || !req.header.Authorization[0]) {
        throw new Error("Header Authorization wajib diisi");
    };

    token = req.header.Authorization[0];
    user_id = req.query.user_id[0];
    attendance_date = req.body.attendance_date || "";
    attendance_type = req.body.attendance_type || "";
    work_location_type = req.body.work_location_type || "";
    attendance_time = req.body.attendance_time || "";
    note = req.body.note || "";
    time_off_days = req.body.time_off_days || "";
    image_url = req.body.image_url || "";
    attachment_url = req.body.attachment_url || "";

    if (!attendance_date) {
        throw new Error("attendance date tidak boleh kosong");
    }

    if (!attendance_type) {
        throw new Error("attendance type tidak boleh kosong");
    }

    if (!work_location_type) {
        throw new Error("work location type tidak boleh kosong");
    }

    if (!attendance_time) {
        throw new Error("attendance time tidak boleh kosong");
    }

    if (!note) {
        throw new Error("note tidak boleh kosong");
    }

    if (!image_url) {
        throw new Error("image tidak boleh kosong");
    }

} catch (err) {
    _log("Failed to parse required fields: " + err.message);
    res = {
        error: true,
        code: 400,
        message: err.message,
        data: {},
    };
    _stopAutomation();
};

_log({
    attendance_date: attendance_date,
    attendance_type: attendance_type,
    work_location_type: work_location_type,
    attendance_time: attendance_time,
    note: note,
    image_url: image_url,
    attachment_url: attachment_url,
    user_id: user_id
});
