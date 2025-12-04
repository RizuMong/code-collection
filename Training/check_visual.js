var html =
  '' +
  '<!DOCTYPE html>\n' +
  '<html>\n' +
  '<head>\n' +
  '<meta charset="UTF-8" />\n' +
  '<title>INSPEKSI VISUAL PRODUK (INGOT)</title>\n' +
  '</head>\n' +
  '<body style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; margin:0; padding:0; color:#000;">\n' +
  '<table border="0" cellspacing="0" cellpadding="0" align="center" width="820" ' +
  'style="border:1px solid #d1d5db; border-collapse:collapse; background-color:#ffffff; margin-top:15px;">\n' +
  '<tr><td style="padding:25px 20px 20px 20px;">\n' +

  // HEADER
  '<table border="0" cellspacing="0" cellpadding="0" width="100%">\n' +
  '<tr><td align="center">\n' +
  '<img src="https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/nocode/file-upload/dev/28201/7JyBVJldGDQv-logo-mapi.jpg" ' +
  'style="height:90px; margin-bottom:10px;" />\n' +
  '</td></tr>\n' +
  '<tr><td align="center" style="padding-top:8px; font-size:22px; font-weight:bold;">INSPEKSI VISUAL PRODUK (INGOT)</td></tr>\n' +
  '<tr><td align="center" style="padding-top:3px; font-size:12px;">NOMOR_DOKUMEN</td></tr>\n' +
  '<tr><td style="padding-top:15px;"><hr style="border:0; border-top:1px solid #d1d5db;" /></td></tr>\n' +
  '</table>\n' +

  // FORM UTAMA
  '<table border="0" cellspacing="0" cellpadding="6" width="100%" style="margin-top:8px; font-size:14px;">\n' +
  '<tr><td style="width:32%;">Tanggal Produksi</td><td style="border-bottom:1px solid #d1d5db;">TANGGAL_PRODUKSI</td></tr>\n' +

  '<tr><td>Nomor Charge</td><td style="border-bottom:1px solid #d1d5db;">NOMOR_CHARGE</td></tr>\n' +
  '<tr><td>Nama Produk</td><td style="border-bottom:1px solid #d1d5db;">NAMA_PRODUK</td></tr>\n' +
  '<tr><td>Jumlah Produk</td><td>\n' +
  '<table width="100%"><tr>\n' +
  '<td style="border-bottom:1px solid #d1d5db; width:40%;">JUMLAH_PRODUK</td>\n' +
  '<td style="padding-left:6px; font-size:12px;">Kg</td>\n' +
  '</tr></table>\n' +
  '</td></tr>\n' +
  '<tr><td>Total Bundle</td><td style="border-bottom:1px solid #d1d5db;">TOTAL_BUNDLE</td></tr>\n' +
  '<tr><td>Tanggal Pemeriksaan</td><td style="border-bottom:1px solid #d1d5db;">TANGGAL_PEMERIKSAAN</td></tr>\n' +
  '<tr><td>Analisa Komposisi Kimia</td><td>\n' +
  '<table><tr>\n' +
  '<td style="width:16px; height:16px; border:1px solid #a4a4a4; font-size:11px; text-align:center;">ANALISA_KOMPOSISI_KIMIA</td>\n' + // ✓
  '<td style="padding-left:8px;">OK</td>\n' +
  '</tr></table>\n' +
  '</td></tr>\n' +
  '<tr><td>K-Value</td><td style="border-bottom:1px solid #d1d5db;">K_VALUE</td></tr>\n' +
  '<tr><td>Genatsu Gyoko</td><td>\n' +
  '<table width="100%" style="margin-bottom:10px;"><tr>\n' +
  '<td style="border-bottom:1px solid #d1d5db; width:40%;">GENATSU_GYOKO</td>\n' +
  '<td style="padding-left:6px; font-size:12px;">cc/100gAl</td>\n' +
  '</tr></table>\n' +
  '</td></tr>\n' +
  '</table>\n' +

  // CEK VISUAL
  '<h4 style="font-weight:bold; margin-bottom:6px; font-size:16px; margin-top:16px;">CEK VISUAL</h4>\n' +
  '<table border="1" cellspacing="0" cellpadding="8" width="100%" ' +
  'style="border-collapse:collapse; font-size:13px; text-align:center; margin-top:20px;">\n' +
  '<tr style="background:#f3f4f6; font-weight:bold;">\n' +
  '<td style="width:4%;">No</td>\n' +
  '<td>Gas Bintik Kasar</td>\n' +
  '<td>Lubang</td>\n' +
  '<td>Gelembung</td>\n' +
  '<td>Bari</td>\n' +
  '<td>Pengotor</td>\n' +
  '<td>Berat</td>\n' +
  '<td>Susunan Ingot</td>\n' +
  '<td>Marking</td>\n' +
  '<td>Judgement</td>\n' +
  '<td>Note</td>\n' +
  '</tr>\n' +

  // TABLE CHECK VISUAL DATA
  '<tr>\n' +
  '<td>1</td>\n' +
  '<td style="font-size:14px;">✓</td>\n' +
  '<td style="font-size:14px;">✓</td>\n' +
  '<td style="font-size:14px;">✓</td>\n' +
  '<td style="font-size:14px;">✓</td>\n' +
  '<td style="font-size:14px;">✓</td>\n' +
  '<td style="font-size:14px;">✓</td>\n' +
  '<td style="font-size:14px;">X</td>\n' +
  '<td style="font-size:14px;">✓</td>\n' +
  '<td style="font-size:14px;">✓</td>\n' +
  '<td></td>\n' +
  '</tr>\n' +
  '</table>\n' +

  // TTD DIBUAT OLEH
  '<table width="100%" style="margin-top:30px; font-size:13px;">\n' +
  '<tr><td style="font-weight:bold; padding-bottom:6px;">Dibuat oleh:</td></tr>\n' +
  '<tr><td>\n' +
  '<table width="320" height="110" border="1" style="border-collapse:collapse;">\n' +
  '<tr><td align="center">\n' +
  '<img src="https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/nocode/file-upload/dev/28201/7JyBVJldGDQv-logo-mapi.jpg" ' +
  'style="height:70px;" />\n' +
  '</td></tr>\n' +
  '</table>\n' +
  '</td></tr>\n' +
  '<tr><td style="padding-top:6px;">\n' +
  '<table width="320" border="0" cellspacing="0" cellpadding="0">\n' +
  '<tr><td style="border-bottom:1px solid #000; text-align:center; padding-top:3px;">Rizki Haddi Prayoga</td></tr>\n' +
  '</table>\n' +
  '</td></tr>\n' +
  '</table>\n' +

  // TTD DISETUJUI OLEH
  '<table width="100%" style="margin-top:25px; font-size:13px;">\n' +
  '<tr><td style="font-weight:bold; padding-bottom:6px;">Disetujui oleh:</td></tr>\n' +
  '<tr><td>\n' +
  '<table width="320" height="110" border="1" style="border-collapse:collapse;">\n' +
  '<tr><td align="center">\n' +
  '<img src="https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/nocode/file-upload/dev/28201/7JyBVJldGDQv-logo-mapi.jpg" ' +
  'style="height:70px;" />\n' +
  '</td></tr>\n' +
  '</table>\n' +
  '</td></tr>\n' +
  '<tr><td style="padding-top:6px;">\n' +
  '<table width="320" border="0" cellspacing="0" cellpadding="0">\n' +
  '<tr><td style="border-bottom:1px solid #000; text-align:center; padding-top:3px;">Ari Anggoro</td></tr>\n' +
  '</table>\n' +
  '</td></tr>\n' +
  '</table>\n' +

  // NAMA INSPECTOR
  '<table border="0" cellspacing="0" cellpadding="6" style="margin-top:25px; font-size:13px;" width="100%">\n' +
  '<tr>\n' +
  '<td style="width:30%;">Nama Inspector</td>\n' +
  '<td style="border-bottom:1px solid #d1d5db;">Rizki Haddi Prayoga</td>\n' +
  '</tr>\n' +
  '</table>\n' +

  '</td></tr>\n' +
  '</table>\n' +
  '</body>\n' +
  '</html>';
