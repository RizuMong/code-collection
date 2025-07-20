var req = {
  body: {
    attachments: [
      {
        name: "6867a96a4c662-Screenshot_436.png",
        url: "https://officeless-bpjs-prod-public.oss-ap-southeast-5.aliyuncs.com/27414/6867a96a4c662-Screenshot_436.png",
      },
    ],
    deduct_holiday: true,
    end_date: "20-06-2025",
    is_allowance: true,
    leave_expiry_date: "31-12-2025",
    leave_id: "fdsd#FDsfs",
    leave_quota: 12,
    leave_type: "Cuti",
    once_request: false,
    reason: "family trip",
    start_date: "20-06-2025",
    total_leave_days: 5,
  },
  query: {
    user_id: ["1234567890"],
  },
  header: {
    Authorization: ["Bearer your_token_here"],
  },
};


function _dateToTimestamp(dateStr) {
    if (!dateStr) return null;
    var parts = dateStr.split("-");
    var dateObj = new Date(parts[2], parts[1] - 1, parts[0]);

    return dateObj.getTime();
};

function _log(msg) {
  console.log(msg);
};

var token = "";
var user_id = "";
var start_date = "";
var end_date = "";
var reason = "";
var leave_type = "";
var permission_id = "";
var workflow_id = "pengajuan_cuti";

var attachments = [];
var type_id = {};
var leave_id = {};
var leave_expiry_date = null;
var time_off_days = 0;
var leave_quota = 0;
var once_request = false;
var is_allowance = false;
var deduct_holiday = false;


// validate request
try {
    if (!req.query || !req.query.user_id || !req.query.user_id[0]) {
        throw new Error("Parameter 'user_id' wajib diisi");
    };

    if (!req.header || !req.header.Authorization || !req.header.Authorization[0]) {
        throw new Error("Header Authorization wajib diisi");
    };

    token = req.header.Authorization[0];
    user_id = req.query.user_id[0];
    permission_id = req.body.leave_id || "";
    leave_type = req.body.leave_type || "";
    start_date = req.body.start_date || "";
    end_date = req.body.end_date || "";
    leave_expiry_date = req.body.leave_expiry_date || "";
    total_leave_days = req.body.total_leave_days || "";
    leave_quota = req.body.leave_quota || "";
    reason = req.body.reason || "";
    attachments = req.body.attachments || [];

    if (!permission_id) {
        throw new Error("Leave Id tidak boleh kosong");
    }

    if (!leave_type) {
        throw new Error("Leave Type tidak boleh kosong");
    }

    if (!start_date || !end_date) {
        throw new Error("Range Tanggal time off tidak boleh kosong");
    }

    if (!reason) {
        throw new Error("Alasan time off tidak boleh kosong");
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
    attachments: attachments,
    reason: reason,
    permission_id: permission_id,
    start_date: start_date,
    end_date: end_date,
    leave_expiry_date: leave_expiry_date,
    user_id: user_id
});


// create payload
var payload = {
    // default
    "page_id": 40551,
    "form_ui_id": "rvpkp0Ppnt47CIii",
    "form_data_id": "aCGBEGOPEEMlthr2",
    "data": {
        "type_id": type_id,
        "permission_id": leave_id,
        "leave_expiry_date": _dateToTimestamp(leave_expiry_date),
        "kuota_cuti": leave_quota,
        "estimated_due_date": null,
        "start_date": _dateToTimestamp(start_date),
        "end_date": _dateToTimestamp(end_date),
        "total_date": total_leave_days,
        "once_request": once_request,
        "is_allowance": is_allowance,
        "deduct_holiday": deduct_holiday,
        "reason": reason,
        "attachments": attachments,
        "workflow_id": workflow_id,
    }
};

_log(payload);