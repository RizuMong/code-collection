var getDetailPengajuan = {
  attachments: [
    {
      name: "6867a96a4c662-Screenshot_436.png",
      url: "https://officeless-bpjs-prod-public.oss-ap-southeast-5.aliyuncs.com/27414/6867a96a4c662-Screenshot_436.png",
    },
  ],
  cancel_status: "NO",
  company_id: 27414,
  created_at: 1751885238242,
  created_by: 187619,
  day: 7,
  deduct_holiday: false,
  employee_id: {
    id: "QRrPQSHnu46sA07d",
    name: "ariesty_integration1@yopmail.com",
  },
  employee_id_text: "QRrPQSHnu46sA07d",
  end_date: 1751821200000,
  estimated_due_date: null,
  flow_id: 139157440,
  flow_status: "canceled",
  id: "tSU3BEsAG2LHyuwR",
  id_pengajuan_employee_cuti: "tSU3BEsAG2LHyuwR",
  is_allowance: true,
  kuota_cuti: 12,
  leave_expiry_date: 1767114000000,
  month: 7,
  note: "",
  once_request: false,
  permission_id: {
    id: "0dEe5m19rQNNT83",
    name: "Cuti Tahunan",
  },
  reason: "family trip",
  requested_by_npk: "100642081",
  start_date: 1751821200000,
  submitted_at: 1751907059910,
  submitted_by: "ariesty_integration1@yopmail.com",
  submitted_by_npk: "100642081",
  talenta_user_id: "3701650",
  total_date: 1,
  type_aps: "WEB",
  type_id: {
    id: "oP8TJmD8G7Moleaq",
    name: "Cuti",
  },
  type_id_text: "s6SBZNA3ICPM8w37",
  updated_at: 1751936462238,
  updated_by: 187619,
  user_id: 3701650,
  workflow_id: "pengajuan_cuti",
  year: 2025,
};

var approverLogs = {
  data: [],
  dataCount: 0,
};

var detailPengajuanBaru = {};
for (var key in getDetailPengajuan) {
  if (getDetailPengajuan.hasOwnProperty(key)) {
    if (key === 'permission_id') {
      detailPengajuanBaru['leave_id'] = getDetailPengajuan[key];
    } else {
      detailPengajuanBaru[key] = getDetailPengajuan[key];
    }
  }
}

var detailData = {
    // attachments: getDetailPengajuan && getDetailPengajuan.attachments ? getDetailPengajuan.attachments : [],
    // leave_id: getDetailPengajuan && getDetailPengajuan.permission_id ? getDetailPengajuan.permission_id : "",
    // created_at: getDetailPengajuan && getDetailPengajuan.created_at ? getDetailPengajuan.created_at : null,
    // total_leave_days: getDetailPengajuan && getDetailPengajuan.total_date ? getDetailPengajuan.total_date : 0,
    // reason: getDetailPengajuan && getDetailPengajuan.reason ? getDetailPengajuan.reason : "",
    // flow_status: getDetailPengajuan && getDetailPengajuan.flow_status ? getDetailPengajuan.flow_status : "",
    // user_id: getDetailPengajuan && getDetailPengajuan.user_id ? getDetailPengajuan.user_id : "",
    // id: getDetailPengajuan && getDetailPengajuan.id_pengajuan_employee_cuti ? getDetailPengajuan.id_pengajuan_employee_cuti : "",
    detail: detailPengajuanBaru,
    // employee_profile: {
    //     full_name: getEmployee && getEmployee.full_name ? getEmployee.full_name : '-',
    //     position: getEmployee && getEmployee.position_id && getEmployee.position_id.name ? getEmployee.position_id.name : '-',
    //     photo_url: getEmployee && getEmployee.foto_profil ? getEmployee.foto_profil : ""
    // },
    approval_list: typeof approverLogs !== 'undefined' ? approverLogs.data : []
};

var res = {
    statusCode: 200,
    error: false,
    message: "succesfully get pengajuan details",
    data: detailData
};

console.log(res);

