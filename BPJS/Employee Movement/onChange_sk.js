if (!_field.nomor_sk) {
  _field.tanggal_efektif = null;
  _field.tanggal_surat = null;
  _field.surat_sk = null;
} else {
  _field.tanggal_efektif = _field.nomor_sk.tanggal_efektif;
  _field.tanggal_surat = _field.nomor_sk.tanggal_surat;
  _field.surat_sk = _field.nomor_sk.url_pdf;
};