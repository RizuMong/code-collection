// Data External
var dataExternal = [
  {
    company_id: 26788,
    created_at: 1706257316802,
    created_by: 170118,
    delivery_channel_type: "6017",
    fee_transaksi: "600",
    id: "R3SzV7tIR",
    id_data_external: "R3SzV7tIR",
    institusi_pembayar: "TELKOM",
    institusi_penerima: "111",
    jenis_voucher: "REGULER",
    kategori: "PRE PAID AS",
    nama_biller: "TELKOMSEL",
    nilai_pulsa: 100000,
    nomor_resi: "170006870158",
    nomor_seluler: "81282845321",
    nomor_trml: "0",
    tanggal_transaksi: "01-04-24",
    trans_code: "0200_501099",
    updated_at: 1706257316802,
    updated_by: 170118,
    vourcher_reference_number: "900001733915289",
    waktu_transaksi: "12:01:58",
  },
];

// Data Internal
// kolom amount => amount
var dataEtran = [
  {
    acc: 70823046937,
    amount: 75000,
    apl: "w",
    book: 302,
    created_at: 1706517165155,
    created_by: 0,
    date_post: 20240104,
    dc: "d",
    desc1: "Telkomsel Prepaid - 085394111565",
    desc2: "TRX JAKONE MOBILE",
    eff_date: 20240120,
    etry: 799,
    from_acct: 708,
    gl_acct: 230,
    id_etran: "WZVXj5tIR",
    ktrn: "2056",
    nama: "RIRIN SEPTINOPA",
    plan: 109663624,
    time_rev: "18:03",
    trace: 5287,
    updated_at: 1706517165155,
    updated_by: 0,
    user: "JAKOM",
    wsid: "JAKOM",
  },
];
// kolom amount =>  bill_amount
var dataPce = [
  {
    bill_amount: 207080,
    bill_count: 2,
    bill_id: "218011271",
    bill_payment_code: "0300",
    bill_product_id: "001001",
    created_at: 1706598565801,
    created_by: 0,
    dtdate: 20240104,
    eff_date: 20240104,
    flag: "0",
    id_data_pce: "DjOTKTtSR",
    id_index: 863245836,
    leg1_reference_number: "001634004540",
    leg2_stan: "307044",
    noresi: "163404004540",
    pan_number: "5049484800096107",
    stan: 309284,
    target_card_product: "BILLER_FINNET",
    terminal_id: "01634",
    time_end: 20240104000152,
    time_end_hour: "00:01:52",
    time_start: 20240104000152,
    time_start_hour: "00:01:52",
    transaction_amount: 207080,
    transaction_type: "BILL_PAYMENT_SB_TRANSACTION",
    trntime: "256",
    updated_at: 1706598565801,
    updated_by: 0,
  },
];
// kolom amount =>  amount
var dataDiwa = [
  {
    amount: 10000,
    amount_text: "10,000.00",
    authorization_time: "2024-01-05 08:47:08.000",
    authorizer: "SYSTEM",
    batch_number: 41518466,
    cif: "67290",
    converted_amount: 10000,
    converted_amount_text: "10,000.00",
    cr_gl_code: "",
    created_at: 1706861233810,
    created_by: 170118,
    created_time: "2024-01-05 08:47:08.376",
    credit_account: "",
    credit_account_name: "",
    debit_account: "081310431489",
    debit_account_currency: "IDR",
    debit_account_name: "Intan Permata Intan Permata",
    description: "Scan To Pay OnUs| JAKOM | By_MamaKalila JAKARTA TIMUR",
    dr_gl_code: "91192406010",
    id_data_diwa: "HfO6nstIg",
    inputter: "SYSTEM",
    posting_date: "2024-01-05 08:47:08.000",
    rate: 1,
    rate_text: "1.00000",
    stan: "228126",
    status: "LIVE",
    status_import: "success",
    transaction_code: 1011,
    transaction_reference: "228126",
    trx_code_description:
      "Scan To Pay OnUs| JAKOM | By_MamaKalila JAKARTA TIMUR",
    trx_currency: "IDR",
    updated_at: 1706861233898,
    updated_by: 170118,
    value_date: "2024-01-05 08:47:08.000",
  },
];
// kolom amount =>  amount
var dataDtran = [
  {
    acc: 10106023899,
    amount: 4578308,
    apl: "D",
    book: 853,
    created_at: 1706502957565,
    created_by: 0,
    date_post: 20240103,
    dc: "C",
    desc1: "INC MANDIRI 1210001074362",
    desc2: "RS Budi Kemuliaan",
    eff_date: 20240120,
    etry: 911,
    from_acct: 101,
    gl_acct: 106,
    id_dtran: "joaD05tIR",
    ktrn: "153",
    nama: "ASURANSI UMUM B",
    plan: 109472934,
    time_rev: "36:30",
    trace: 302679,
    updated_at: 1706516477678,
    updated_by: 170118,
    user: "USEREBK",
    wsid: "EBKAJA",
  },
];
// kolom amount =>  total_pembayaran_bit61_10
var dataDki = [
  {
    _id: "65b75eed89069f3926447c7d",
    acq_inst_code_bit032: "111",
    additional_data_bit48_0: "087852264882",
    biaya_bit61_9: 1500,
    client_id_bit042: "NWJAKONE",
    client_terminal_id_bit041: "JAKOM",
    created_at: 1706516205770,
    created_by: 0,
    currency_code_bit049: 360,
    date_exipiration_bit014: 2401,
    date_local_transaction_bit013: 104,
    date_settelment_bit015: 105,
    dditional_data_bit48_0: "087852264882",
    desc_private_data_bit61_1: "Pembelian Pulsa Xl",
    destination_account_bit105: "1000/15000",
    dtdate: 20240104,
    fee_amount_bit106: "1000/25000",
    flag: "0",
    fwd_inst_code_bit033: "111",
    harga_bit61_8: 25000,
    id_data_dkilink: "d4Cj95pIR",
    id_index: "1500/200000",
    location_name_bit043: "",
    merchant_type_bit018: 6017,
    nominal_bit61_6: 87852264882,
    nomor_handphone_bit48_0: "087852264882",
    nomor_handphone_bit61_6: "087852264882",
    primary_account_number_bit002: "504948120002537530",
    private_data_bit059: "",
    private_data_bit063: "5000",
    private_data_bit61_1: "150",
    private_data_bit61_2: "100001",
    private_data_bit61_3: "91192254228",
    private_data_bit61_4: "91194423264",
    private_data_bit61_5: "20920020950",
    processing_code_bit003: 501000,
    product_code_biller_bit098: "1000/10000",
    reff_id_private_data_bit61_2: "170012050331",
    reserved1: "DKILINK",
    reserved2: 228060699,
    retrievel_ref_number_bit037: 170012050331,
    source_account_bit107: "1500/50000",
    source_data: "1500/100000",
    status_transaksi_bit61_4: "Berhasil",
    sumber_dana_bit61_5: "xxxxxxxx950",
    system_trace_audit_number_bit011: 1205,
    time_local_transaction_bit012: 331,
    total_pembayaran_bit61_10: 26500,
    transaction_amount_bit004: 25000,
    transmission_date_bit007: 104000331,
    transmission_year_bit062: 2024,
    updated_at: 1706516205770,
    updated_by: 0,
    waktu_transaksi_bit61_3: "04/01/2024 00:03:32 WIB",
  },
];

var hasilAkhir = [];

for (var i = 0; i < dataExternal.length; i++) {
  var external = dataExternal[i];
  var nomorSeluler = "0" + external.nomor_seluler;
  var foundMatch = false;

  for (var j = 0; j < dataEtran.length; j++) {
    var internal = dataEtran[j];
    if (internal.desc1.includes(nomorSeluler)) {
      if (internal.amount === external.nilai_pulsa) {
        external.status_rekonsiliasi = "Match";
      } else {
        external.status_rekonsiliasi = "Unmatch";
      }
      foundMatch = true;
      break;
    }
  }

  if (!foundMatch) {
    for (var j = 0; j < dataPce.length; j++) {
      var internal = dataPce[j];
      if (internal.noresi === external.nomor_resi) {
        if (internal.transaction_amount === external.nilai_pulsa) {
          external.status_rekonsiliasi = "Match";
        } else {
          external.status_rekonsiliasi = "Unmatch";
        }
        foundMatch = true;
        break;
      }
    }
  }

  if (!foundMatch) {
    for (var j = 0; j < dataDiwa.length; j++) {
      var internal = dataDiwa[j];
      if (internal.debit_account === nomorSeluler) {
        if (internal.amount === external.nilai_pulsa) {
          external.status_rekonsiliasi = "Match";
        } else {
          external.status_rekonsiliasi = "Unmatch";
        }
        foundMatch = true;
        break;
      }
    }
  }

  if (!foundMatch) {
    for (var j = 0; j < dataDtran.length; j++) {
      var internal = dataDtran[j];
      if (internal.nama.includes(external.nama_biller)) {
        if (internal.amount === external.nilai_pulsa) {
          external.status_rekonsiliasi = "Match";
        } else {
          external.status_rekonsiliasi = "Unmatch";
        }
        foundMatch = true;
        break;
      }
    }
  }

  if (!foundMatch) {
    for (var j = 0; j < dataDki.length; j++) {
      var internal = dataDki[j];
      if (internal.nomor_handphone_bit61_6 === nomorSeluler) {
        if (internal.transaction_amount_bit004 === external.nilai_pulsa) {
          external.status_rekonsiliasi = "Match";
        } else {
          external.status_rekonsiliasi = "Unmatch";
        }
        foundMatch = true;
        break;
      }
    }
  }

  if (!foundMatch) {
    external.status_rekonsiliasi = "Not Found";
  }

  hasilAkhir.push({
    amount: external.nilai_pulsa,
    approved_by: "",
    biller: external.nama_biller,
    created_at: external.created_at,
    created_by: external.created_by,
    flow_status: "draft",
    id_report: "",
    nomor_resi: external.nomor_resi,
    report_id: external.id,
    status_rekonsiliasi: external.status_rekonsiliasi,
    tagihan_id: external.id_data_external,
    tanggal_transaksi: external.tanggal_transaksi,
    updated_at: external.updated_at,
    updated_by: external.updated_by,
    voucher_reference_number: external.vourcher_reference_number,
    waktu_transaksi: external.waktu_transaksi,
  });
};


console.log(hasilAkhir);