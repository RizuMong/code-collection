var getLatestData = [
  {
    blackout_end_date: 1978707600000,
    blackout_start_date: 1978534800000,
    company_id: 25236,
    created_at: 1694493091696,
    created_by: 166460,
    description: "test period 2033 update",
    dibuat_oleh: "RIYAN.MELIZA@mailinator.com",
    diedit_oleh: "RIYAN.MELIZA@mailinator.com",
    id: "WXbQbViSg",
    id_key: 11,
    id_master_periode: "WXbQbViSg",
    is_project_based: false,
    name: "test period 2032",
    non_project: "1",
    periode_back_date: 0,
    periode_end_date: 2010070800000,
    periode_start_date: 1978534800000,
    updated_at: 1694493177861,
    updated_by: 166460,
  },
];

var req = {
  period: "2029",
};

var year = parseInt(req.period, 10);

function getTimestamp(day, month, year) {
  return new Date(year, month - 1, day, 0, 0, 0).getTime();
}

var payloadData = {
  blackout_end_date: getTimestamp(31, 12, year),
  blackout_start_date: getTimestamp(30, 12, year), 
  description: "Periode " + year,
  dibuat_oleh: "R.DITARUNA@CIMBNIAGA.CO.ID",
  id_key: getLatestData[0].id_key + 1,
  is_project_based: false,
  name: req.period,
  non_project: "1",
  periode_back_date: 0,
  periode_start_date: getTimestamp(1, 1, year),
  periode_end_date: getTimestamp(31, 12, year)
};

console.log(payloadData);
